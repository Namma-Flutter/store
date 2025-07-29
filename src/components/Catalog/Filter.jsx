import { motion } from "motion/react";
import { mockData } from "../../utils/data";
import { DoubleSlider } from "../../utils/MultiRangeSlider";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { RatingSelect } from "../../utils/Rating";

/* eslint-disable react/prop-types */
export default function Filter({ className }) {
  const [priceRange, setPriceRange] = useState([100, 900]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log(priceRange);
  }, [priceRange]);

  return (
    <div className={className}>
      <h1 className="text-3xl font-bold">Filter</h1>
      <form className="flex flex-col gap-6 my-6">
        <div className="">
          <label htmlFor="search-input" className="font-medium text-stone-600 ">
            Search
          </label>
          <div className="border mt-2 bg-white border-stone-300 p-2 rounded-lg w-full flex items-center gap-2">
            <Search className="opacity-50 size-5" />
            <input
              type="text"
              placeholder="Start Searching!"
              className="flex-1 active:outline-none focus:outline-none text-sm"
            />
          </div>
        </div>
        <div className="text-sm">
          <label
            htmlFor="category-selector"
            className="font-medium text-stone-600"
          >
            Category
          </label>
          <select
            name="category"
            id="category-selector"
            placeholder="Select Category"
            className="w-full mt-2 p-[0.55rem] border  bg-white border-stone-300 rounded-lg"
          >
            <option value="">All</option>
            {mockData.categories.map((cat, index) => {
              return (
                <option value={cat} key={`${cat}-${index}`}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="price-slider" className="font-medium text-stone-600">
            Price Range
          </label>
          <DoubleSlider
            min={0}
            max={1000}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full mt-5"
          />
        </div>
        <div className="mt-10">
          <label
            htmlFor="rating"
            className="font-medium block lg:hidden xl:block text-stone-600"
          >
            Rating
          </label>
          {/* <Rating rating={2.5} className="mt-2" /> */}
          <div className="flex flex-row lg:flex-col xl:flex-row items-center gap-10 lg:gap-2 xl:gap-10 justify-between mt-2 overflow-clip">
            <RatingSelect
              size={"size-8 lg:size-6 xl:size-8 "}
              setRating={setRating}
              rating={rating}
              className="flex-1 gap-2"
            />

            <p className="text-xl lg:text-lg xl:text-xl font-semibold text-stone-800 bg-stone-200 color-stone-800 px-5 py-1 rounded-full">
              <motion.div
                key={rating}
                initial={{ y: 20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 20,
                }}
              >
                {rating}
              </motion.div>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
