import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const sellerLogin = createAsyncThunk<any, any>("/auth/signing", 
    async(loginRequest, {rejectWithValue}
    )=>{
        try {
            const response = await api.post("/sellers/login",loginRequest)
            console.log("sellers login otp", response.data);
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt);
            return response.data;
        } catch (error) {
            console.log("error seller: ",error)
        }
    }
)