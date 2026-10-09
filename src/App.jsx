import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Footer from './components/Footer'

import { formatPrice } from './utils/formatPrice'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

 function addToCart(product) {
  setCart((current) => {
    const existing = current.find(
      (item) => item.id === product.id,
    )

    if (existing) {
      return current.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    }

    return [...current, { ...product, quantity: 1 }]
  })

  setTimeout(() => {
    document.getElementById('carrito')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, 100)
}

  function removeFromCart(id) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function checkout() {
    if (cart.length === 0) return

    // Reemplazar por el WhatsApp real de Diana.
    const whatsappNumber = '5493757338216'

    if (!whatsappNumber) {
      alert('Falta configurar el WhatsApp del negocio.')
      return
    }

    const details = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity}: ${formatPrice(
            item.price * item.quantity,
          )}`,
      )
      .join('\n')

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    const message =
      `Hola Lo de Diana, quiero hacer este pedido:\n\n` +
      `${details}\n\nTotal estimado: ${formatPrice(total)}`

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message)

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Header />
      <main>
        <Hero />

        <section
          id="promocion"
          className="mx-auto max-w-7xl px-5 py-12"
        >
          <div className="rounded-3xl border border-yellow-400/40 bg-[#151515] p-8">
            <p className="font-bold tracking-widest text-yellow-400">
              ⭐ DESTACADO
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase">
              EL COMBO IDEAL
            </h2>

            <p className="mt-3 text-gray-300">
              Tu hamburguesa favorita, papas crocantes y bebida.
            </p>

            <a
              href="#menu"
              className="mt-6 inline-block rounded-xl bg-yellow-400 px-6 py-4 font-black text-black"
            >
              ELEGIR MI COMBO →
            </a>

            <p className="mt-3 text-xs text-gray-500">
              Productos y precios ilustrativos para la demo.
            </p>
          </div>
        </section>

        <Menu onAdd={addToCart} />

        <Cart
          items={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onCheckout={checkout}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App