"use client";
import Link from "next/link";
import { MoveLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50/50 px-4 text-center">
      <div className="relative">
        <h1 className="text-[150px] font-black text-gray-200 sm:text-[200px]">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white p-4 shadow-xl shadow-gray-200/50 ring-1 ring-gray-100">
            <Search className="h-10 w-10 text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Page not found
        </h2>
        <p className="mx-auto mt-4 max-w-md text-gray-500">
          Sorry, we couldn&#39;t find the page you&#39;re looking for. Perhaps you&#39;ve mistyped the URL? Be sure to check your spelling.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg active:scale-95"
          >
            <Home size={18} />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-md active:scale-95"
            type="button"
          >
            <MoveLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
