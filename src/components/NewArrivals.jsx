/* eslint-disable react/prop-types */
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { mockData } from "../utils/data";

export default function NewArrivals() {
  return (
    <div id="new-arrivals" className=" container mx-auto space-y-12 z-10">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3, once: false, margin: "0px 0px -100px 0px" }}
        className="uppercase font-black text-7xl text-center"
      >
        New Arrivals
        <p className="font-normal text-balance max-w-2xl mt-2 mx-auto text-sm capitalize">
          Stay ahead with our latest arrivals — a curated selection of fresh
          releases designed to inspire and elevate your experience. From
          cutting-edge designs to refined classics, explore what&apos;s new and
          trending right now.{" "}
        </p>
      </motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 rounded-xl">
        {mockData.arrivals.map((item, index) => (
          <ArrivalCompo
            key={index}
            image={item.image}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
      </motion.div>
    </div>
  );
}

const ArrivalCompo = ({ image, title, desc, icon }) => {
  return (
    <div className="flex aspect-square bg-white rounded-2xl flex-col">
      <img src={image} alt="" className="rounded-t-xl" />
      <div className="p-6 flex items-end gap-3 justify-between border border-slate-200 border-t-0 rounded-b-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            {icon}
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <div className="flex items-center gap-4 mt-2 justify-between">
            <p className="text-sm text-gray-600 line-clamp-3">{desc}</p>
            <button className="bg-slate-200 p-3 rounded-full hover:bg-slate-300 transition-colors cursor-pointer">
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
