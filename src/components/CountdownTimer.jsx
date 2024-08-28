// src/components/CountdownTimer.js
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = dayjs();
    const endDate = dayjs(targetDate);
    const duration = endDate.diff(now);

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-white whitespace-nowrap mb-5">
        BRIDGE OPENS IN:
      </h1>
      <h1 className="text-4xl md:text-7xl font-bold bg-[rgba(0,0,0,0.5)] text-white rounded-full shadow-lg py-7 px-12 border flex items-center gap-5 whitespace-nowrap">
        {timeLeft.seconds <= 0 ? (
          <>Let's Go!</>
        ) : (
          <>
            {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
            {timeLeft.hours > 0 && <span>{timeLeft.hours}h </span>}
            {timeLeft.minutes > 0 || timeLeft.hours > 0 ? (
              <>
                {timeLeft.minutes}m : {timeLeft.seconds}s
              </>
            ) : (
              <>{timeLeft.seconds}s</>
            )}
          </>
        )}
      </h1>
    </div>
  );
};

export default CountdownTimer;
