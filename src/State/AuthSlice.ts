import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";    
import { boolean } from "yup";
import { User } from "../types/UserTypes";

export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp", 
    async(
        {email}:{email:string}, {rejectWithValue}
    )=>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email})
            console.log("sent login otp", response);
        } catch (error) {
            console.log("error sent otp: ",error)
        }
    }
)

export const signinCustomer = createAsyncThunk<any, any>("/auth/signing", 
    async(loginRequest, {rejectWithValue}
    )=>{
        try {
            const response = await api.post("/auth/signing",loginRequest)
            console.log("login otp", response.data);
            localStorage.setItem("jwt", response.data.jwt);
            return response.data;
        } catch (error) {
            console.log("error login customer: ",error)
        }
    }
)

export const signupCustomer = createAsyncThunk<any, any>("/auth/signup", 
    async(signupRequest, {rejectWithValue}
    )=>{
        try {
            const response = await api.post("/auth/signup",signupRequest)
            console.log("signup otp", response.data);
            localStorage.setItem("jwt", response.data.jwt);
            return response.data;
        } catch (error) {
            console.log("error signup customer: ",error)
        }
    }
)

// export const fetchUserProfile = createAsyncThunk<any, any>("/auth/fetchUserProfile", 
//     async(jwt:string, {rejectWithValue}
//     )=>{
//         try {
//             const response = await api.get("/user/profile",{
//                 headers:{
//                     Authorization: `Bearer ${jwt}`,
//                 }
//             })
//             console.log("Fetch user profile", response.data);
//             return response.data;
//         } catch (error) {
//             console.log("error fetch user profile: ",error)
//         }
//     }
// )

export const fetchUserProfile = createAsyncThunk<any, any>("/auth/fetchUserProfile", 
    async(
        {jwt}, {rejectWithValue}
    )=>{
        try {
            const response = await api.get("/user/profile",{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            })
            console.log("Fetch user profile", response.data);
            return response.data;
        } catch (error) {
            console.log("error Fetch user profile: ",error)
        }
    }
)

export const logout = createAsyncThunk<any, any>("/auth/logout",
    async(navigate, {rejectWithValue}) =>{
        try{
            localStorage.clear()
            console.log("logout success");
            
            navigate("/"); 
        }catch(error){
            console.log("Logout error",error);
        }
    }
)

interface AuthState{
    jwt: string | null,
    otpSent: boolean,
    isLoggedIn: boolean,
    user: User | null,
    loading: boolean
}

const initialState: AuthState = {
    jwt: null,
    otpSent: false,
    isLoggedIn: false,
    user:null,
    loading:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers: builder =>{
        builder.addCase(sendLoginSignupOtp.pending, (state) =>{
            state.loading=true
        }) 

        builder.addCase(sendLoginSignupOtp.fulfilled, (state) =>{
            state.loading=false;
            state.otpSent=true;
        }) 

        builder.addCase(sendLoginSignupOtp.rejected, (state) =>{
            state.loading=false
        }) 

        builder.addCase(signinCustomer.fulfilled, (state, action) =>{
            state.jwt = action.payload.jwt;
            state.isLoggedIn = true
        }) 

        builder.addCase(signupCustomer.fulfilled, (state, action) =>{
            state.jwt = action.payload;
            state.isLoggedIn = true
        })

        builder.addCase(fetchUserProfile.fulfilled, (state, action) =>{
            state.user = action.payload;
            state.isLoggedIn = true
        })

        builder.addCase(logout.fulfilled, (state) =>{
            state.jwt = null;
            state.isLoggedIn = false;
            state.user = null;
        })
    }
})  
export default authSlice.reducer;