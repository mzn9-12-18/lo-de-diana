import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Menu({ onAdd }) {
  const [category, setCategory] = useState('Todos')

  const categories = [
    'Todos',
    'Hamburguesas',
    'Combos',
    'Acompañamientos',
  ]

  const filteredProducts =
    category === 'Todos'
      ? products
      : products.filter((product) => product.category === category)

  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-16">
      <p className="font-bold tracking-widest text-yellow-400">
        ELEGÍ TUS FAVORITOS
      </p>

      <h2 className="mt-3 text-4xl font-black uppercase sm:text-5xl">
        NUESTRO <span className="text-yellow-400">MENÚ</span>
      </h2>

      <div className="my-8 flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full border px-5 py-3 text-sm font-bold ${
              category === item
                ? 'border-yellow-400 bg-yellow-400 text-black'
                : 'border-white/20 text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  )
}