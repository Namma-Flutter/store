import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingCart, ArrowUpRight, Trash2 } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import { RatingNumber } from '../utils/Rating';

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useProducts();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 p-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <Heart size={64} className="mx-auto text-stone-300 mb-4" />
            <h1 className="text-3xl font-bold text-stone-800 mb-2">Your Wishlist is Empty</h1>
            <p className="text-stone-600 mb-8">
              Start adding products to your wishlist to keep track of items you love!
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
            >
              <ShoppingCart size={20} />
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Heart size={32} className="text-red-500" fill="currentColor" />
          <h1 className="text-4xl font-bold text-stone-800">My Wishlist</h1>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
            {wishlist.length} item{wishlist.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <WishlistCard
              key={product.id}
              product={product}
              delay={index * 0.1}
              onRemove={() => removeFromWishlist(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const WishlistCard = ({ product, delay, onRemove }) => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{ delay: delay }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={onRemove}
            className="p-2 bg-white/90 hover:bg-red-50 text-red-500 rounded-full transition-colors shadow-sm"
          >
            <Trash2 size={16} />
          </button>
        </div>
        <div className="absolute bottom-3 right-3">
          {product.icon}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-stone-800 line-clamp-1">
            {product.title}
          </h3>
          <RatingNumber rating={product.rating} />
        </div>
        
        <p className="text-sm text-stone-600 mb-3 capitalize">
          {product.tags.map((tag, i) => (
            <span key={i}>
              {tag}
              {i < product.tags.length - 1 ? " • " : ""}
            </span>
          ))}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-stone-800">
            ${product.price}
          </span>
          <Link
            to={`/p/${product.id}`}
            className="flex items-center gap-2 bg-stone-800 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors text-sm"
          >
            View Details
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
