/* eslint-disable react/prop-types */
import { mockData } from "../../utils/data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { RatingNumber } from "../../utils/Rating";
export default function Products({ className }) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold">Available Products</h1>
      <div className="grid grid-cols-3 my-6 gap-5">
        {mockData.bestSellers.map((item, index) => (
          <BestSellersCompo
            key={index}
            title={item.title}
            image={item.image}
            price={item.price}
            icon={item.icon}
            tag={item.tag}
            delay={index * 0.1}
            rating={item.rating}
          />
        ))}
        {mockData.bestSellers.map((item, index) => (
          <BestSellersCompo
            key={index}
            title={item.title}
            image={item.image}
            price={item.price}
            icon={item.icon}
            tag={item.tag}
            delay={index * 0.1}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

const BestSellersCompo = ({
  title,
  image,
  price,
  icon,
  tag,
  delay,
  rating,
}) => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
        filter: "blur(10px)",
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ amount: 0.3, once: true, margin: "0px 0px 0px 0px" }}
      transition={{ delay: delay }}
      className="p-2 shadow-lg  text-white bg-neutral-800 aspect-square rounded-xl  relative"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className=" h-full w-full object-cover rounded-[4px] "
        />
        <div className="absolute bottom-2 right-2 box-shadow-lg shadow-black/80">
          {icon}
        </div>
      </div>

      <div className="flex  p-4 gap-4 flex-col">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-0.25">
            <h2 className="text-lg line-clamp-1 font-bold">{title}</h2>
            <p className=" text-xs capitalize opacity-80 font-medium">
              {tag.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < tag.length - 1 ? "・" : ""}
                </span>
              ))}
            </p>
          </div>
          <RatingNumber rating={rating} />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl px-2 size-max rounded py-1 font-medium bg-white text-black ">
            {price}
          </p>
          <button className=" bg-white p-3 text-black rounded-full hover:bg-white/80 transition-colors cursor-pointer">
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
