import { ROUTE_PATH } from "@/constants/RoutePath";
import { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
    pages: {
        signIn: ROUTE_PATH.LOGIN,
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'user@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {

                // console.log("000", req)
                // console.log("1111", credentials)

                try {

                    //todo get token 

                    return {
                        id: "2",
                        name: credentials?.email,
                        email: credentials?.email,
                        access_token_test: "xxxx"
                    };

                } catch (error) {
                    return null
                }
            },
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user, account }: any) {
            // console.log("jwt >>>", { token, user, account });

            return { ...token, ...user };
        },
        async session({ session, token, user }: any) {
            // console.log("session >>", { token, user, session });

            session.user = token as any;

            return session;
        },
        async redirect({ url, baseUrl }: any) {
            // console.log("redirect - url ", url, "baseUrl >>>", baseUrl);
            return `${baseUrl + ROUTE_PATH.MARKET}`
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}