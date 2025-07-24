/* eslint-disable react/prop-types */
import { AiFillCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, Trash } from "lucide-react";

export default function Cart({ data, removeItem, isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            x: "100%",
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            x: 0,
          }}
          exit={{
            filter: "blur(10px)",
            opacity: 0,
            x: "100%",
          }}
          className="absolute bg-white m-10 top-0 right-0 w-[25rem] p-6 shadow-xl rounded-lg z-50 overflow-clip"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">Your Cart</h1>
            <AiFillCloseCircle
              className="cursor-pointer size-5 text-black "
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex my-5 flex-col gap-4 overflow-y-auto overflow-x-hidden  max-h-[50vh] scrollbar-thin scrollbar-thumb-gray-200 ">
            {data === null ? (
              <Skeleton />
            ) : data.length === 0 ? (
              <NoItems />
            ) : (
              <DataCompo data={data} removeItem={removeItem} />
            )}
          </div>
          <button className="w-full bg-black p-2 rounded-md font-semibold text-white">
            Check Out
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const Skeleton = () => {
  return (
    <div className="h-[20rem] rounded-md w-full animate-pulse bg-gray-200"></div>
  );
};

const NoItems = () => {
  return (
    <motion.div
      intial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="h-[20rem] w-full border-2  border-dashed border-gray-300  bg-gray-100 grid place-items-center"
    >
      <ShoppingCart className="size-20 stroke-gray-300" />
    </motion.div>
  );
};

const DataCompo = ({ data, removeItem }) => {
  return (
    <AnimatePresence>
      {data.map((item, key) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ scale: 0.7, opacity: 0, filter: "blur(2px)", x: 100 }}
          transition={{
            animate: { delay: key * 0.1 },
            exit: {
              delay: 0,
              duration: 0.2,
              default: {
                type: "spring",
              },
            },
          }}
          className="flex items-center justify-between gap-3 p-3 border-b border-gray-100 last:border-b-0"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex flex-1 flex-col">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-500">${item.price}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black  text-white p-2 rounded-md "
            onClick={() => removeItem(item.id)}
          >
            <Trash size={16} />
          </motion.button>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
