import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderStatus } from "../../types/orderTypes";
import { api } from "../../config/Api";



export const fetchSellerOrders = createAsyncThunk<Order[], string>(
    'seller/fetchSellerOrders',
    async(jwt, {rejectWithValue}) => {
        try {
            const response = await api.get('/api/seller/orders', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("fetch seller orders", response.data);
            return response.data;
        } catch (error : any) {
            console.log("Error fetch seller orders", error.response);
            return rejectWithValue(error.response?.data.message || "Failed to fetch seller orders");
        }
    }
);

export const updateOrderStatus = createAsyncThunk<Order, 
{
    jwt:string,
    orderId: number,
    orderStatus: OrderStatus
}>(
    'seller/updateOrderStatus',
    async({jwt, orderId, orderStatus}, {rejectWithValue}) => {
        try {
            const response = await api.patch(`/api/seller/orders/${orderId}/status/${orderStatus}` ,
                null, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("update order status", response.data);
            return response.data;
        } catch (error: any) {
            console.log("Error update order status", error.response);
            return rejectWithValue(error.response?.data.message || "Failed to update order status");
        }
    }
)

export const deleteOrder = createAsyncThunk<any, {jwt:string, orderId: number}>(
    'sellerOrder/deleteOrder',
    async({jwt, orderId}, {rejectWithValue}) => {
        try {
            const response = await api.delete(`/api/seller/order/${orderId}/delete`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("delete order", response.data);
            return response.data;
        } catch (error: any) {
            console.log("Error delete order", error.response);
            return rejectWithValue(error.response?.data.message || "Failed to delete order");
        }
    }
)

interface SellerOrderState {
    orders: Order[];
    loading: boolean;
    error: string | null;
}

const initialState: SellerOrderState = {
    orders: [],
    loading: false,
    error: null
}

const sellerOrderSlice = createSlice({
    name: 'sellerOrders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSellerOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSellerOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
                state.orders = action.payload;
                state.loading = false;
            })
            .addCase(fetchSellerOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(updateOrderStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateOrderStatus.fulfilled, (state, action: PayloadAction<Order>) => {
                state.loading = false;
                const index = state.orders.findIndex(order => order.id === action.payload.id);
                if(index !== -1) {
                    state.orders[index] = action.payload;
                }
            })
            .addCase(updateOrderStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(deleteOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orders = state.orders.filter(order => order.id !== action.meta.arg.orderId);
            })
            .addCase(deleteOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    }
})

export default sellerOrderSlice.reducer;