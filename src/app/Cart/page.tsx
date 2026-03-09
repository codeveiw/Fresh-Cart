"use client";

import { useContext } from "react";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { cartContext } from "@/provider/cartContextProvider";

export default function CartPage() {
  const { products, numOfCartItem, totalPrice, updateQuantityAction, removeItemAction, clearCartAction } = useContext(cartContext);

  const updateQuantity = async (id: string, newQuantity: number) => {
    await updateQuantityAction(id, newQuantity);
  };

  const removeitem = async (id: string) => {
    await removeItemAction(id);
  };

  const clearAll = async () => {
    await clearCartAction();
  };

  // Calculations from Context
  const subtotal = totalPrice;
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15.0; // Free shipping > $100 or if empty
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (products === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shopping Cart
            <span className="ml-3 text-lg font-medium text-gray-500">
              {numOfCartItem} items
            </span>
          </h1>

          {products.length > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center justify-center gap-2 rounded-xl border border-rose-100 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-600 transition-all hover:bg-rose-100 hover:text-rose-700 active:scale-95"
            >
              <i className="fa-solid fa-trash-can"></i>
              Clear Cart
            </button>
          )}
        </div>

        {products.length > 0 ? (
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-7 xl:col-span-8">
              {products.map((item: any) => (
                <CartItem
                  key={item._id}
                  item={{
                    id: item.product.id,
                    name: item.product.title,
                    category: item.product.category.name,
                    price: item.price,
                    image: item.product.imageCover,
                    quantity: item.count
                  }}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeitem}
                />
              ))}
            </div>

            <div className="sticky top-10 lg:col-span-5 xl:col-span-4">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                totalItems={numOfCartItem}
              />
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
