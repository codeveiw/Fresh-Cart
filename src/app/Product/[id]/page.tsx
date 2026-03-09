import { getProductDetails } from "@/api/productDetails.api";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: ProductDetailsPageProps) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const product: Product | null = await getProductDetails(id);

  if (!product) {
    notFound();
  }

  
  const productImages = product.images && product.images.length > 0
    ? product.images
    : [product.imageCover];

  return (
    <div className="min-h-screen bg-gray-50/30 pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        
        <nav className="mb-8 flex text-sm font-medium text-gray-500">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span className="mx-2">/</span>
          <a href="/Product" className="hover:text-gray-900">Products</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{product.title}</span>
        </nav>

        <div className="bg-white rounded-3xl p-6 shadow-sm ring-1 ring-gray-100 lg:p-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

           
            <div className="h-fit lg:sticky lg:top-24">
              <ProductGallery images={productImages} title={product.title} />
            </div>

           
            <div>
              <ProductInfo product={product} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
