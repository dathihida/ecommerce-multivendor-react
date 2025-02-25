import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8081/products";
export const searchProduct = createAsyncThunk("products/searchProduct", 
    async(query, {rejectWithValue})=>{
    try{
        const response = await axios.get(`${API_URL}/search`,{
            params:{
                query,
            }
        });
        const data = response.data;
        console.log("search product: ", data);
        return data;
    }catch(error){
        console.error("Find productById",error);
    }
})