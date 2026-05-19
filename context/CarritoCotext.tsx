"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Producto = {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

type ItemCarrito = Producto & { cantidad: number }

type CarritoContextType = {
  carrito: ItemCarrito[]
  agregar: (producto: Producto) => void
  quitar: (id: number) => void
  vaciar: () => void
  total: number
  totalItems: number
}

const CarritoContext = createContext<CarritoContextType | null>(null)

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])

  // Cargar desde localStorage al inicio (Día 4)
  useEffect(() => {
    const guardado = localStorage.getItem("carrito")
    if (guardado) setCarrito(JSON.parse(guardado))
  }, [])

  // Guardar en localStorage cada vez que cambie (Día 4)
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const agregar = (producto: Producto) => {
    setCarrito(prev => {
      const existe = prev.find(i => i.id === producto.id)
      if (existe) {
        return prev.map(i => i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i)
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  const quitar = (id: number) => {
    setCarrito(prev => prev.filter(i => i.id !== id))
  }

  const vaciar = () => setCarrito([])

  const total = carrito.reduce((acc, i) => acc + i.price * i.cantidad, 0)
  const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <CarritoContext.Provider value={{ carrito, agregar, quitar, vaciar, total, totalItems }}>
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  const ctx = useContext(CarritoContext)
  if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider")
  return ctx
}