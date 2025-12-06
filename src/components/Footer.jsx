import { motion } from "motion/react";

export default function Footer() {
  const isHomePage = window.location.pathname === "/";

  return (
    <div className="flex-1 bg-linear-180 mt-36 from-black to-black/80 p-10 overflow-clip text-white sm:pt-40 relative">
      <motion.h1
        initial={
          isHomePage && {
            opacity: 0,
            filter: "blur(10px)",
          }
        }
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="absolute hidden sm:block tracking-tighter text-[12rem] h-full my-auto sm:tracking-[-20px] text-[#262626] font-black  top-0 left-[2rem]"
      >
        STYLE HUB
      </motion.h1>

      <div className="h-full items-baseline sm:items-end flex sm:gap-0 gap-10 sm:flex-row flex-col">
        <div className="flex items-center gap-3 w-max  sm:flex-1 ">
          <motion.div
            initial={
              isHomePage && {
                opacity: 0,
                rotate: -180,
                filter: "blur(10px)",
              }
            }
            whileInView={{
              opacity: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white w-max p-1 rounded"
          >
            <img alt="logo" src="/logo.png" className="size-8 " />
          </motion.div>
          <motion.h1
            initial={
              isHomePage && {
                opacity: 0,
                filter: "blur(10px)",
              }
            }
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[24px] font-bold leading-[.8] tracking-tighter"
          >
            STYLE
            <br /> HUB
          </motion.h1>
        </div>
        <motion.div
          initial={isHomePage && { x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-10 z-10 w-auto "
        >
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
        </motion.div>
      </div>
    </div>
  );
}

// const Line = () => {
//   return (
//     <svg
//       width="40"
//       height="40"
//       viewBox="0 0 40 40"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute size-70 left-0 top-0 scale-150 rotate-180 blur-xl"
//     >
//       <path
//         d="M40 0H26.6666V13.3334H13.3334V26.6666H0V40H40V0Z"
//         fill="url(#paint0_linear_83_5)"
//       />
//       <defs>
//         <linearGradient
//           id="paint0_linear_83_5"
//           x1="20"
//           y1="0"
//           x2="20"
//           y2="40"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop />
//           <stop offset="1" stopColor="#333333" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };
