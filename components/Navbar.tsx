"use client"
import Link from "next/link"
import { useCarrito } from "@/context/CarritoCotext"

export default function Navbar() {
  const { totalItems } = useCarrito()

  return (
    <nav className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10">
      <Link href="/" className="text-xl font-bold text-gray-800">🪑 Mueblería El Roble</Link>
      <Link href="/cart" className="relative">
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  )
}