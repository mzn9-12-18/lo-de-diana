import { formatPrice } from '../utils/formatPrice'

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition hover:border-yellow-400/60">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-2 text-xs font-black text-black">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black">
          {product.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm text-gray-400">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-black text-yellow-400">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={() => onAdd(product)}
            className="rounded-xl bg-yellow-400 px-4 py-3 text-sm font-black text-black hover:bg-yellow-300"
          >
            + AGREGAR
          </button>
        </div>
      </div>
    </article>
  )
}