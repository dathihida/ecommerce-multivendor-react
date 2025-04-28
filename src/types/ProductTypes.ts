import { Seller } from "./SellerTypes";

export interface Category{
    id?:number;
    name:string;
    categoryId:string;
    parentCategory?:Category;
    level: number;
}

export interface Product{
    id?: number;
    name: string;
    title: string;
    description: string;
    mrpPrice: number;
    sellingPrice: number;
    discountPercent: number;
    quantity: number;
    color:string;
    images:string[];
    numberRatings?:number;
    category?:Category;
    seller?:Seller;
    createAt?:Date;
    sizes:string
}