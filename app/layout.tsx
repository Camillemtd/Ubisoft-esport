import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}
