"use client"

import { SessionProvider } from "next-auth/react"
import React from "react"
import CartContextProvider from "@/provider/cartContextProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
    return <>
        <SessionProvider>
            <CartContextProvider>
                {children}
            </CartContextProvider>
        </SessionProvider>

    </>
}

