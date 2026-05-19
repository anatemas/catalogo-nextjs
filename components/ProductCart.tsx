"use client"
import Link from "next/link"
import { useCarrito } from "@/context/CarritoCotext"

export default function ProductCard({ product }: any) {
  const { agregar } = useCarrito()

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-black font-black mt-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-red-700">
            ${product.price.toLocaleString("es-MX")}
          </span>
          <button
            onClick={() => agregar(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            + Carrito
          </button>
        </div>
      </div>
    </div>
  )
}