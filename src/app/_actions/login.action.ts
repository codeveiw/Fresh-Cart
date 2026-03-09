"use server"

import { loginDateType } from "@/schema/login.schema";
import axios from "axios";
import { cookies } from "next/headers";

export async function loginAction(userDate: loginDateType) {
    try {
        const { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/auth/signin",
            userDate
        );
        const cookiy = await cookies();
        cookiy.set("user-token", data.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: "strict",
        });
        return { success: true, data: data };
    } catch (err: any) {
        return { success: false, error: err.response?.data };
    }
}
