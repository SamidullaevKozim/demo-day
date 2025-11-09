import { useCartStore } from "../store/cartStore";
const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCartStore();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Корзина</h2>

      {cartItems.length === 0 && <p>Корзина пуста</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>
              {item.price} сум x {item.quantity} кг
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Удалить
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <p className="font-semibold text-lg">Итого: {total} сум</p>
          <button
            onClick={clearCart}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Очистить корзину
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
