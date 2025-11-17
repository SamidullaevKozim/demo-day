import { useTranslation } from "react-i18next";
import { useCartStore } from "../store/cartStore";
const Cart = () => {
  const { cartItems, decreaseQuantity, clearCart } = useCartStore();

  const {t} = useTranslation()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">{t("cart")}</h2>

      {cartItems.length === 0 && <p>{t("cartEmpty")}</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white p-4 mb-4 rounded shadow"
        >
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>
              {item.price} {t("sum")} x {item.quantity} {t("kg")}
            </p>
          </div>
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            {t("delete")}
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="mt-6">
          <p className="font-semibold text-lg">{t("totalSum")}: {total} {t("sum")}</p>
          <button
            onClick={clearCart}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {t("clearCart")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
