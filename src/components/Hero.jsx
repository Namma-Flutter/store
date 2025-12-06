import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const colorArray = [
  "oklch(64.8% 0.2 131.684)",
  "oklch(63.7% 0.237 25.331)",
  "oklch(58.8% 0.158 241.966)",
  "oklch(54.1% 0.281 293.009)",
  "oklch(51.4% 0.222 16.935)",
];

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

const title = "NAMMA FLUTTER STORE";
const delayDuration = 0.2;

export default function Hero() {
  return (
    <div className="my-20 mt-30 md:m-0 md:h-[93vh] grid relative place-items-center  overflow-x-clip">
      <Background />
      {/* <LineSvg /> */}
      <div className=" mx-auto  p-10 md:p-0 flex-col flex items-center justify-center w-auto relative ">
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

const Content = () => {
  return (
    <>
      <div className="flex items-center justify-center  mb-3 pointer-events-none select-none">
        <motion.img
          initial={{ x: 50, opacity: 0, rotate: -20 }}
          animate={{ x: 0, opacity: 1, rotate: -15 }}
          transition={{ delay: delayDuration + 0.2 }}
          src="/Cap.png"
          alt="Cap"
          className="w-20 sm:w-28 drop-shadow-lg mt-12"
        />
        <Logo />
        <motion.img
          initial={{ x: -50, opacity: 0, rotate: 20 }}
          animate={{ x: 0, opacity: 1, rotate: 15 }}
          transition={{ delay: delayDuration + 0.3 }}
          src="/Glasses.png"
          alt="Glasses"
          className="w-20 sm:w-28 drop-shadow-lg mt-12"
        />
      </div>
      <NewLabel />
      <Title />
      <Desc />
      <Buttons />
    </>
  );
};

const Logo = () => {
  return (
    <motion.img
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.5, rotate: -90 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1, rotate: 0 }}
      transition={{ delay: delayDuration }}
      src="/logo.png"
      alt="Logo"
      className="drop-shadow-[0_0_15px_rgba(255,255,255,1)] size-20 sm:size-40"
    />
  );
};

const Title = () => {
  const parts = title.split(" ");
  const firstWord = parts[0];
  const secondLineWords = parts.slice(1);

  // Create an array of characters with word metadata for the second line
  const secondLineChars = [];
  secondLineWords.forEach((word, wordIndex) => {
    word.split("").forEach((char) => {
      secondLineChars.push({ char, word });
    });
    if (wordIndex < secondLineWords.length - 1) {
      secondLineChars.push({ char: " ", word: null });
    }
  });

  return (
    <motion.h1
      variants={sentance}
      initial="hidden"
      animate="visible"
      className="text-6xl sm:text-7xl lg:text-8xl leading-[0.85] font-black tracking-tighter text-center"
    >
      <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block pr-3 text-[1.2em]">
        {firstWord.split("").map((char, index) => {
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
              color: "transparent",
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
      </span>
      <br />
      <span className="inline-block text-black">
        {secondLineChars.map((item, index) => {
          if (item.char === " ") {
            return (
              <span key={index} className="inline-block w-4 sm:w-8">
                &nbsp;
              </span>
            );
          }
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

          const isStore = item.word === "STORE";

          return (
            <motion.span
              key={item.char + "-" + index}
              variants={letterVariant}
              className="inline-block cursor-default"
              whileHover={
                isStore
                  ? {
                      color: "#3b82f6",
                    }
                  : {}
              }
            >
              {item.char}
            </motion.span>
          );
        })}
      </span>
    </motion.h1>
  );
};

const Desc = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: delayDuration + 0.2 }}
      className="mx-auto mt-2 max-w-md text-center text-sm font-medium leading-relaxed text-gray-500 sm:text-xs"
    >
      A platform for discovering and sharing design styles, this space empowers
      creatives to explore unique aesthetics, curate personal collections, and
      connect with a community of like-minded designers.
    </motion.p>
  );
};

const Buttons = () => {
  return (
    <div className="flex items-center mt-4 gap-4 justify-center">
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
        className="font-semibold rounded bg-black border-2 border-black px-6 py-2 text-sm text-white cursor-pointer"
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
        className="cursor-pointer font-semibold rounded bg-white/60 backdrop-blur-2xl border-black border-2 px-6 py-2 text-sm flex items-center gap-1"
      >
        Explore{" "}
        <span>
          <ArrowRight className="inline size-4" />
        </span>
      </motion.button>
    </div>
  );
};

const NewLabel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delayDuration + 0.1 }}
      className="mb-4 relative overflow-hidden flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 pl-1 pr-2 py-1 text-xs font-medium shadow-sm backdrop-blur-md"
    >
      <motion.div
        className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 z-10"
        animate={{ x: "600%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
      />
      <span className="flex items-center justify-center rounded-full bg-blue-500 px-2.5 py-0.5 text-[10px] font-bold text-white z-0">
        NEW
      </span>
      <span className="text-gray-600 z-0 text-[1.1em]">
        Community Store is now live!
      </span>
      <ArrowRight className="size-3 text-gray-400 z-0" />
    </motion.div>
  );
};

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-200 blur-3xl mix-blend-multiply opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-20 right-0 h-80 w-80 rounded-full bg-purple-200 blur-3xl mix-blend-multiply opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-pink-200 blur-3xl mix-blend-multiply opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotation: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-yellow-100 blur-3xl mix-blend-multiply opacity-20"
      />
    </div>
  );
};
