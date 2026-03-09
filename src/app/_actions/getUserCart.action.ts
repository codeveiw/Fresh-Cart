"use server"
import axios from "axios";
import { getUserToken } from "../../lib/cart";
export async function getUserCart(){
    let token =await getUserToken()
    if(!token){
        throw new Error("User not authenticated")
    }
    try {
       const {data} =await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
            headers:{
                token:token as string
            }
        })  
        return data
    } catch (error) {
        console.log(error)  
    }       
}