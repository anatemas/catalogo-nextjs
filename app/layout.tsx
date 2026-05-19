import type { Metadata } from "next"
import "./globals.css"
import { CarritoProvider } from "@/context/CarritoCotext"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Mueblería El Roble",
  description: "Muebles de calidad para tu hogar",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{
        backgroundColor: "#F5F0E8",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        fontFamily: "Georgia, serif",
        color: "#2C1A0E"
      }}>
        <CarritoProvider>
          <Navbar />
          {children}
        </CarritoProvider>
      </body>
    </html>
  )
}