import { formatPrice } from '../utils/formatPrice'

export default function Cart({
  items,
  onAdd,
  onRemove,
  onCheckout,
}) {

const total = items.reduce((acc, item) => {
  return acc + Number(item.price) * Number(item.quantity)
}, 0)


  const quantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  )

  return (
    <section
      id="carrito"
      className="mx-auto max-w-7xl px-5 py-12"
    >
      <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
        <h2 className="text-2xl font-black">
          TU PEDIDO 🛒
        </h2>

        <p className="mt-2 text-gray-400">
          {quantity === 0
            ? 'Todavía no agregaste productos.'
            : `${quantity} producto(s) en tu carrito.`}
        </p>

        {items.map((item) => (
          <div
            key={item.id}
            className="mt-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4"
          >
            <div>
              <p className="font-bold">{item.name}</p>

              <p className="text-sm text-yellow-400">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onRemove(item.id)}
                className="h-9 w-9 rounded-lg border border-white/20"
                aria-label={`Quitar una unidad de ${item.name}`}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => onAdd(item)}
                className="h-9 w-9 rounded-lg bg-yellow-400 font-bold text-black"
                aria-label={`Agregar una unidad de ${item.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <p className="mt-6 text-2xl font-black text-yellow-400">
          Total: {formatPrice(total)}
        </p>

        <button
          onClick={onCheckout}
          disabled={items.length === 0}
          className="mt-6 w-full rounded-xl bg-green-500 px-6 py-4 font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          📲 ENVIAR PEDIDO POR WHATSAPP
        </button>
      </div>
    </section>
  )
}