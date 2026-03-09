import React from 'react'
import { CategoryCard } from '@/components/categories/CategoryCard';
import { Category } from '@/types/product';

export default async function Categories() {
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
  let { data }: { data: Category[] } = await res.json()

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Browse by Category
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Explore our wide range of categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}
