import { log } from "console";
import { decode, getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET || "fresh-cart-ecommerce-secret",
    });


    if (!token) {
        return NextResponse.redirect(new URL("/Login", request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: ["/Cart"],
};

