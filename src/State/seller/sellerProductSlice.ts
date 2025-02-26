import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";

export const fetchSellerProducts = createAsyncThunk<Product[], any>("sellerProduct/fetchSellerProducts",
    async(jwt, {rejectWithValue}) =>{
        try {
            const response = await api.get(`/api/sellers/product`,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            })
            const data = response.data;
            console.log("Seller products", data);
            return data;
        } catch (error) {
            console.log("Seller products error", error);
            throw error;
        }
    }
)

export const createProduct = createAsyncThunk<Product,{request:any, jwt:string | null}>("sellerProduct/createProduct",
    async(args, {rejectWithValue}) =>{
        const {request, jwt} = args;
        try {
            const response = await api.post(`/api/sellers/product`, request,{
                headers:{
                    Authorization: `Bearer ${jwt}`,
                },
            })
            const data = response.data;
            console.log("Create product", data);
            return data;
        } catch (error) {
            console.log("Create Product error", error);
            throw error;
        }
    }
)

interface SellerProductState{
    products:Product[];
    loading: boolean;
    error: string | null | undefined;
}

const initialState: SellerProductState ={
    products:[],
    loading: false,
    error: null,
}

const sellerProductSlice = createSlice({
    name: "sellerProduct",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProducts.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchSellerProducts.fulfilled,(state, action) =>{
            state.loading=false;
            state.products = action.payload;
        })
        builder.addCase(fetchSellerProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })


        builder.addCase(createProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(createProduct.fulfilled,(state, action) =>{
            state.loading=false;
            state.products.push(action.payload)
        })
        builder.addCase(createProduct.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default sellerProductSlice.reducer;