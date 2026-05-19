"use client"
import { products } from "@/data/products"
import Link from "next/link"
import { useCarrito } from "@/context/CarritoCotext"
import { use } from "react"

export default function ProductDetail({ params }: any) {
  const { id } = use(params)
  const { agregar } = useCarrito()
  const product = products.find(p => p.id === Number(id))

  if (!product) return <div className="p-8">Producto no encontrado</div>

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">← Regresar al catálogo</Link>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg mt-4"
      />

      <span className="inline-block mt-4 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
        {product.category}
      </span>

      <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
      <p className="text-white-600 mt-2">{product.description}</p>
      <p className="text-3xl font-bold text-red-700 mt-4">
        ${product.price.toLocaleString("es-MX")}
      </p>

      <button
        onClick={() => agregar(product)}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg w-full"
      >
        Agregar al carrito
      </button>
    </main>
  )
}