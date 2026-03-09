"use server"

import { signupDateType } from "@/schema/singup.schema";
import axios from "axios";
import { cookies } from "next/headers";

export async function signupAction(userDate : signupDateType){

      try {
        const { data } = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/signup",
          userDate
        )
        const cookiy=await cookies()
        cookiy.set("user-token",data.token,{
          httpOnly:true,
          maxAge:60 * 60 *24 ,
          sameSite:"strict"

        })
        return { success: true, data: data }
       
      } catch (err: any) {
         return { success: false, error: err.response?.data }
      }

}