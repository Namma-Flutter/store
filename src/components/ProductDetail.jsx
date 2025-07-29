import { useParams } from "react-router-dom";
import { mockData } from "../utils/data";
import { Rating, RatingNumber } from "../utils/Rating";
import { FaCcApplePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { motion } from "motion/react";
import { SiGooglepay } from "react-icons/si";

export default function ProductDetail() {
  const { id } = useParams();
  const data = mockData.bestSellers[id];

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
          src={data.image}
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
            src={data.image}
            className="size-full cursor-pointer"
          />
          <motion.img
            variants={variantsProps}
            src={data.image}
            className="size-full cursor-pointer"
          />
          <motion.img
            variants={variantsProps}
            src={data.image}
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
        <h1 className="text-4xl lg:text-3xl xl:text-5xl font-semibold mb-2">
          {data.title}
        </h1>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2  items-center">
            <RatingNumber rating={data.rating} />
            <Rating rating={data.rating} />
          </div>
          <p className="opacity-70 font-bold">/</p>
          <button className="font-semibold uppercase text-sm cursor-pointer opacity-60 hover:opacity-100 duration-150">
            Add a Review
          </button>
        </div>

        <h2 className=" text-5xl xl:text-6xl font-bold">
          ${Number(data.price).toFixed(2)}
        </h2>
        <p className="text-xs xl:text-sm leading-5 text-stone-500 font-medium mb-5">
          {data.desc}
        </p>

        <h2 className="space-x-3 uppercase">
          {data.tag.map((tag, i) => {
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
        <div className="flex items-center [&_label]:text-sm [&_label]:font-semibold gap-5 [&_input]:w-full justify-between">
          <div className="flex flex-col gap-2 h-full w-full ">
            <label htmlFor="">Color</label>
            <select
              name=""
              id=""
              className=" h-full border border-stone-300 p-2 rounded w-full"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col gap-2  w-full">
            <label htmlFor="">Size</label>
            <select
              name=""
              id=""
              className="h-full border border-stone-300 p-2 rounded w-full"
            >
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <button className="border-2 border-black p-3 rounded-lg w-full">
            Add To Cart
          </button>
          <button className="bg-black text-white p-3 rounded-lg w-full">
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
