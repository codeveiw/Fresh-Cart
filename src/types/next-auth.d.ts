import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            userTokenFormBackEnd?: string;
        } & DefaultSession["user"]
    }

    interface User extends DefaultUser {
        userTokenFormBackEnd?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        userTokenFormBackEnd?: string;
    }
}
