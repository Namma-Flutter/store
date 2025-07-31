/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { ArrowUpRight, ShoppingCart, Plus, Minus } from "lucide-react";
import { RatingNumber } from "../../utils/Rating";
import { useProducts } from "../../context/ProductContext";
export default function Products({ className }) {
  const { filteredProducts, filters, updateSortBy } = useProducts();

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Available Products ({filteredProducts.length})
        </h1>
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort-select"
            className="text-sm font-medium text-stone-600"
          >
            Sort by:
          </label>
          <select
            id="sort-select"
            value={filters.sortBy}
            onChange={(e) => updateSortBy(e.target.value)}
            className="text-sm p-2 border border-stone-300 rounded-lg bg-white"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="rating-desc">Rating (High to Low)</option>
            <option value="rating-asc">Rating (Low to High)</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-stone-600 mb-4">No products found</p>
          <p className="text-stone-500">
            Try adjusting your filters to see more results.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProducts.map((item, index) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              icon={item.icon}
              tags={item.tags}
              delay={index * 0.1}
              rating={item.rating}
              link={`/p/${item.id}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  icon,
  tags,
  delay,
  rating,
  link,
}) => {
  const { addToCart, getCartItemQuantity, updateCartQuantity, getProductById } =
    useProducts();
  const cartQuantity = getCartItemQuantity(id);
  const product = getProductById(id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product) {
      addToCart(product, 1);
    }
  };

  const handleUpdateQuantity = (e, newQuantity) => {
    e.preventDefault();
    e.stopPropagation();
    updateCartQuantity(id, newQuantity);
  };
  return (
    <motion.a
      href={link}
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
              {tags.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < tags.length - 1 ? "・" : ""}
                </span>
              ))}
            </p>
          </div>
          <RatingNumber rating={rating} />
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="text-xl px-2 size-max rounded py-1 font-medium bg-white text-black ">
            ${price}
          </p>
          <div className="flex items-center gap-2">
            {cartQuantity > 0 ? (
              <div className="flex items-center gap-1 bg-white rounded-full p-1">
                <button
                  onClick={(e) => handleUpdateQuantity(e, cartQuantity - 1)}
                  className="p-1 text-black hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-2 text-sm font-medium text-black min-w-[24px] text-center">
                  {cartQuantity}
                </span>
                <button
                  onClick={(e) => handleUpdateQuantity(e, cartQuantity + 1)}
                  className="p-1 text-black hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-white p-2 text-black rounded-full hover:bg-white/80 transition-colors cursor-pointer flex items-center gap-1"
              >
                <ShoppingCart size={16} />
              </button>
            )}
            <button className="bg-white p-2 text-black rounded-full hover:bg-white/80 transition-colors cursor-pointer">
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.a>
  );
};
