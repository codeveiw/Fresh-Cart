"use client";

import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/product";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
    category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {category.name}
                </h3>
                <div className="flex items-center text-indigo-100 text-sm font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore Gallery
                    <ChevronRight size={16} className="ml-1" />
                </div>
            </div>

            {/* Subtle border highlight on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/20 rounded-2xl transition-all duration-300 pointer-events-none" />
        </div>
    );
}
