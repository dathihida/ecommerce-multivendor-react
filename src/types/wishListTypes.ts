import { Product } from "./ProductTypes";
import { User } from "./UserTypes";

export interface WishList{
    id: number;
    user: User;
    products: Product[];
}

export interface WishListState{
    wishlist: WishList | null;
    loading: boolean;
    error: string | null;
}

export interface AddProductToWishlistPayload{
    wishlistId: number;
    productId: number;
}