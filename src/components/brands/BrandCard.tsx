"use client";

import Image from "next/image";
import { Brand } from "@/types/product";

interface BrandCardProps {
    brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
    return (
        <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">
            <div className="relative h-32 w-full transition-transform duration-500 group-hover:scale-110">
                <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain"
                />
            </div>
            <div className="mt-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {brand.name}
                </h3>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 h-16 w-16 rounded-full bg-indigo-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
    );
}
