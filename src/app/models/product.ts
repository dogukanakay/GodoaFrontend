export interface ProductDetails{
    productId:number
    productCategoryName:string
    productName:string
    description:string
    price:number
    stockQuantity:number
    status:boolean

}
export interface ProductPost{
    productId:number
    productCategoryId:string
    productName:string
    description:string
    price:number
    stockQuantity:number
    status:boolean
}