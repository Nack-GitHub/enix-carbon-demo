"use client"
import { ROUTE_PATH } from "@/constants/RoutePath"
import { SessionProvider } from "next-auth/react"
const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider
        baseUrl={process.env.NEXTAUTH_URL}
        basePath={ROUTE_PATH.NEXT_API_AUTH}
        refetchInterval={5 * 60} // Re-fetch session every 5 minutes
    >{children}</SessionProvider>
}
export default ProviderWrapper