import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from "./customer/ProductSlice"
import authSlice from "./AuthSlice"
import cartSlice from "./customer/cartSlice"
import orderSlice from "./customer/orderSlice"
import wishlistSlice from "./customer/wishlistSlice"
import sellerOrderSlice from "./seller/sellerOrderSlice"

const rootReducer = combineReducers({
    seller: sellerSlice,
    sellerProduct: sellerProductSlice,
    product: productSlice,
    auth: authSlice,
    cart: cartSlice,
    order: orderSlice,
    wishlist: wishlistSlice,

    // seller slice
    sellerOrders: sellerOrderSlice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch=()=>useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;