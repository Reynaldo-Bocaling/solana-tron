import CountdownTimer from "./components/CountdownTimer";
import Socials from "./components/Socials";
import VantaHaloEffect from "./components/VantaBackground";

const App = () => {
  // target date or time
  const targetDate = "2024-08-28T22:00:00";

  return (
    <div className="relative flex flex-col md:flex-row h-screen">
      <div className="w-full  h-[39%] md:w-1/2 md:h-full relative flex flex-col items-center justify-start gap-3 md:gap-7 pb-7 pt-5 md:pb-0 md:pt-12 shadow-md md:shadow-none shadow-red-500">
        <Socials based="Tron" />
        <img
          src="/img/tron_logo.png"
          className="rounded-full w-[10rem] h-[10rem] md:w-[22rem] md:h-[22rem]  p-3  blurd-effect border-2 border-red-600 relative  z-[99]"
          alt=""
        />

        <div className="  w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]">
          {}
        </div>
      </div>

      <div className="w-full h-[39%] md:w-1/2 md:h-full relative flex flex-col items-center justify-start gap-3 md:gap-7 pb-4 pt-5 md:pb-0 md:pt-12 shadow-md md:shadow-none shadow-red-500">
        <Socials based="Solana" />
        <img
          src="/img/solana_logo.png"
          className="rounded-full w-[10rem] h-[10rem] md:w-[22rem] md:h-[22rem] 0 -mt-3 p-1  blurd-effect border-2 border-orange-600 z-[99]"
          alt=""
        />

        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]">
          {}
        </div>
      </div>
      <div className="h-[22%] relative  md:h-auto md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2 z-[99]">
        <CountdownTimer targetDate={targetDate} />
      </div>

      {/* <AnimateBackground /> */}
      <VantaHaloEffect />
    </div>
  );
};

export default App;
