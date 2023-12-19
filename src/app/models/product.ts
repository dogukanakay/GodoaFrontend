export interface ProductDetails{
    productId:number
    productCategoryName:string
    gameName:string
    productName:string
    description:string
    price:number
    stockQuantity:number
    status:boolean

}
export interface ProductPost{
    productId:number
    productCategoryId:number
    gameId:number
    productName:string
    description:string
    price:number
    status:boolean
}

export interface ProductCategory{
    productCategoryId:number
    productCategoryName:string
}