import Header from "@/layout/Header"
import "./globals.css"
import { yekan } from "@/utils/fonts"
import NextAuthProvider from "@/providers/NextAuthProvider"

export const metadata = {
  title: "خرید و فروش املاک",
  description: "وبسایت خرید، فروش، رهن و اجاره ملک",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Header>{children}</Header>
        </NextAuthProvider>
      </body>
    </html>
  )
}
