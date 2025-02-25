export interface PickupAddress{
    name:string;
    mobile:string;
    pincode:string;
    address:string;
    locality:string;
    city:string;
    stat:string
}

export interface BankDetails{
    accountNumber: string;
    ifsCode: string;
    accountHolderName:string;
}

export interface BusinessDetails{
    businessName: string;
}

export interface Seller{
    id?:number;
    mobile:string;
    otp:string;
    gstin:string;
    pickupAddress: PickupAddress;
    bankDetails: BankDetails;
    sellerName:string;
    email:string;
    businessDetails:BusinessDetails;
    password: string;
    accountStatus?:string
}

export interface SellerReport{
    id:number;
    seller:Seller;
    totalEarings:number;
    totalRefunds:number;
    totalTax: number;
    netEarings:number;
    totalOrders:number;
    canceledOrders: number;
    totalTransactions: number
}