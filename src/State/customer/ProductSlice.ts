import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/ProductTypes";


const API_URL = "http://localhost:8081/products";
export const fetchProductById = createAsyncThunk("products/fetchProductById", 
    async(productId:number, {rejectWithValue})=>{
    try{
        const response = await axios.get(`${API_URL}/${productId}`);
        const data = response.data;
        console.log(" Find productById: ", data);
        return data;
    }catch(error){
        console.error("Find productById Error",error);
    }
})

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
        console.error("Find product error",error);
    }
})

export const fetchAllProducts = createAsyncThunk<any, any>(
    "products/fetchAllProducts",
    async (params, { rejectWithValue }) => {
        try {
            console.log("Fetching API with params:", params);
            const response = await axios.get(`${API_URL}`, {
                params: {
                    ...params,
                    pageNumber: params.pageNumber || 0
                }
            });
            console.log("API Response:", response.data);
            return response.data;
        } catch (error: any) {
            console.error("All product Error", error);
            return rejectWithValue(error.response?.data || "Unknown error");
        }
    }
);


interface ProductState{
    product: Product | null;
    products:Product[];
    totalPages:number;
    loading:boolean;
    error:string | null | undefined | any;
    searchProduct:Product[]
}

const initialState : ProductState = {
    product: null,
    products:[],
    totalPages:1,
    loading:false,
    error: null,
    searchProduct:[]
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
        builder.addCase(fetchProductById.pending, (state) =>{
            state.loading = true;
        })

        builder.addCase(fetchProductById.fulfilled, (state, action) =>{
            state.loading = false;
            state.product = action.payload;
            // state.products = action.payload?.content || [];
        })

        builder.addCase(fetchProductById.rejected,(state, action) =>{
            state.loading = false;
            state.error = action.payload;
        })


        builder.addCase(fetchAllProducts.pending, (state) =>{
            state.loading = true;
        })

        builder.addCase(fetchAllProducts.fulfilled, (state, action) =>{
            state.loading = false;
            state.products = action.payload?.content || [];
        })

        builder.addCase(fetchAllProducts.rejected,(state, action) =>{
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(searchProduct.pending, (state) =>{
            state.loading = true;
        })

        builder.addCase(searchProduct.fulfilled, (state, action) =>{
            state.loading = false;
            state.products = action.payload?.content || [];
        })

        builder.addCase(searchProduct.rejected,(state, action) =>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;