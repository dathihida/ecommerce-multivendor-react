import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Deal, HomeCategory } from "../../types/HomeCategoryTypes";

export const createHomeCategory = createAsyncThunk<HomeData, HomeCategory[]>(
    'home/createHomeCategory',
    async (categories, { rejectWithValue }) => {
        try {
            const response = await api.post("/home/categories", categories);
            console.log("category created",response);
            return response.data;
        } catch (error:any) {
            console.log("error",error);
            return rejectWithValue(error.message);
        }
    }
)
interface HomeState{
    homePageData: HomeData | null;
    homeCategories: HomeCategory[];
    loading: boolean;
    error: string | null;
}

const initialState: HomeState = {
    homePageData: null,
    homeCategories: [],
    loading: false,
    error: null
}

export interface HomeData{
    id: number;
    grid: HomeCategory[];
    shopByCategories: HomeCategory[];
    electricalCategories: HomeCategory[];
    deals: Deal[];
    dealCategories: HomeCategory[];
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createHomeCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(createHomeCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.homePageData = action.payload;
        })

        builder.addCase(createHomeCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export default homeSlice.reducer;