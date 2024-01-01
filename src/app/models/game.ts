export interface GameDetails{
    gameId:number
    gameName:string
    gameCategoryName:string
    platformName:string
    gameTypeName:string
    imagePath:string
    description:string
}

export interface GamePost{
    gameId:number
    gameName:string
    gameCategoryId:number
    platformId:number
    gameTypeId:number
    imagePath:string
    description:string
}

export interface GameType{
    gameTypeId:number
    gameTypeName:string
}
export interface GameCategory{
    gameCategoryId:number
    gameCategoryName:string
}