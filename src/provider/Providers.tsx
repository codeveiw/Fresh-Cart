"use client"

import { SessionProvider } from "next-auth/react"
import React from "react"
import CartContextProvider from "@/provider/cartContextProvider"
import { WishlistProvider } from "@/provider/wishlistContextProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
    return <>
        <SessionProvider>
            <CartContextProvider>
                <WishlistProvider>
                    {children}
                </WishlistProvider>
            </CartContextProvider>
        </SessionProvider>

    </>
}

