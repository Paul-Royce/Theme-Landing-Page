import Header from "./components/Header";
import Developer from "./components/Developer";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [fyloLogo, setFyloLogo] = useState(false);
  
  return (
    <div className="App bg-fylo lg:h-full text-white">
      {fyloLogo && <AnimatePresence onExitComplete={true}>
        <Developer closeDeveloper={setFyloLogo} />
      </AnimatePresence>}
      <div className=" w-11/12 lg:w-11/12 h-full m-auto bg-fylo">
        <Header toggleFylo={setFyloLogo} />
        <main>
          <div className="flex flex-col items-center justify-center bg-fylo">
            <Hero />
            <HeroTwo />
            <Testimonials />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
