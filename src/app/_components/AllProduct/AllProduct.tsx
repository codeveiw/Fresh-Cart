import { getAllProducts } from '@/api/allProducts.api'
import { ProductCard } from '@/components/products/ProductCard'


export default async function AllProduct() {
  let data = await getAllProducts()
  return (
    <div>
      <div className="container mx-auto w-[80%] mt-12">

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product: any) => {
            return <ProductCard product={product} key={product.id} />
          })}
        </div>
      </div>
    </div>
  )
}
