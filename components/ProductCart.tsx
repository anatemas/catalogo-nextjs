"use client"
import Link from "next/link"
import { useCarrito } from "@/context/CarritoCotext"

export default function ProductCard({ product }: any) {
  const { agregar } = useCarrito()

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">

      <Link href={`/product/${product.id}`} className="block relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
            Ver más →
          </span>
        </div>
      </Link>

      <div className="p-4">
        <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h2 className="text-lg font-bold text-gray-800 mt-2 leading-tight">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-green-700">
            ${product.price.toLocaleString("es-MX")}
          </span>
          <button
            onClick={() => agregar(product)}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          >
            + Carrito
          </button>
        </div>
      </div>

    </div>
  )
}