export default function Hero() {
  return (
    <section id="inicio" className="hero-section px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-bold tracking-widest text-yellow-400">
            🔥 EL SABOR QUE ESTABAS BUSCANDO
          </p>

          <h2 className="mt-6 text-6xl font-black uppercase leading-tight sm:text-8xl">
            HOY SE
            <br />
            COME
            <br />
            <span className="text-yellow-400">RICO.</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg text-gray-300">
            Hamburguesas, combos y mucho sabor.
            Elegí tus favoritos y prepará tu próximo pedido.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-xl bg-yellow-400 px-6 py-4 font-black text-black"
            >
              🍔 VER NUESTRO MENÚ
            </a>

            <a
              href="#promocion"
              className="rounded-xl border border-white/30 px-6 py-4 font-bold"
            >
              Ver promociones ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-300">
            <span>🍔 Hamburguesas</span>
            <span>🍟 Combos</span>
            <span>📲 Pedidos por WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  )
}