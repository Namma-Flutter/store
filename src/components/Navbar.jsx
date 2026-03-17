/* eslint-disable react/prop-types */
import { Search, ShoppingCart, User } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar({
  isCartOpen,
  setIsCartOpen,
  cartItemCount = 0,
}) {
  const isHomePage = window.location.pathname === "/";

  return (
    <motion.nav
      initial={isHomePage && { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="flex items-center justify-between p-4 bg-white/80 border-b border-slate-200 px-8  sticky top-0 z-50 backdrop-blur-3xl "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <a href="/" className="flex items-center gap-2  cursor-pointer">
        <img alt="logo" src="/Logo.png" className="size-5" />
        <h1 className="font-bold">
          <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Namma
          </span>{" "}
          Flutter
        </h1>
      </a>
      <ul className="flex-1 hidden md:flex items-center justify-center gap-5 ">
        <li>
          <a
            className="font-semibold text-sm opacity-70 hover:opacity-100"
            href="/#new-arrivals"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-sm opacity-70 hover:opacity-100"
            href="/#best-sellers"
          >
            Best Sellers
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-sm opacity-70 hover:opacity-100"
            href="/catalog"
          >
            Catalog
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap ">
        <a href="/catalog">
          <li className="p-3">
            <Search className="size-4" />
          </li>
        </a>
        <a onClick={() => setIsCartOpen(!isCartOpen)}>
          <li className="p-3">
            <User className="size-4" />
          </li>
        </a>
        <li
          className="bg-slate-200 rounded-full grid place-items-center p-3 cursor-pointer relative"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingCart className="size-4" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
              {cartItemCount > 99 ? "99+" : cartItemCount}
            </span>
          )}
        </li>
      </ul>
    </motion.nav>
  );
}
