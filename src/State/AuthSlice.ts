import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp", 
    async(
        {email}:{email:string}, {rejectWithValue}
    )=>{
        try {
            const response = await api.post("/auth/sent/login-signup-otp",{email})
            console.log("sent login otp", response);
        } catch (error) {
            console.log("error seller: ",error)
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
            return response.data.jwt;
        } catch (error) {
            console.log("error customer: ",error)
        }
    }
)

export const signupCustomer = createAsyncThunk<any, any>("/auth/signup", 
    async(signupRequest, {rejectWithValue}
    )=>{
        try {
            const response = await api.post("/auth/signing",signupRequest)
            console.log("login otp", response.data);
            localStorage.setItem("jwt", response.data.jwt);
            return response.data.jwt;
        } catch (error) {
            console.log("error customer: ",error)
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