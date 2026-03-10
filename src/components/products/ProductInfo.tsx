"use client"

import { Star, Heart } from "lucide-react";
import { Product } from "@/types/product";
import AddToCart from "@/app/_components/addToCart/AddToCart";
import { useWishlist } from "@/provider/wishlistContextProvider";
import { toast } from "sonner";

interface ProductInfoProps {
    product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const isFavorite = isInWishlist(product.id);

    const handleWishlistToggle = () => {
        if (isFavorite) {
            removeFromWishlist(product.id);
            toast.success("Removed from wishlist");
        } else {
            addToWishlist(product);
            toast.success("Added to wishlist");
        }
    };


    return (
        <div className="flex flex-col">
            {/* Brand & Category */}
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-600">
                <span>{product.category.name}</span>
                <span className="text-gray-300">•</span>
                <span>{product.brand.name}</span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {product.title}
            </h1>

            {/* Rating */}
            <div className="mb-6 flex items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={20} fill="currentColor" />
                    <span className="text-lg font-bold text-gray-900">
                        {product.ratingsAverage}
                    </span>
                </div>
                <span className="text-sm text-gray-500">
                    ({product.ratingsQuantity} reviews)
                </span>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm font-medium text-green-600">In Stock</span>
            </div>

            {/* Price */}
            <div className="mb-8 flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">
                    ${product.price}
                </span>
                {product.priceAfterDiscount && (
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-400 line-through">
                            ${product.priceAfterDiscount}
                        </span>
                        <span className="text-xs font-bold text-rose-500">
                            SAVE ${product.priceAfterDiscount - product.price}
                        </span>
                    </div>
                )}
            </div>

            {/* Description */}
            <div className="mb-8 border-t border-gray-100 py-6">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    Description
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                    {product.description}
                </p>
            </div>
            {/* Actions */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <AddToCart productId={product.id} />
                <button
                    onClick={handleWishlistToggle}
                    className={`flex items-center justify-center rounded-xl border p-4 transition-all active:scale-95 ${isFavorite
                        ? "border-rose-200 bg-rose-50 text-rose-500 hover:bg-rose-100"
                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                >
                    <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                </button>
            </div>
        </div>
    );
}
