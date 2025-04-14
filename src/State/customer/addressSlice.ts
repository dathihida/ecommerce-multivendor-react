import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Address } from "../../types/UserTypes";
import { api } from "../../config/Api";

interface AddressState {
    addresses: Address[] | null;
    loading: boolean;
    error: string | null;
    currentAddress: Address | null;
}

const initialState: AddressState = {
    addresses: null,
    loading: false,
    error: null,
    currentAddress: null,
};

const API_URL = "/api/address";

// ====== Async Actions ======

export const fetchAddresses = createAsyncThunk<
    Address[],
    string,
    { rejectValue: string }
>("address/fetchAddresses", async (jwt, { rejectWithValue }) => {
    try {
        const response = await api.get(API_URL, {
            headers: { Authorization: `Bearer ${jwt}` },
        });
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.error || "Failed to fetch addresses");
    }
});

export const addAddress = createAsyncThunk<
    Address,
    { address: Address; jwt: string },
    { rejectValue: string }
>("address/addAddress", async ({ address, jwt }, { rejectWithValue }) => {
    try {
        const response = await api.post(API_URL, address, {
            headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log("add address response: ", response.data);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.error || "Failed to add address");
    }
});

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setCurrentAddress: (state, action) => {
            state.currentAddress = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Fetch Addresses
        builder.addCase(fetchAddresses.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchAddresses.fulfilled, (state, action) => {
            state.loading = false;
            state.addresses = action.payload;
        });
        builder.addCase(fetchAddresses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Error";
        });

        // Add Address
        builder.addCase(addAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.loading = false;
            if (state.addresses) {
                state.addresses.push(action.payload);
            } else {
                state.addresses = [action.payload];
            }
        });
        builder.addCase(addAddress.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Error";
        });
    },
});

export const { setCurrentAddress } = addressSlice.actions;
export default addressSlice.reducer;
