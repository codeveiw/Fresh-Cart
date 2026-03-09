"use client";

import Image from "next/image";
import { Star, ShoppingCart, Loader2, Check } from "lucide-react";
import { Product } from "@/types/product";
import Link from "next/link";
import { addToCartAction } from "@/lib/cart";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { cartContext } from "@/provider/cartContextProvider";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const { setCartData } = useContext(cartContext)  // ✅ زودنا الـ Context

    async function handleAddToCart() {
        setLoading(true);
        try {
            const res = await addToCartAction(product.id);  // ✅ بناخد الـ res
            setCartData(res)  // ✅ بنحدث الـ Context عشان الـ Navbar يتحدث
            toast.success("Product added to cart", {
                style: {
                    background: "#ecfdf5",
                    color: "#065f46",
                    border: "1px solid #a7f3d0"
                }
            });
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);
        } catch (error) {
            console.error(error);
            toast.error("Failed to add product to cart");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
                <Link href={`/Product/${product.id}`}>
                    <Image
                        src={product.imageCover}
                        alt={product.title}
                        fill
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 transform ${success ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"}`}>
                    <button
                        onClick={handleAddToCart}
                        disabled={loading}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg backdrop-blur-sm transition-all ${success
                            ? "bg-green-600 text-white"
                            : "bg-white/90 text-gray-900 hover:bg-gray-900 hover:text-white"
                            } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={18} />
                        ) : success ? (
                            <Check size={18} />
                        ) : (
                            <ShoppingCart size={18} />
                        )}
                        {loading ? "Adding..." : success ? "Added!" : "Add to Cart"}
                    </button>
                </div>

                {product.priceAfterDiscount && (
                    <div className="absolute left-3 top-3 rounded-lg bg-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                        SALE
                    </div>
                )}
            </div>

            <Link href={`/Product/${product.id}`}>
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        {product.category.name}
                    </div>

                    <h3 className="mb-2 line-clamp-1 text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {product.title}
                    </h3>

                    <div className="mt-auto flex items-end justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 text-yellow-400 mb-1">
                                <Star size={16} fill="currentColor" />
                                <span className="text-sm font-medium text-gray-600 mt-0.5">
                                    {product.ratingsAverage}
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                {product.priceAfterDiscount && (
                                    <span className="text-sm text-gray-400 line-through">
                                        ${product.priceAfterDiscount}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}