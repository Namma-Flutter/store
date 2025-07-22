import { ArrowRight } from "lucide-react";
import { easeInOut, motion } from "motion/react";

export default function Hero() {
  return (
    <div className="container mx-auto flex-col flex items-center justify-center mt-34 w-max relative ">
      <Blobs />
      <Content />
    </div>
  );
}

const animateProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 0.4, scale: 1.1 },
  transition: { duration: 1.5, ease: easeInOut },
};

const Blobs = () => {
  return (
    <>
      <motion.div
        {...animateProps}
        className="blob-1 bg-purple-300 size-80 rounded-full absolute mix-blend-multiply left-[-2rem]  opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-purple-300 size-80 rounded-full absolute mix-blend-multiply right-[-1.5rem]  opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-linear-to-b from-green-300 to-amber-300 size-80  rounded-full mix-blend-multiply  absolute top-[-2rem]   opacity-50 blur-2xl"
      ></motion.div>
      <motion.div
        {...animateProps}
        className="blob-1 bg-yellow-300/50 size-80  rounded-full mix-blend-multiply  absolute bottom-[-4rem]    blur-2xl"
      ></motion.div>
    </>
  );
};

const Content = () => {
  return (
    <>
      <div className="flex gap-[3rem] items-baseline">
        <div className="space-y-[2rem] mb-2">
          <motion.img
            initial={{ x: 80, y: "50%", rotate: -20, opacity: 0 }}
            animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
            src="/3.jpg"
            alt=""
            className="w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[-20deg]"
          />
          <motion.img
            initial={{ x: 80, y: "50%", rotate: -20, opacity: 0 }}
            animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
            src="/2.jpg"
            alt=""
            className="w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[-20deg]"
          />
        </div>
        <img src="/logo.svg" alt="Logo" className="drop-shadow-black size-40" />
        <div className="space-y-[2rem] mb-2">
          <motion.img
            initial={{ x: -80, y: "100%", rotate: -20, opacity: 0 }}
            animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
            src="/4.jpg"
            alt=""
            className="w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[20deg]"
          />
          <motion.img
            initial={{ x: -80, y: "100%", rotate: -20, opacity: 0 }}
            animate={{ x: 0, y: "0", rotate: 0, opacity: 1 }}
            src="/1.jpg"
            alt=""
            className="w-14 rounded drop-shadow-md drop-shadow-black/20 rotate-[20deg]"
          />
        </div>
      </div>

      <h1 className="text-[10rem] leading-[10rem] font-black tracking-tighter">
        STYLE HUB
      </h1>
      <p className="text-center text-balance max-w-[50rem] text-sm opacity-80 font-medium mt-1">
        A platform for discovering and sharing design styles, this space
        empowers creatives to explore unique aesthetics, curate personal
        collections, and connect with a community of like-minded designers.
        Whether you&apos;re seeking inspiration, showcasing your work, or simply
        browsing through trends, it offers a visually rich experience tailored
        to your creative vision. From minimalist interfaces to bold experimental
        layouts, this is where design meets expression and collaboration.
      </p>
      <div className="flex items-center mt-4 gap-5">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="font-semibold rounded bg-black border-2 border-black px-4 py-2 text-white"
        >
          Get Started
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="explore-button font-semibold rounded bg-white/60 backdrop-blur-2xl border-black border-2  px-4 py-2  "
        >
          Explore{" "}
          <span>
            <ArrowRight className="inline" />
          </span>
        </motion.button>
      </div>
    </>
  );
};
