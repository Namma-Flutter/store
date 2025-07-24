import { mockData } from "../../utils/data";
import { DoubleSlider } from "../../utils/MultiRangeSlider";
import { useEffect, useState } from "react";
import Rating from "../../utils/Rating";

/* eslint-disable react/prop-types */
export default function Filter({ className }) {
  const [priceRange, setPriceRange] = useState([100, 900]);

  useEffect(() => {
    console.log(priceRange);
  }, [priceRange]);

  return (
    <div className={className}>
      <h1 className="text-3xl font-bold">Filter</h1>
      <form className="flex flex-col gap-6 my-6">
        <div className="">
          <label htmlFor="search-input" className="font-medium text-stone-600">
            Search
          </label>
          <input
            type="text"
            placeholder="Start Searching!"
            className="border mt-2 bg-white border-stone-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label
            htmlFor="category-selector"
            className="font-medium text-stone-600"
          >
            Category
          </label>
          <select
            name="category"
            id="category-selector"
            className="w-full mt-2 p-3 border bg-white border-stone-300 rounded"
          >
            <option value="">Select</option>
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
        <div className="mt-8">
          <label htmlFor="rating" className="font-medium text-stone-600">
            Rating
          </label>
          <Rating rating={5} className="mt-2" />
        </div>
      </form>
    </div>
  );
}
