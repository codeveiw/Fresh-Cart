"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartSummaryProps {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    totalItems: number;
}

export function CartSummary({ subtotal, shipping, tax, total, totalItems }: CartSummaryProps) {
    const router = useRouter();
    return (
        <div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 lg:p-8">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
                <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600">
                    {totalItems} Items
                </span>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Shipping Estimate</span>
                    <span className="font-semibold text-gray-900">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Tax</span>
                    <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                </div>

                <div className="my-4 border-t border-gray-100"></div>

                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-gray-900">Order Total</span>
                    <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={() => router.push("/payment")}
                className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
                Proceed to Checkout
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure Encrypted Checkout</span>
            </div>
        </div>
    );
}
