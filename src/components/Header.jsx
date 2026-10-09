export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-400/20 bg-black/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#inicio">
          <h1 className="text-xl font-black uppercase text-yellow-400">
            🍔 Lo de Diana
          </h1>

          <p className="text-xs text-gray-400">
            CARRITO DE COMIDA RÁPIDA
          </p>
        </a>

        <a
          href="#menu"
          className="rounded-full bg-yellow-400 px-5 py-3 font-black text-black"
        >
          VER MENÚ ↓
        </a>
      </div>
    </header>
  )
}