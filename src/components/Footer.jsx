import IconColor from "../utils/IconColor";

export default function Footer() {
  return (
    <div className="bg-linear-180 mt-36 from-black to-black/80 p-10  text-white pt-40 relative">
      <div className="h-full items-end flex">
        <div className="flex items-center gap-3 w-max flex-1 ">
          <div className="bg-white w-max p-1">
            <img alt="logo" src="/logo.svg" className="size-8 " />
          </div>
          <h1 className="text-[24px] font-bold leading-[.8] tracking-tighter">
            STYLE
            <br /> HUB
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <div className="">
            <h4 className="uppercase font-medium">Shop</h4>
            <ul className="space-y-[.3rem] mt-2 text-xs opacity-60">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Catalog</li>
            </ul>
          </div>
          <div className="">
            <h4 className="uppercase font-medium">Site</h4>
            <ul className="space-y-[.3rem] mt-2 text-xs opacity-60">
              <li>About Us</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="">
            <h4 className="uppercase font-medium">Socials</h4>
            <ul className="space-y-[.3rem] mt-2 text-xs opacity-60">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
