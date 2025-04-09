import { CartItem } from "../types/cartTypes";

export const sumCartItemMrpPrice = (cartItems:CartItem[])=>{
    return cartItems.reduce((acc,item) => acc + item.mrpPrice*item.quantity, 0)
}

export const sumCartItemSellingPrice = (cartItems:CartItem[])=>{
    return cartItems.reduce((acc, item) => acc + item.sellingPrice*item.quantity,0)
}

export const sumCartItem = (cartItems:CartItem[])=>{
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
}