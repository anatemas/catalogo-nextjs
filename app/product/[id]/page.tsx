"use client"
import { products } from "@/data/products"
import Link from "next/link"
import { useCarrito } from "@/context/CarritoCotext"
import { use } from "react"

export default function ProductDetail({ params }: any) {
  const { id } = use(params)
  const { agregar } = useCarrito()
  const product = products.find(p => p.id === Number(id))

  if (!product) return (
    <div style={{ padding: "2rem", color: "#2C1A0E" }}>Producto no encontrado</div>
  )

  return (
    <main style={{ backgroundColor: "#F5F0E8", minHeight: "100vh", padding: "2rem" }}>

      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <Link href="/" style={{
          color: "#C1622F",
          textDecoration: "none",
          fontFamily: "Georgia, serif",
          fontSize: "1rem",
          display: "inline-block",
          marginBottom: "1.5rem"
        }}>
          ← Regresar al catálogo
        </Link>

        <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
          />
        </div>

        <span style={{
          display: "inline-block",
          marginTop: "1.25rem",
          backgroundColor: "#F5F0E8",
          color: "#7C5C3E",
          fontSize: "0.75rem",
          fontWeight: 600,
          padding: "4px 12px",
          borderRadius: "999px",
          border: "1px solid #C4A882"
        }}>
          {product.category}
        </span>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "2rem",
          color: "#2C1A0E",
          fontWeight: "bold",
          marginTop: "0.75rem",
          marginBottom: "0.5rem"
        }}>
          {product.name}
        </h1>

        <p style={{ color: "#6B4C35", fontSize: "1rem", lineHeight: "1.6" }}>
          {product.description}
        </p>

        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "2rem",
          color: "#C1622F",
          fontWeight: "bold",
          marginTop: "1.25rem"
        }}>
          ${product.price.toLocaleString("es-MX")}
        </p>

        <button
          onClick={() => agregar(product)}
          style={{
            marginTop: "1.5rem",
            width: "100%",
            backgroundColor: "#C1622F",
            color: "white",
            border: "none",
            borderRadius: "10px",
            padding: "1rem",
            fontSize: "1.1rem",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#A84F24")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#C1622F")}
        >
          Agregar al carrito
        </button>

      </div>
    </main>
  )
}