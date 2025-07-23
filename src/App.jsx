import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";
import { motion } from "motion/react";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <motion.div
        initial={{ backgroundColor: "#f8fafc00" }}
        whileInView={{
          backgroundColor: "#f8fafcff",
        }}
        viewport={{ amount: 0.3, once: false, margin: "0px 0px -50px 0px" }}
        className=" mx-auto p-4 py-20"
      >
        <NewArrivals />
      </motion.div>
      <BestSellers />
      <Footer />
    </>
  );
}

export default App;
