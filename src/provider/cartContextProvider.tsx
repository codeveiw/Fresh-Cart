"use client"

import { getUserCart } from "@/app/_actions/getUserCart.action";
import { removeCartItemAction, updateCartQuantityAction, clearCartAction } from "@/lib/cart";
import { createContext, useEffect, useState } from "react"


export const cartContext = createContext({
    products: null as any[] | null,
    numOfCartItem: 0,
    cartId: null as string | null,
    totalPrice: 0,
    getUserCartAction: async () => { return null as any },
    updateQuantityAction: async (productId: string, count: number) => { return null as any },
    removeItemAction: async (productId: string) => { return null as any },
    clearCartAction: async () => { return null as any },
    setCartData: (res: any) => { },
    setNumOfCartItem: (() => { }) as React.Dispatch<React.SetStateAction<number>>  // ✅ Fixed type
})

let providerInstanceCount = 0;

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [instanceId] = useState(() => ++providerInstanceCount);
    const [products, setProducts] = useState<any[] | null>(null)
    const [numOfCartItem, setNumOfCartItem] = useState(0)
    const [cartId, setCardId] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)

    const updateCartState = (res: any) => {
        console.log(`[CartProvider #${instanceId}] Update Triggered:`, res);
        if (res) {
            const cartData = res.data || res;
            const itemsCount = res.numOfCartItems ?? res.numOfCartItem ?? cartData.numOfCartItems ?? cartData.numOfCartItem ?? 0;

            console.log(`[CartProvider #${instanceId}] Calculated items count:`, itemsCount);

            setProducts(cartData.products || [])
            setNumOfCartItem(itemsCount)
            setCardId(cartData._id || null)
            setTotalPrice(cartData.totalCartPrice || 0)
        }
    }

    const getUserCartAction = async () => {
        try {
            const res = await getUserCart();
            updateCartState(res);
            return res;
        } catch (error) {
            console.error("Error fetching user cart:", error);
            return null;
        }
    };

    const updateQuantity = async (productId: string, count: number) => {
        try {
            const res = await updateCartQuantityAction(productId, count);
            updateCartState(res);
            return res;
        } catch (error) {
            console.error("Error updating quantity:", error);
            return null;
        }
    }

    const removeItem = async (productId: string) => {
        try {
            const res = await removeCartItemAction(productId);
            updateCartState(res);
            return res;
        } catch (error) {
            console.error("Error removing item:", error);
            return null;
        }
    }

    const clearCart = async () => {
        try {
            const res = await clearCartAction();
            setProducts([])
            setNumOfCartItem(0)
            setCardId(null)
            setTotalPrice(0)
            return res.data;
        } catch (error) {
            console.error("Error clearing cart:", error);
            return null;
        }
    }

    useEffect(() => {
        async function initCart() {
            try {
                const res = await getUserCart();
                if (res) {
                    updateCartState(res);
                }
            } catch (error) {
                console.error("Cart Init Error:", error);
            }
        }
        initCart();
    }, [])

    return (
        <cartContext.Provider value={{
            getUserCartAction,
            updateQuantityAction: updateQuantity,
            removeItemAction: removeItem,
            clearCartAction: clearCart,
            setCartData: updateCartState,
            setNumOfCartItem,  // ✅ الـ type اتصلح
            products,
            numOfCartItem,
            cartId,
            totalPrice,
        }}>
            {children}
        </cartContext.Provider>
    )
}