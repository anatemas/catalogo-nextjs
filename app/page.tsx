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
    <main style={{ backgroundColor: "#F5F0E8", minHeight: "100vh" }}>

      <div style={{
        backgroundColor: "#E8DDD0",
        borderBottom: "1px solid #C4A882",
        padding: "2.5rem 2rem"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontFamily: "Georgia, serif",
          color: "#2C1A0E",
          fontWeight: "bold",
          margin: 0
        }}>
          Mueblería El Roble
        </h1>
        <p style={{ color: "#6B4C35", marginTop: "0.5rem", fontSize: "1.1rem" }}>
          Piezas únicas para transformar tu espacio
        </p>
      </div>

      <div style={{ padding: "2rem" }}>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                border: categoriaActiva === cat ? "2px solid #C1622F" : "1.5px solid #C4A882",
                backgroundColor: categoriaActiva === cat ? "#C1622F" : "white",
                color: categoriaActiva === cat ? "white" : "#7C5C3E",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                fontFamily: "Georgia, serif"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <p style={{ color: "#9B7B62", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
          {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? "s" : ""} encontrado{productosFiltrados.length !== 1 ? "s" : ""}
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.5rem"
        }}>
          {productosFiltrados.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  )
}