
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8 border-t border-zinc-800">
            <div className="container w-full lg:w-[80%] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-2xl font-bold text-emerald-500">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            <span>Fresh Cart</span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed">
                            Your one-stop destination for fresh groceries and premium products delivered right to your doorstep.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
                            <li><Link href="/Product" className="hover:text-emerald-500 transition-colors">Products</Link></li>
                            <li><Link href="/Categories" className="hover:text-emerald-500 transition-colors">Categories</Link></li>
                            <li><Link href="/Brands" className="hover:text-emerald-500 transition-colors">Brands</Link></li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Customer Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="/Cart" className="hover:text-emerald-500 transition-colors">My Cart</Link></li>
                            <li><Link href="/Login" className="hover:text-emerald-500 transition-colors">Login</Link></li>
                            <li><Link href="/Register" className="hover:text-emerald-500 transition-colors">Register</Link></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Shipping Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot mt-1 text-emerald-500"></i>
                                <span className="text-zinc-400">Tanta, Egypt</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-emerald-500"></i>
                                <span className="text-zinc-400">+20 1551260673</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-emerald-500"></i>
                                <span className="text-zinc-400">support@freshcart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                    <p>© 2026 Fresh Cart. All rights reserved.</p>
                    <div className="flex items-center gap-1 font-medium text-zinc-400">
                        <span>Designed & Developed by</span>
                        <span className="text-emerald-500 font-bold">Mohamed Gamal</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
