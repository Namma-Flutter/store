import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";
import { useProducts } from "../context/ProductContext";

export default function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, getCartItemCount } = useProducts();

  return (
    <>
      <Navbar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItemCount={getCartItemCount()}
      />
      {children}
      <Footer />
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
}
