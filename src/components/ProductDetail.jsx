import { useParams } from "react-router-dom";
import { mockData } from "../utils/data";
import { Rating, RatingNumber } from "../utils/Rating";
import {
  FaApplePay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";
import { GrGooglePay, GrGooglePlay, GrVisa } from "react-icons/gr";
import { RiMastercardFill } from "react-icons/ri";
import { SiGooglepay } from "react-icons/si";

export default function ProductDetail() {
  const { id } = useParams();
  const data = mockData.bestSellers[id];

  return (
    <div className="container mx-auto p-6 mt-10 flex">
      <div className="w-full space-y-2 ">
        <img src={data.image} className="rounded-lg w-full" />
        <div className="flex gap-2 [&>img]:size-full [&>img]:rounded-lg">
          <img src={data.image} />
          <img src={data.image} />
          <img src={data.image} />
        </div>
      </div>
      <div className="w-full p-10 space-y-10">
        <h1 className="text-5xl font-semibold mb-2">{data.title}</h1>
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

        <h2 className="text-6xl font-bold">${Number(data.price).toFixed(2)}</h2>
        <p className="text-sm leading-6 text-stone-500 font-medium mb-5">
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
      </div>
    </div>
  );
}
