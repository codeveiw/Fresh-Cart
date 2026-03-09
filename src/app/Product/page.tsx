import { Product } from "@/types/product";
import { ProductCard } from "@/components/products/ProductCard";
import {getAllProducts} from "../../api/allProducts.api"


export default async function ProductPage() {
 
  let data =await getAllProducts()
 
  return (
    <div className="min-h-screen bg-gray-50/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Our Collection
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our premium selection of products curated just for you.
          </p>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((product : Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center text-gray-500">
            <p>No products found or failed to load.</p>
          </div>
        )}
      </div>
    </div>
  );
}
