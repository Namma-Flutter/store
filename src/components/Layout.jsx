import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";
import { mockData } from "../utils/data";

export default function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartData, setCartData] = useState(null);

  const fetchCartData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCartData(
      mockData.bestSellers.map((item, index) => ({
        id: index + 1,
        name: item.title,
        price: item.price,
        image: item.image,
      }))
    );
  };

  const removeItem = (id) => {
    setCartData((prevData) => prevData.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (isCartOpen) {
      fetchCartData();
    }
  }, [isCartOpen]);

  return (
    <>
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      {children}
      <Footer />
      <Cart
        removeItem={removeItem}
        data={cartData}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </>
  );
}
