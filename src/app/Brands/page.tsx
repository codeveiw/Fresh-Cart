import React from 'react'
import { BrandCard } from '@/components/brands/BrandCard';
import { Brand } from '@/types/product';

export default async function Brands() {
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/brands")
  let { data }: { data: Brand[] } = await res.json()

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Our Trusted Brands
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            We partner with the best in the industry to bring you high-quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  )
}
