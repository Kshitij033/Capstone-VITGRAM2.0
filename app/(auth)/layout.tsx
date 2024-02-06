//this layout is specificlly for the pages in (auth)
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'
export const metadata={
    title:'CAPSTONE VITGRAM',
    description:'A Next.js 14 VITgram App'
}

const inter=Inter({subsets:['latin']})

export default function RootLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}