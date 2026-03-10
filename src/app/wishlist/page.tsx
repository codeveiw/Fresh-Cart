"use client"

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/provider/wishlistContextProvider";
import { Star, Trash2, ShoppingCart, HeartOff } from "lucide-react";
import Image from "next/image";
import AddToCart from "@/app/_components/addToCart/AddToCart";

export default function WishlistPage() {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="mb-6 rounded-full bg-gray-100 p-6 text-gray-400">
                    <HeartOff size={64} />
                </div>
                <h1 className="mb-2 text-2xl font-bold text-gray-900">Your wishlist is empty</h1>
                <p className="mb-8 text-gray-500 max-w-md">
                    Start adding items to your wishlist and they will appear here.
                </p>
                <Link
                    href="/"
                    className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-95"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/30 pb-20 pt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-extrabold text-gray-900">My Wishlist ({wishlistItems.length})</h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {wishlistItems.map((product) => (
                        <div key={product.id} className="group relative flex flex-col rounded-3xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
                            <button
                                onClick={() => removeFromWishlist(product.id)}
                                className="absolute right-6 top-6 z-10 rounded-full bg-white/80 p-2 text-gray-400 backdrop-blur-sm transition-all hover:bg-rose-50 hover:text-rose-500 shadow-sm"
                            >
                                <Trash2 size={18} />
                            </button>

                            <Link href={`/Product/${product.id}`} className="relative mb-4 aspect-square overflow-hidden rounded-2xl">
                                <Image
                                    src={product.imageCover}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </Link>

                            <div className="flex flex-1 flex-col">
                                <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-indigo-600">
                                    <span>{product.category.name}</span>
                                </div>
                                <h3 className="mb-2 line-clamp-1 font-bold text-gray-900 group-hover:text-emerald-600">
                                    <Link href={`/Product/${product.id}`}>{product.title}</Link>
                                </h3>
                                <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
                                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium text-gray-900">{product.ratingsAverage}</span>
                                    <span>({product.ratingsQuantity})</span>
                                </div>

                                <div className="mt-auto flex items-center justify-between gap-4">
                                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                    <AddToCart productId={product.id} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
