import { Mars, Venus, Glasses } from "lucide-react";

export const mockData = {
  arrivals: [
    {
      image: "/newArrival-1.png",
      title: "Womens's Section",
      icon: (
        <div className="p-2 bg-blue-300/20 rounded-md">
          <Mars />
        </div>
      ),
      desc: "Discover the latest arrivals in men's fashion. From casual wear to formal attire, our collection has something for every style.",
    },
    {
      image: "/newArrival-2.png",
      title: "Men's Collection",
      icon: (
        <div className="p-2 bg-blue-300/20 rounded-md">
          <Venus />
        </div>
      ),
      desc: "Explore the newest trends in men's fashion with our latest collection. From casual wear to formal attire, find the perfect pieces to elevate your style.",
    },
    {
      image: "/newArrival-3.png",
      title: "Accessories",
      icon: (
        <div className="p-2 bg-amber-300/20 rounded-md">
          <Glasses />
        </div>
      ),
      desc: "Complete your look with our stylish accessories. From statement jewelry to trendy bags, find the perfect finishing touches for any outfit.",
    },
  ],
};
