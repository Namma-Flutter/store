import { useParams } from "react-router-dom";
import { Rating, RatingNumber } from "../utils/Rating";
import { FaCcApplePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { motion } from "motion/react";
import { SiGooglepay } from "react-icons/si";
import { ShoppingCart, Heart } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const {
    getProductById,
    addToCart,
    getCartItemQuantity,
    isInWishlist,
    toggleWishlist,
  } = useProducts();

  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("m");

  const product = getProductById(parseInt(id));
  const cartQuantity = getCartItemQuantity(parseInt(id));
  const inWishlist = isInWishlist(parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto p-6 mt-10 text-center">
        <h1 className="text-2xl font-bold text-gray-600">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    // Here you could redirect to checkout or open cart
  };

  const variantsProps = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <div className="container mx-auto p-6 mt-10 flex flex-col  lg:flex-row">
      <div className="lg:w-[50%] space-y-2">
        <motion.img
          initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          src={product.image}
          className="rounded-lg w-full"
        />
        <motion.div
          className="grid grid-cols-3 gap-2 [&>img]:rounded-lg"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.img
            variants={variantsProps}
            src={product.image}
            className="size-full cursor-pointer"
          />
          <motion.img
            variants={variantsProps}
            src={product.image}
            className="size-full cursor-pointer"
          />
          <motion.img
            variants={variantsProps}
            src={product.image}
            className="size-full cursor-pointer"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        className="lg:w-[50%] md:p-5 mt-10 lg:mt-0 xl:p-10  space-y-8 xl:space-y-10"
      >
        <div className="flex justify-between items-start">
          <h1 className="text-4xl lg:text-3xl xl:text-5xl font-semibold mb-2">
            {product.title}
          </h1>
          <button
            onClick={() => toggleWishlist(product)}
            className={`p-3 rounded-full transition-colors ${
              inWishlist
                ? "bg-red-100 text-red-500"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            <Heart size={24} fill={inWishlist ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex gap-2  items-center">
            <RatingNumber rating={product.rating} />
            <Rating rating={product.rating} />
          </div>
          <p className="opacity-70 font-bold">/</p>
          <button className="font-semibold uppercase text-sm cursor-pointer opacity-60 hover:opacity-100 duration-150">
            Add a Review
          </button>
        </div>

        <h2 className=" text-5xl xl:text-6xl font-bold">
          ${Number(product.price).toFixed(2)}
        </h2>
        <p className="text-xs xl:text-sm leading-5 text-stone-500 font-medium mb-5">
          {product.desc}
        </p>

        <h2 className="space-x-3 uppercase">
          {product.tags.map((tag, i) => {
            return (
              <span
                key={i}
                className="font-medium rounded-full px-[13px] text-xs border-1 border-black py-1 bg-stone-100"
              >
                {tag}
              </span>
            );
          })}
        </h2>
        <div className="grid grid-cols-2 gap-4 [&_label]:text-sm [&_label]:font-semibold">
          <div className="flex flex-col gap-2">
            <label htmlFor="color">Color</label>
            <select
              id="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border border-stone-300 p-2 rounded w-full"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="size">Size</label>
            <select
              id="size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border border-stone-300 p-2 rounded w-full"
            >
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
        </div>

        {cartQuantity > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 text-sm">
              <ShoppingCart size={16} className="inline mr-2" />
              {cartQuantity} item{cartQuantity !== 1 ? "s" : ""} in cart
            </p>
          </div>
        )}
        <div className="flex gap-4 mb-2">
          <button
            onClick={handleAddToCart}
            className="border-2 border-black p-3 rounded-lg w-full hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add To Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-black text-white p-3 rounded-lg w-full hover:bg-gray-800 transition-colors"
          >
            Buy Now!
          </button>
        </div>
        <div className="flex gap-4 justify-end">
          <SiGooglepay className="size-7 " />
          <FaCcApplePay className="size-7" />
          <FaCcVisa className="size-7" />
          <FaCcMastercard className="size-7" />
        </div>
      </motion.div>
    </div>
  );
}
