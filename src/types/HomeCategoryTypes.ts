
export interface Deal{
    category: HomeCategory;
    discount: number;
    

}

export interface HomeData{
    id: number;
    grid: HomeCategory[];
    shopByCategories: HomeCategory[];
    electricalCategories: HomeCategory[];
    deals: Deal[];
    dealCategories: HomeCategory[];
}

export interface HomeCategory{
    id?:number;
    categoryId:string;
    section?:string;
    name?: string;
    image: string;
    parentCategoryId?: string;
}
