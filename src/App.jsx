import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className=" mx-auto p-4 py-20 bg-slate-50">
        <NewArrivals />
      </div>
      <BestSellers />
      <Footer />
    </>
  );
}

export default App;
