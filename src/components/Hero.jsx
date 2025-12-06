import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

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
      delay: 0.5,
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
    <div className="sm:h-[93vh] w-full min-h-[60vh] mb-10 md:mb-0 md:-mt-10 grid relative place-items-center overflow-x-clip">
      <Background />
      {/* <LineSvg /> */}
      <div className=" mx-auto  p-4 md:p-0 flex-col flex items-center justify-center w-auto relative ">
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
          className="w-16 sm:w-28  mt-12"
        />
        <Logo />
        <motion.img
          initial={{ x: -50, opacity: 0, rotate: 20 }}
          animate={{ x: 0, opacity: 1, rotate: 15 }}
          transition={{ delay: delayDuration + 0.3 }}
          src="/Glasses.png"
          alt="Glasses"
          className="w-16 sm:w-28  mt-12"
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
      className="drop-shadow-[0_0_15px_rgba(255,255,255,1)] size-30 sm:size-40"
    />
  );
};

const interpolateColor = (start, end, factor) => {
  const result = start.map((s, i) => Math.round(s + factor * (end[i] - s)));
  return `rgb(${result.join(",")})`;
};

const startColor = [59, 130, 246]; // blue-500
const endColor = [34, 211, 238]; // cyan-400

const Title = () => {
  const parts = title.split(" ");
  const firstWord = parts[0];
  const secondLineWords = parts.slice(1);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationCompleted(true);
    }, 2000); // Wait for animation to finish
    return () => clearTimeout(timeout);
  }, []);

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
      className="text-5xl sm:text-7xl lg:text-8xl leading-[0.85] font-black tracking-tighter text-center"
    >
      <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block pr-3 text-[1.2em]">
        {animationCompleted
          ? firstWord
          : firstWord.split("").map((char, index) => {
              const randomColor =
                colorArray[Math.floor(Math.random() * colorArray.length)];

              const targetColor = interpolateColor(
                startColor,
                endColor,
                index / (firstWord.length - 1)
              );

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
                  color: targetColor,
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
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden flex items-center justify-center bg-white">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-blue-100/90 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-70" />
      <div className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-cyan-100/90 rounded-full blur-[80px] pointer-events-none mix-blend-multiply opacity-60" />
    </div>
  );
};
