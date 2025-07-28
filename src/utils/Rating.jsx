/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { cn } from "./utils";
import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

export function RatingSelect({ size, setRating, rating, className }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [internalRating, setInternalRating] = useState(rating);

  useEffect(() => {
    setInternalRating(rating);
  }, [rating]);

  const currentRating = isHovering ? hoverRating : internalRating;

  const handleMouseEnter = (value) => {
    setIsHovering(true);
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoverRating(0);
  };

  const handleClick = (value) => {
    setInternalRating(value);
    setRating(value);
  };

  const getStarScale = (starValue) => {
    if (!isHovering) return 1;

    const distance = Math.abs(starValue - hoverRating);
    if (distance === 0) return 1.2; // Hovered star
    if (distance === 1) return 1.1; // Adjacent stars
    if (distance === 2) return 1.0; // Second neighbors
    return 1; // Far stars
  };

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4, 5].map((value) => (
        <motion.span
          key={value}
          onClick={() => handleClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          className="cursor-pointer"
          animate={{
            scale: getStarScale(value),
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.2,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {currentRating >= value ? (
            <BiSolidStar className={cn("size-6 fill-yellow-400 ", size)} />
          ) : currentRating >= value - 0.5 ? (
            <BiSolidStarHalf className={cn("size-6 fill-yellow-400 ", size)} />
          ) : (
            <BiStar className={cn(" size-6 fill-black/50", size)} />
          )}
        </motion.span>
      ))}
    </div>
  );
}

export function RatingNumber({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-lg font-semibold">{rating.toFixed(1)}</span>
      <IoIosStar />
    </div>
  );
}

export function Rating({ rating, className }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value}>
          {rating >= value ? (
            <IoIosStar className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : rating >= value - 0.5 ? (
            <IoIosStarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400 color-black/60 color-1" />
          ) : (
            <IoIosStarOutline className="w-5 h-5 fill-yellow-400 text-yellow-400 color-black/60 stroke-1" />
          )}
        </span>
      ))}
    </div>
  );
}
