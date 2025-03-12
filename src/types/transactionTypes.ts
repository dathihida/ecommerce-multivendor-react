import { Order } from "./orderTypes";
import { Seller } from "./SellerTypes";
import { User } from "./UserTypes";

export interface Transaction {
    id: number;
    customer: User;
    order: Order
    seller: Seller; 
    date: string;
}