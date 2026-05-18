import { products } from "@/data/products"
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Catálogo
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  )
}