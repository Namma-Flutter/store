/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { mockData } from "../../utils/data";
import { ArrowUpRight } from "lucide-react";

export default function BestSellers() {
  return (
    <div id="best-sellers" className="container mx-auto p-4 my-20">
      <motion.h1
        initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ amount: 0.3, once: true, margin: "0px 0px -100px 0px" }}
        className="uppercase font-black text-7xl text-center mb-20"
      >
        Best Sellers
        <p className="font-normal text-balance max-w-4xl mt-2 mx-auto text-sm capitalize">
          Discover our top-rated products that have captured the hearts of our
          customers. These best sellers are a testament to quality and style,
          offering a blend of functionality and aesthetic appeal. From timeless
          classics to modern must-haves, explore the items that have become
          favorites among our community.
        </p>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockData.bestSellers.map((item, key) => {
          return (
            <BestSellersCompo
              link={`/p/${key}`}
              key={key}
              title={item.title}
              image={item.image}
              price={item.price}
              icon={item.icon}
              tag={item.tag}
              delay={key * 0.05}
            />
          );
        })}
      </div>
    </div>
  );
}

const BestSellersCompo = ({ title, image, price, icon, tag, delay, link }) => {
  return (
    <motion.a
      href={link}
      initial={{
        rotate: -10,
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        rotate: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ amount: 0.3, once: true, margin: "0px 0px 0px 0px" }}
      transition={{ delay: delay }}
      className="p-3 shadow-lg  text-white bg-neutral-800 aspect-square rounded-3xl relative"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className=" h-full w-full object-cover rounded-[12px] "
        />
        <div className="absolute bottom-2 right-2 box-shadow-lg shadow-black/80">
          {icon}
        </div>
      </div>

      <div className="flex p-4 justify-between ">
        <div className=" space-y-3">
          <h2 className="text-2xl font-bold line-clamp-1">{title}</h2>
          <p className="-mt-3 text-sm capitalize opacity-80 font-medium">
            {tag.map((t, i) => (
              <span key={i}>
                {t}
                {i < tag.length - 1 ? "・" : ""}
              </span>
            ))}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-2xl px-2 size-max rounded py-1 font-medium bg-white text-black ">
              {price}
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <button className=" bg-white p-3 text-black rounded-full hover:bg-white/80 transition-colors cursor-pointer">
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </motion.a>
  );
};
