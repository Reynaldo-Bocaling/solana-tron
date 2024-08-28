import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./components/CountdownTimer";
import { solanaImages, tronImages } from "./constant";
import Background from "./components/Background";
import Test from "./components/Test";
import Socials from "./components/Socials";

const App = () => {
  const [currentTronIndex, setCurrentTronIndex] = useState(0);
  const [currentSolanaIndex, setCurrentSolanaIndex] = useState(0);

  useEffect(() => {
    const tronInterval = setInterval(() => {
      setCurrentTronIndex((prevIndex) => (prevIndex + 1) % tronImages.length);
    }, 3500);

    const solanaInterval = setInterval(() => {
      setCurrentSolanaIndex(
        (prevIndex) => (prevIndex + 1) % solanaImages.length
      );
    }, 3500);

    return () => {
      clearInterval(tronInterval);
      clearInterval(solanaInterval);
    };
  }, []);

  // target date or time
  const targetDate = "2024-08-28T22:00:00";

  return (
    <div className="relative flex flex-col md:flex-row h-screen md:h-screen overflow-hidden bg-black">
      <div className="w-full  h-[39%] md:w-1/2 md:h-full relative flex flex-col items-center justify-start gap-3 md:gap-7 pb-7 pt-9 md:pb-0 md:pt-12">
        <Socials based="Tron" />
        <img
          src="/img/tron_logo.png"
          className="rounded-full w-[8.5rem] h-[8.5rem] md:w-[22rem] md:h-[22rem]  p-3  bg-[rgba(12,7,7,0.5)] border-2 border-red-600 relative  z-[99]"
          alt=""
        />
        <motion.img
          key={currentTronIndex}
          src={tronImages[currentTronIndex]}
          alt={`Tron Slide ${currentTronIndex + 1}`}
          className="object-cover h-full w-full absolute inset-0"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="  w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]">
          {}
        </div>
      </div>

      {/* line */}
      <div className="w-full h-[2px]  md:flex md:h-[55vh] md:mt-14 md:w-[2px] bg-red-600">
        {}
      </div>
      <div className="w-full h-[39%] md:w-1/2 md:h-full relative flex flex-col items-center justify-start gap-3 md:gap-7 pb-4 pt-9 md:pb-0 md:pt-12">
        <Socials based="Solana" />
        <img
          src="/img/solana_logo.png"
          className="rounded-full w-[8.5rem] h-[8.5rem] md:w-[22rem] md:h-[22rem] 0 -mt-3 p-1  bg-[rgba(12,7,7,0.5)] border-2 border-orange-600 z-[99]"
          alt=""
        />
        <motion.img
          key={currentSolanaIndex}
          src={solanaImages[currentSolanaIndex]}
          alt={`Solana Slide ${currentSolanaIndex + 1}`}
          className="object-cover h-full w-full absolute inset-0"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]">
          {}
        </div>
      </div>
      {/* line */}
      <div className="w-full h-[2px]  md:hidden  bg-red-600">{}</div>
      <div className="h-[22%] relative  md:h-auto md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2 z-[99]">
        <CountdownTimer targetDate={targetDate} />
      </div>

      <Test />
    </div>
  );
};

export default App;
