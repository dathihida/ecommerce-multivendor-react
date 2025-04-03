import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../../types/cartTypes";
import { api } from "../../config/Api";
import { sumCartItemMrpPrice, sumCartItemSellingPrice } from "../../Util/sumCartItemMrpPrice";
import { applyCoupon } from "./couponSlice";

interface CartState{
    cart: Cart | null;
    loading: boolean;
    error:string | null;
}

const initialState: CartState = {
    cart: null,
    loading: false,
    error: null,
}

const API_URL = "/api/cart";

export const fetchUserCart = createAsyncThunk<Cart, string>("cart/fetchUserCart",async(jwt:string, {rejectWithValue})=>{
    try {
        const response = await api.get(API_URL,{
            headers:{
                Authorization: `Bearer ${jwt}`,
            }
        })
        console.log("Cart fetch: ", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error: Failed to fetch user cart", error.response);
    }
})

interface AddItemRequest{
    productId: number | undefined;
    size: string;
    quantity: number;
}

export const addItemToCart = createAsyncThunk<
    CartItem, 
    {jwt:string | null; request: AddItemRequest}
>("cart/addItemToCart", async ({jwt, request}, {rejectWithValue}) =>{
    try {
        const response = await api.put(`${API_URL}/add`, request,{
            headers:{
                Authorization: `Bearer ${jwt}`,
                //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NDM2NjkzMzIsImV4cCI6MTc0Mzc1NTczMiwiZW1haWwiOiJ0aWVuZGF0MDYwNzA5QGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjoiUk9MRV9DVVNUT01FUiJ9.kiSXNUP4bQgNmJQBP86gOuqe7Tn4lpYug2jn_i_XW1k',
            },
        });
        console.log("Cart added", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error: Failed to add item to cart", error.response);
    }
})

export const deleteItemToCart = createAsyncThunk<
    any, 
    {jwt:string; cartItemId: number}
>("cart/deleteCartItem", async ({jwt, cartItemId}, {rejectWithValue}) =>{
    try {
        const response = await api.delete(`${API_URL}/item/${cartItemId}`,{
            headers:{
                Authorization: `Bearer ${jwt}`,
            },
        });
        console.log("Delete item to cart", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error: Failed to delete cart item", error.response);
    }
})

export const updateCartItem = createAsyncThunk<
    any, 
    {jwt:string | null; cartItemId: number; cartItem:any}
>("cart/updateCartItem", 
    async ({jwt, cartItemId, cartItem}, {rejectWithValue}) =>{
    try {
        const response = await api.put(`${API_URL}/item/${cartItemId}`, cartItem,{
            headers:{
                Authorization: `Bearer ${jwt}`,
            },
        });
        console.log("Update cart item", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error: Failed to update cart item", error.response);
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        resetCartState: (state) =>{
            state.cart = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchUserCart.pending,(state) =>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserCart.fulfilled, (state, action: PayloadAction<Cart>)=>{
                state.cart = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserCart.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(addItemToCart.pending,(state) =>{
                state.loading = true;
                state.error = null;
            })
            .addCase(addItemToCart.fulfilled, (state, action: PayloadAction<CartItem>)=>{
                if(state.cart){
                    state.cart.cartItems.push(action.payload);
                }
                state.loading = false;
            })
            .addCase(addItemToCart.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(deleteItemToCart.pending,(state) =>{
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteItemToCart.fulfilled, (state, action)=>{
                if(state.cart){
                    state.cart.cartItems = state.cart.cartItems.filter(
                        (item:CartItem) =>item.id != action.meta.arg.cartItemId
                    );
                    const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || [])
                    const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || [])
                    state.cart.totalSellingPrice = sellingPrice;
                    state.cart.totalMrpPrice = mrpPrice;
                }
                state.loading = false;
            })

            .addCase(deleteItemToCart.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(updateCartItem.pending, (state) =>{
                state.loading = true;
                state.error = null;
            })
            .addCase(updateCartItem.fulfilled, (state, action)=>{
                if(state.cart){
                    const index = state.cart.cartItems.findIndex(
                        (item:CartItem)=> item.id === action.meta.arg.cartItemId
                    );
                    if(index !== -1){
                        state.cart.cartItems[index] = {
                            ...state.cart.cartItems[index],
                            ...action.payload,
                        };
                    }
                    const mrpPrice = sumCartItemMrpPrice(state.cart?.cartItems || [])
                    const sellingPrice = sumCartItemSellingPrice(state.cart?.cartItems || [])
                    state.cart.totalSellingPrice = sellingPrice;
                    state.cart.totalMrpPrice = mrpPrice;
                }
                state.loading = false;
            })

            .addCase(updateCartItem.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(applyCoupon.fulfilled, (state, action)=>{
                state.loading = false;
                state.cart = action.payload;
            })
            
    }
})

export default cartSlice.reducer;
export const {resetCartState} = cartSlice.actions;