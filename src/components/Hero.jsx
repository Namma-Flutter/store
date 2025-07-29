import { ArrowRight } from "lucide-react";
import { easeInOut, motion } from "motion/react";

const sentance = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delay: 2,
      staggerChildren: 0.04,
      default: { type: "spring" },
      opacity: { ease: "linear" },
    },
  },
};

const colorArray = [
  "oklch(64.8% 0.2 131.684)",
  "oklch(63.7% 0.237 25.331)",
  "oklch(58.8% 0.158 241.966)",
  "oklch(54.1% 0.281 293.009)",
  "oklch(51.4% 0.222 16.935)",
];

const animateProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 0.3, scale: 1.1 },
  transition: { duration: 1.3, ease: easeInOut },
};

const title = "STYLE HUB";
const delayDuration = 0.2;

export default function Hero() {
  return (
    <div className="h-[93vh] grid relative place-items-center  overflow-x-hidden">
      <LineSvg />
      <div className=" mx-auto flex-col flex items-center justify-center w-auto relative ">
        <Blobs />
        <Content />
      </div>
    </div>
  );
}

const LineSvg = () => {
  return (
    <svg
      width="647"
      height="600"
      viewBox="0 0 647 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-[-5rem] right-0 hidden lg:block"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0, filter: "blur(10px)" }}
        animate={{ pathLength: 1, opacity: 0.5, filter: "blur(2px)" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        d="M0.891053 -13.3811C449.423 -6.20799 147.901 545.07 676.577 553.525"
        stroke="url(#paint0_linear_75_2)"
        strokeWidth="18"
      />
      <defs>
        <linearGradient
          id="paint0_linear_75_2"
          x1="-0.686107"
          y1="-9.16238"
          x2="535.586"
          y2="664.913"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="oklch(79.5% 0.184 86.047)" />
          <stop offset="0.217598" stopColor="oklch(54.1% 0.281 293.009)" />
          <stop offset="0.478654" stopColor="oklch(58.8% 0.158 241.966)" />
          <stop offset="0.73971" stopColor="oklch(58.6% 0.253 17.585)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Blobs = () => {
  return (
    <>
      <motion.div
        {...animateProps}
        className="blob-1 bg-purple-300 size-40 sm:size-80 rounded-full absolute mix-blend-multiply left-[-2rem]  opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-purple-300 size-40 sm:size-80 rounded-full absolute mix-blend-multiply right-[-1.5rem]  opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-linear-to-b from-green-300 to-amber-300 size-40 sm:size-80  rounded-full mix-blend-multiply  absolute top-[-2rem]   opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-yellow-300/50 size-40 sm:size-80  rounded-full mix-blend-multiply  absolute bottom-[-4rem]    blur-2xl"
      ></motion.div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="flex gap-[3rem] items-baseline">
        <Left />
        <Logo />
        <Right />
      </div>
      <Title />
      <Desc />
      <Buttons />
    </>
  );
};

const Left = () => {
  return (
    <div className="space-y-[2rem] sm:mb-2">
      <motion.img
        initial={{
          x: 80,
          y: "50%",
          rotate: -20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          y: "0",
          rotate: 0,
          opacity: 1,
        }}
        transition={{ delay: delayDuration + 0.2 }}
        src="/3.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[-20deg]"
      />
      <motion.img
        initial={{
          x: 80,
          y: "50%",
          rotate: -20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          y: "0",
          rotate: 0,
          opacity: 1,
        }}
        transition={{ delay: delayDuration + 0.4 }}
        src="/2.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[-20deg]"
      />
    </div>
  );
};

const Logo = () => {
  return (
    <motion.img
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.5, rotate: -90 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1, rotate: 0 }}
      transition={{ delay: delayDuration }}
      src="/logo.svg"
      alt="Logo"
      className="drop-shadow-black size-30 sm:size-40"
    />
  );
};

const Right = () => {
  return (
    <div className="space-y-[2rem] sm:mb-2">
      <motion.img
        initial={{ x: -80, y: "100%", rotate: -20, opacity: 0 }}
        animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
        transition={{ delay: delayDuration + 0.3 }}
        src="/4.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[20deg]"
      />
      <motion.img
        initial={{ x: -80, y: "100%", rotate: -20, opacity: 0 }}
        animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
        transition={{ delay: delayDuration + 0.5 }}
        src="/1.jpg"
        alt=""
        className="w-10 sm:w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[20deg]"
      />
    </div>
  );
};

const Title = () => {
  return (
    <motion.h1
      variants={sentance}
      initial="hidden"
      animate="visible"
      className="text-[4.5rem] sm:text-[8rem] -mt-8 sm:-mt-0 lg:text-[10rem] leading-[10rem] font-black tracking-tighter"
    >
      {title.split("").map((char, index) => {
        const randomColor =
          colorArray[Math.floor(Math.random() * colorArray.length)];

        const letterVariant = {
          hidden: {
            opacity: 0,
            y: 40,
            transform: "skewX(-20deg)",
            filter: "blur(10px)",
            color: randomColor,
          },
          visible: {
            filter: "blur(0px)",
            transform: "skewX(0deg)",
            opacity: 1,
            color: "oklch(00.0% 0.0 0)",
            y: 0,
            transition: {
              duration: 0.8,
              default: { type: "spring" },
            },
          },
        };

        return (
          <motion.span
            key={char + "-" + index}
            variants={letterVariant}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

const Desc = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: delayDuration + 0.2 }}
      className="text-center text-balance max-w-sm -mt-10 sm:-mt-0 sm:max-w-xl md:max-w-[50rem] text-[9px] sm:text-xs  lg:text-sm opacity-80 font-medium lg:mt-1"
    >
      A platform for discovering and sharing design styles, this space empowers
      creatives to explore unique aesthetics, curate personal collections, and
      connect with a community of like-minded designers. Whether you&apos;re
      seeking inspiration, showcasing your work, or simply browsing through
      trends, it offers a visually rich experience tailored to your creative
      vision. From minimalist interfaces to bold experimental layouts, this is
      where design meets expression and collaboration.
    </motion.p>
  );
};

const Buttons = () => {
  return (
    <div className="flex items-center mt-4 gap-5">
      <motion.button
        initial={{
          opacity: 0,
          x: -20,
          filter: "blur(2px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        transition={{ delay: delayDuration + 0.7 }}
        className="font-semibold rounded bg-black border-2 border-black px-4 py-2 text-white cursor-pointer"
      >
        Get Started
      </motion.button>

      <motion.button
        initial={{
          opacity: 0,
          x: 20,
          filter: "blur(2px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        transition={{ delay: delayDuration + 0.8 }}
        className="cursor-pointer font-semibold rounded bg-white/60 backdrop-blur-2xl  border-black border-2  px-4 py-2 "
      >
        Explore{" "}
        <span>
          <ArrowRight className="inline" />
        </span>
      </motion.button>
    </div>
  );
};
