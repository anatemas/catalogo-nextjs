"use client"

import { useState } from "react"
import ProductCard from "@/components/ProductCart"
import { products } from "@/data/products"

const categorias = ["Todas", ...Array.from(new Set(products.map(p => p.category)))]

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas")

  const productosFiltrados = categoriaActiva === "Todas"
    ? products
    : products.filter(p => p.category === categoriaActiva)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mueblería El Roble</h1>

      <div className="flex gap-2 mb-6 flex-wrap">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full border ${
              categoriaActiva === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productosFiltrados.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}