"use client"
import { useCarrito } from "@/context/CarritoCotext"
import Link from "next/link"

export default function CartPage() {
  const { carrito, quitar, vaciar, total } = useCarrito()

  if (carrito.length === 0) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
        <Link href="/" className="text-blue-600 hover:underline">← Ver catálogo</Link>
      </main>
    )
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Carrito</h1>
        <Link href="/" className="text-blue-600 hover:underline">← Seguir comprando</Link>
      </div>

      <div className="space-y-4">
        {carrito.map(item => (
          <div key={item.id} className="flex items-center gap-4 border rounded-lg p-4 bg-white">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-gray-500 text-sm">{item.category}</p>
              <p className="text-green-700 font-semibold">
                ${item.price.toLocaleString("es-MX")} × {item.cantidad}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">${(item.price * item.cantidad).toLocaleString("es-MX")}</p>
              <button
                onClick={() => quitar(item.id)}
                className="text-red-500 text-sm hover:underline mt-1"
              >
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span className="text-green-700">${total.toLocaleString("es-MX")}</span>
        </div>
        <button
          onClick={vaciar}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Vaciar carrito
        </button>
        <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Finalizar compra
        </button>
      </div>
    </main>
  )
}