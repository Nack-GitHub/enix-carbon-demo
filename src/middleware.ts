export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/market',
        '/chart',
        '/market/trade',
        '/order',
        '/inventory',
        '/wallet',
        '/setting',
    ], //This is Routes you want to protect
}
