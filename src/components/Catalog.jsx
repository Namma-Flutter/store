import Filter from "./Catalog/Filter";
import Products from "./Catalog/Products";

export default function Catalog() {
  return (
    <div className="p-4 md:p-10 flex-col flex lg:flex-row gap-5 relative">
      <Filter
        className={
          "w-full lg:w-[30%] bg-neutral-50 p-10 rounded-lg border  border-stone-200 lg:sticky top-[5.5rem] h-max"
        }
      />
      <Products
        className={
          "w-full lg:w-[70%] bg-neutral-50 p-10 rounded-lg border border-stone-200 "
        }
      />
    </div>
  );
}
