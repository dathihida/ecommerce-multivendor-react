import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { ApiResponse, DealsState } from "../../types/dealTypes";
import { Coupon } from "../../types/couponTypes";

const API_URL = "/api/coupons";

const initialState: DealsState = {
    deals: [],
    loading: false,
    error: null,
    dealCreated: false,
    dealUpdated: false,
}

export const createDeal = createAsyncThunk(
    "deals/createDeal",
    async (deal: any, { rejectWithValue }) => {
        try {
            const response = await api.post("admin/deals", deal, {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            console.log("deal created", response.data);
            return response.data;
        }
        catch (error: any) {
            console.log("error", error);
            return rejectWithValue(error.response?.data || "Error to create deal");
        }
    }
)

export const getAllDeals = createAsyncThunk(
    "deals/getAllDeals",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/admin/deals", {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            console.log("get all deals", response.data);
            return response.data;
        }
        catch (error: any) {
            console.log("error", error);
            return rejectWithValue(error.response?.data || "Error to get deals");
        }
    }
)

export const deleteDeal = createAsyncThunk<ApiResponse, number>(
    "deals/deleteDeal",
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await api.delete(`/admin/deals/${id}`, {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            console.log("deal deleted", response.data);
            return response.data;
        }
        catch (error: any) {
            console.log("error", error);
            return rejectWithValue(error.response?.data || "Error to delete deal");
        }    
    }
)

export const createCoupon = createAsyncThunk<
    Coupon,
    { coupon: any; jwt: string }
>("coupon/createCoupon", async ({ coupon, jwt }, { rejectWithValue }) => {
    try {
        const response = await api.post(`${API_URL}/admin/create`, coupon, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        console.log("coupon created", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error", error);
        return rejectWithValue(error.response?.data || "Error to create coupon");
    }
})

const dealSlice = createSlice({
    name: "deals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createDeal.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.dealCreated = false;
        })
        builder.addCase(createDeal.fulfilled, (state, action) => {
            state.loading = false;
            state.dealCreated = true;
            state.deals.push(action.payload);
        })
        builder.addCase(createDeal.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        builder.addCase(getAllDeals.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getAllDeals.fulfilled, (state, action) => {
            state.loading = false;
            state.deals = action.payload;
        })
        builder.addCase(getAllDeals.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        builder.addCase(deleteDeal.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(deleteDeal.fulfilled, (state, action) => {
            state.loading = false;
            // state.deals = state.deals.filter((deal) => deal.id !== action.payload.id);
        })
        builder.addCase(deleteDeal.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export default dealSlice.reducer; 