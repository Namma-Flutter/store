import Filter from "./Catalog/Filter";
import Products from "./Catalog/Products";

export default function Catalog() {
  return (
    <div className="p-10 flex gap-5 relative">
      <Filter
        className={
          "w-[30%] bg-neutral-50 p-10 rounded-lg border border-stone-200 sticky top-[5.5rem] h-max"
        }
      />
      <Products
        className={
          "w-[70%] bg-neutral-50 p-10 rounded-lg border border-stone-200 h-screen"
        }
      />
    </div>
  );
}
