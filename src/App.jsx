import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import { motion } from "motion/react";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative">
        {/* <LiveSvg /> */}
        <div className="p-4 bg-white">
          <NewArrivals />
        </div>
      </div>
    </>
  );
}

// const LiveSvg = () => {
//   return (
//     <svg
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-full h-full top-[-22rem] scale-101 absolute"
//     >
//       <motion.path
//         initial={{
//           pathLength: 1,
//           pathOffset: 1,
//           opacity: 0.5,
//           filter: "blur(2px)",
//         }}
//         animate={{
//           pathLength: 1,
//           pathOffset: 0,
//           opacity: 0.5,
//           filter: "blur(2px)",
//         }}
//         transition={{ duration: 2.2, ease: "easeInOut" }}
//         d="M3 9C639.144 162.049 154.97 650.204 1500 307.595"
//         stroke="url(#paint0_linear_81_3)"
//         strokeWidth="18"
//       />
//       <defs>
//         <linearGradient
//           id="paint0_linear_81_3"
//           x1="3"
//           y1="9"
//           x2="1486.5"
//           y2="316.5"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#FF0000" />
//           <stop offset="0.25" stopColor="#0000FF" />
//           <stop offset="0.5" stopColor="#EE82EE" />
//           <stop offset="0.75" stopColor="#008000" />
//           <stop offset="1" stopColor="#FFC0CB" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// };

export default App;
