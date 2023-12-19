export interface Login{
    email:string
    password:string
}
export interface Register{
    email:string
    userName:string
    firstName:string
    lastName:string
    password:string
    phone:string
    BirthDate:Date
    
}


export interface NewPassword{
    currentPassoword:string;
    newPassword:string;
}