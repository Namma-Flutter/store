import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-slate-200 px-8 mb-15">
      <div className="flex items-center gap-2">
        <img alt="logo" src="/logo.svg" className="size-5" />
        <h1 className="font-bold">Style Hub</h1>
      </div>
      <ul className="flex-1 hidden md:flex items-center justify-center gap-5 ">
        <li>
          <a
            className="font-semibold text-sm opacity-70 hover:opacity-100"
            href="#new-arrivals"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-sm opacity-70 hover:opacity-100"
            href="#best-sellers"
          >
            Best Sellers
          </a>
        </li>
        <li>
          <a
            className="font-semibold text-sm opacity-70 hover:opacity-100"
            href="#catalog"
          >
            Catalog
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap ">
        <li className="p-3">
          <Search className="size-4" />
        </li>
        <li className="p-3">
          <User className="size-4" />
        </li>
        <li className="bg-slate-200 rounded-full grid place-items-center p-3">
          <ShoppingCart className="size-4" />
        </li>
      </ul>
    </nav>
  );
}
