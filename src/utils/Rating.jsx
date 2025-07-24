/* eslint-disable react/prop-types */

import { Star, StarHalf } from "lucide-react";
import { cn } from "./utils";

export default function Rating({ rating, className }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value}>
          {rating >= value ? (
            <Star className="w-7 h-7 fill-yellow-400 text-yellow-400 stroke-black stroke-1" />
          ) : rating >= value - 0.5 ? (
            <StarHalf className="w-7 h-7 fill-yellow-400 text-yellow-400 stroke-black stroke-1" />
          ) : (
            <div className=""></div>
          )}
        </span>
      ))}
    </div>
  );
}
