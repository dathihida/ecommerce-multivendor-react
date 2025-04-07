import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishList, WishListState } from "../../types/wishListTypes";
import { api } from "../../config/Api";

const initialState: WishListState={
    wishlist: null,
    loading: false,
    error: null
};

export const getWishlistByUserId = createAsyncThunk(
    "wishlist/getWishlistByUserId", 
    async(_, {rejectWithValue}) =>{
        try {
            const response = await api.get(`/api/wishlist`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`, 
                }
            })
            console.log("wishlist fetch", response.data);
            return response.data;
        } catch (error: any) {
            console.log("Error", error);
            return rejectWithValue(
                error.response?.data.message || "Failed to fetch wishlist"
            )
        }
    }
)

export const addProductToWishlist = createAsyncThunk(
    "wishlist/addProductToWishlist", 
    async(
        {productId}:{productId: number},
        {rejectWithValue}
    ) =>{
        try {
            const response = await api.post(
                `/api/wishlist/add-product/${productId}`,
                { },
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    }
                }
            )
            console.log("add product to wish list" , response.data)
            return response.data;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data.message || "Failed to add product to wishlist"
            )
        }
        
    }
)

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        resetWishlistState: (state)=>{
            state.wishlist = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getWishlistByUserId.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getWishlistByUserId.fulfilled, 
            (state, action: PayloadAction<WishList>) =>{
                state.wishlist = action.payload;
                state.loading = true;
        })
        builder.addCase(getWishlistByUserId.rejected, 
            (state, action: PayloadAction<any>) =>{
                state.loading = false;
                state.error = action.payload;
                
        })

        builder.addCase(addProductToWishlist.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(addProductToWishlist.fulfilled, 
            (state, action: PayloadAction<WishList>) =>{
                state.wishlist = action.payload;
                state.loading = false;
        })
        builder.addCase(addProductToWishlist.rejected, 
            (state, action: PayloadAction<any>) =>{
                state.loading = false;
                state.error = action.payload;
                
        })
    }
})

export const {resetWishlistState} = wishlistSlice.actions;
export default wishlistSlice.reducer;
