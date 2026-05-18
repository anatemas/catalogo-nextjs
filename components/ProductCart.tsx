import Link from "next/link"

export default function ProductCard({ product }: any) {
  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.name}
        className="w-full"
      />

      <h2 className="text-xl font-bold mt-2">
        {product.name}
      </h2>

      <p>${product.price}</p>

      <Link href={`/product/${product.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
          Ver detalle
        </button>
      </Link>
    </div>
  )
}