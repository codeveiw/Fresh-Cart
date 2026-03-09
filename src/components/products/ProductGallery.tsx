"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AddToCart from "@/app/_components/addToCart/AddToCart";

interface ProductGalleryProps {
    images: string[];
    title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-100 bg-white">
                <Image
                    src={selectedImage}
                    alt={title}
                    fill
                    className="h-full w-full object-contain object-center transition-transform duration-500 hover:scale-110"
                    priority
                />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                  
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className={cn(
                                "relative aspect-square h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border bg-white transition-all hover:opacity-100",
                                selectedImage === image
                                    ? "border-indigo-600 ring-1 ring-indigo-600"
                                    : "border-gray-200 opacity-70 hover:border-gray-300"
                            )}
                        >
                            <Image
                                src={image}
                                alt={`${title} - View ${index + 1}`}
                                fill
                                className="h-full w-full object-cover object-center"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
