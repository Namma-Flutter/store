/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Trash, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { useProducts } from "../context/ProductContext";

export default function Cart({ isOpen, setIsOpen }) {
  const [small, setSmall] = useState(false);
  const { cart, removeFromCart, updateCartQuantity, getCartTotal, clearCart } =
    useProducts();

  useEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay/Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 lg:bg-gradient-to-l bg-gradient-to-b from-black/40 to-transparent bg-opacity-50 z-[999]  to-60%"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Modal */}
          <motion.div
            initial={{
              filter: "blur(10px)",
              opacity: 0,
              ...(small ? { y: "-100%" } : { x: "100%" }),
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              ...(small ? { y: 0 } : { x: 0 }),
            }}
            exit={{
              filter: "blur(10px)",
              opacity: 0,
              ...(small ? { y: "-100%" } : { x: "100%" }),
            }}
            className="fixed bg-white m-0 md:m-10 mt-10 top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 w-[25rem] p-6 shadow-xl rounded-lg z-[1000] overflow-clip"
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Your Cart</h1>
              <AiFillCloseCircle
                className="cursor-pointer size-5 text-black "
                onClick={() => setIsOpen(false)}
              />
            </div>

            {cart.length > 0 && (
              <div className="flex items-center justify-between mb-4 text-sm">
                <span className="text-gray-600">
                  {cart.length} item{cart.length !== 1 ? "s" : ""}
                </span>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Clear All
                </button>
              </div>
            )}

            <div className="flex my-5 flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-[50vh] scrollbar-thin scrollbar-thumb-gray-200">
              {cart.length === 0 ? <NoItems /> : <CartItems />}
            </div>

            {cart.length > 0 && (
              <>
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-black p-2 rounded-md font-semibold text-white hover:bg-gray-800 transition-colors">
                  Check Out
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const NoItems = () => {
  return (
    <motion.div
      intial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="h-[20rem] w-full border-2  border-dashed border-gray-300  bg-gray-100 grid place-items-center"
    >
      <ShoppingCart className="size-20 stroke-gray-300" />
    </motion.div>
  );
};

const CartItems = () => {
  const { cart, removeFromCart, updateCartQuantity } = useProducts();

  return (
    <AnimatePresence>
      {cart.map((item, key) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ scale: 0.7, opacity: 0, filter: "blur(2px)", x: 100 }}
          transition={{
            animate: { delay: key * 0.1 },
            exit: {
              delay: 0,
              duration: 0.2,
              default: {
                type: "spring",
              },
            },
          }}
          className="flex items-center gap-3 p-3 border-b border-gray-100 last:border-b-0"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex flex-1 flex-col">
            <h2 className="font-semibold text-sm">{item.title}</h2>
            <p className="text-sm text-gray-500">${item.price}</p>
            <p className="text-xs text-gray-400">
              Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Minus size={12} />
              </button>
              <span className="px-2 text-sm font-medium min-w-[24px] text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Plus size={12} />
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white p-1.5 rounded-md hover:bg-red-600 transition-colors"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash size={12} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
