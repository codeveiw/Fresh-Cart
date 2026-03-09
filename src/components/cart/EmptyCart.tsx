import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export function EmptyCart() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-gray-50/50 p-12 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-900/5">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">Your cart is empty</h2>
            <p className="mt-3 max-w-sm text-gray-500">
                Looks like you haven&#39;t added anything to your cart yet. Explore our premium collection today.
            </p>

            <Link
                href="/"
                className="group mt-8 flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg active:scale-95"
            >
                Start Shopping
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
}
