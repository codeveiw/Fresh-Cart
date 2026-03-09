"use client"

import { ShoppingCart, Loader2, Check } from "lucide-react"
import { addToCartAction } from "@/lib/cart"
import { useContext, useState } from "react"
import { cartContext } from "@/provider/cartContextProvider"

type AddToCartBtnProps = {
  productId: string
}

export default function AddToCart({ productId }: AddToCartBtnProps) {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const { setCartData } = useContext(cartContext)  // ✅ مش محتاج setNumOfCartItem

async function handleAddToCart() {
    setLoading(true)
    try {
        const res = await addToCartAction(productId)
        console.log("Client received:", res)  // ← هنا بالظبط

        if (res?.status === "success") {
            setCartData(res)
            setSuccess(true)
            setTimeout(() => setSuccess(false), 2000)
        }
    } catch (error) {
        console.error("Add to cart error:", error)
    } finally {
        setLoading(false)
    }
}
  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={loading}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white transition-all active:scale-95 
        ${success ? "bg-green-600" : "bg-gray-900 hover:bg-gray-800 hover:shadow-lg"} 
        ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
      >

        {loading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : success ? (
          <Check size={20} />
        ) : (
          <ShoppingCart size={20} />
        )}

        {loading ? "Adding..." : success ? "Added!" : "Add to Cart"}

      </button>
    </div>
  )
}