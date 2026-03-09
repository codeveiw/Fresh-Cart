"use client";

import { CreditCard, Truck, MapPin, Phone, User, ShoppingBag, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: ""
    });

    const handleCheckout = async () => {
        // 1. Validation
        if (!formData.fullName || !formData.phone || !formData.address) {
            toast.error("Please fill in all shipping details");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    paymentMethod,
                    shippingAddress: formData
                })
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(`Order placed successfully! Order ID: ${data.orderId}`, {
                    description: "Thank you for shopping with us.",
                    duration: 5000,
                });

                // Redirect to home or orders page after a delay
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                toast.error(data.error || "Failed to place order");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 pb-20 pt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <Link href="/Cart" className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors">
                            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                            Back to Cart
                        </Link>
                        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">Checkout</h1>
                    </div>
                </div>

                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                    {/* Form Section */}
                    <div className="space-y-8 lg:col-span-8">
                        {/* Shipping Address */}
                        <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 lg:p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <MapPin size={22} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full rounded-xl border border-gray-100 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="tel"
                                            placeholder="+20 123 456 7890"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full rounded-xl border border-gray-100 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Detailed Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <textarea
                                            placeholder="Street name, Building number, Apartment..."
                                            rows={3}
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            className="w-full rounded-xl border border-gray-100 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Payment Method */}
                        <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 lg:p-8">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                    <CreditCard size={22} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <button
                                    onClick={() => setPaymentMethod("card")}
                                    className={`relative flex flex-col items-start gap-4 rounded-2xl border-2 p-6 transition-all ${paymentMethod === "card"
                                        ? "border-emerald-500 bg-emerald-50/50 shadow-lg shadow-emerald-500/10"
                                        : "border-gray-50 bg-gray-50/50 hover:bg-gray-100"
                                        }`}
                                >
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${paymentMethod === "card" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-400"}`}>
                                        <CreditCard size={18} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-gray-900">Pay with Card</h3>
                                        <p className="text-xs text-gray-500">Secure transaction via Stripe</p>
                                    </div>
                                    {paymentMethod === "card" && <CheckCircle2 className="absolute right-4 top-4 text-emerald-500" size={20} />}
                                </button>

                                <button
                                    onClick={() => setPaymentMethod("cash")}
                                    className={`relative flex flex-col items-start gap-4 rounded-2xl border-2 p-6 transition-all ${paymentMethod === "cash"
                                        ? "border-emerald-500 bg-emerald-50/50 shadow-lg shadow-emerald-500/10"
                                        : "border-gray-50 bg-gray-50/50 hover:bg-gray-100"
                                        }`}
                                >
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${paymentMethod === "cash" ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-400"}`}>
                                        <Truck size={18} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-gray-900">Cash on Delivery</h3>
                                        <p className="text-xs text-gray-500">Pay when you receive items</p>
                                    </div>
                                    {paymentMethod === "cash" && <CheckCircle2 className="absolute right-4 top-4 text-emerald-500" size={20} />}
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Summary Section */}
                    <div className="sticky top-10 lg:col-span-4">
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 lg:p-8">
                            <h2 className="text-xl font-bold text-gray-900">Review Items</h2>
                            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                                    <ShoppingBag size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Order Ready</p>
                                    <p className="text-xs text-gray-500">Complete payment to fly!</p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center justify-between text-base">
                                    <span className="font-bold text-gray-900">Payable Amount</span>
                                    <span className="text-2xl font-black text-emerald-600">$0.00</span>
                                </div>
                                <p className="text-[10px] text-center text-gray-400">By clicking the button below, you agree to our terms of service and shipping policies.</p>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={loading}
                                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold text-white transition-all hover:bg-black hover:shadow-xl active:scale-[0.98] ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900"}`}
                            >
                                {loading && <Loader2 size={18} className="animate-spin" />}
                                {loading ? "Processing..." : (paymentMethod === "card" ? "Pay Now" : "Confirm Order")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
