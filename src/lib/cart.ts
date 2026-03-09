"use server"
import axios from "axios";
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function addToCartAction(productId: string) {
    try {
        const token = await getUserToken();
        if (!token) {
            throw new Error("User not authenticated");
        }

        const { data } = await axios.post(
            "https://ecommerce.routemisr.com/api/v1/cart",
            { productId },
            {
                headers: {
                    token: token
                }
            }
        );

        console.log("Product added to cart:", data);
        return data;
    } catch (error) {
        console.error("Error adding product to cart:", error);
        throw error;
    }
}

export async function getUserToken() {
    try {
        const myCookies = await cookies();
        const tokenFromCookies = myCookies.get("next-auth.session-token") || myCookies.get("__Secure-next-auth.session-token");

        if (!tokenFromCookies?.value) {
            return null;
        }

        const decodedToken = await decode({
            token: tokenFromCookies.value,
            secret: process.env.NEXTAUTH_SECRET || "fresh-cart-ecommerce-secret"
        });

        return decodedToken?.userTokenFormBackEnd as string || null;
    } catch (error) {
        console.error("Error retrieving user token:", error);
        return null;
    }
}

export async function updateCartQuantityAction(productId: string, count: number) {
    try {
        const token = await getUserToken();
        if (!token) throw new Error("User not authenticated");

        const { data } = await axios.put(
            `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            { count },
            { headers: { token } }
        );
        return data;
    } catch (error) {
        console.error("Error updating cart quantity:", error);
        throw error;
    }
}

export async function removeCartItemAction(productId: string) {
    try {
        const token = await getUserToken();
        if (!token) throw new Error("User not authenticated");

        const { data } = await axios.delete(
            `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
            { headers: { token } }
        );
        return data;
    } catch (error) {
        console.error("Error removing item from cart:", error);
        throw error;
    }
}

export async function clearCartAction() {
    try {
        const token = await getUserToken();
        if (!token) throw new Error("User not authenticated");

        const { data } = await axios.delete(
            "https://ecommerce.routemisr.com/api/v1/cart",
            { headers: { token } }
        );
        return data;
    } catch (error) {
        console.error("Error clearing cart:", error);
        throw error;
    }
}
