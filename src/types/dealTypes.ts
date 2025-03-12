import { HomeCategory } from "./HomeCategoryTypes";

export interface Deal {
    id?: number;
    discount: number;
    category: HomeCategory
}

export interface ApiResponse {
    message: string;
    success: boolean;
}

export interface DealsState {
    deals: Deal[];
    loading: boolean;
    error: string | null;
    dealCreated: boolean;
    dealUpdated: boolean;
}