import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { CarritoProvider } from "@/context/CarritoCotext"
import Navbar from "@/components/Navbar"


const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mueblería El Roble",
  description: "Punto de venta de muebles",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="min-h-full flex flex-col bg-gray-50">
        <CarritoProvider>
              <Navbar />
          {children}
        </CarritoProvider>
      </body>
    </html>
  )
}