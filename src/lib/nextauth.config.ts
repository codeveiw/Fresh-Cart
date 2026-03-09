import { log } from "console";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextauthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}

            },
            authorize: async function (credentials) {
                console.log("Authorize credentials:", credentials);

                try {
                    let res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                        method: "post",
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    let finalRes = await res.json()
                    console.log("API signin response:", finalRes)

                    if (finalRes.message === "success") {
                        return {
                            id: finalRes.user?.email || "user-id", // Use email as fallback ID if _id is missing
                            name: finalRes.user?.name,
                            email: finalRes.user?.email,
                            userTokenFormBackEnd: finalRes.token,
                        }
                    } else {
                        console.log("Signin failed:", finalRes.message);
                        return null
                    }
                } catch (error) {
                    console.error("Authorize error:", error);
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/Login"
    },
    secret: process.env.NEXTAUTH_SECRET || "fresh-cart-ecommerce-secret",
    callbacks: {
        jwt({ token, user }) {
            console.log("JWT Callback - user:", user);
            console.log("JWT Callback - token before:", token);
            if (user) {
                token.userTokenFormBackEnd = user.userTokenFormBackEnd;
            }
            console.log("JWT Callback - token after:", token);
            return token;
        },
        session({ session, token }) {
            console.log("Session Callback - token:", token);
            console.log("Session Callback - session before:", session);
            if (token && session.user) {
                session.user.userTokenFormBackEnd = token.userTokenFormBackEnd as string;
            }
            console.log("Session Callback - session after:", session);
            return session;
        }

    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    debug: true,
}