"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-gray-50/30 px-4 py-16 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-100">
                <AlertCircle className="h-10 w-10 text-rose-500" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
                Something went wrong!
            </h2>
            <p className="mt-2 max-w-md text-gray-500">
                We encountered an error while loading the products. Please check your connection or try again later.
            </p>

            <div className="mt-8 flex gap-4">
                <button
                    onClick={() => reset()}
                    className="group flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg active:scale-95"
                >
                    <RefreshCcw size={18} className="transition-transform duration-500 group-hover:rotate-180" />
                    Try Again
                </button>
            </div>

            {process.env.NODE_ENV === "development" && (
                <div className="mt-12 w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 bg-white text-left shadow-sm">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                        <p className="text-xs font-mono text-gray-500 uppercase">Error Details (Dev Only)</p>
                    </div>
                    <div className="p-4">
                        <code className="text-xs text-rose-600 font-mono break-all">
                            {error.message || "Unknown error occurred"}
                        </code>
                    </div>
                </div>
            )}
        </div>
    );
}
