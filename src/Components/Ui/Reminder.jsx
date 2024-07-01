import React, { useState, useEffect } from "react";
// import './Reminder.css';
import Button from "../Buttons";
function Reminder() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const newDeal = "1 August 2024";
    const countdownInterval = setInterval(() => {
      const newYearsDate = new Date(newDeal);
      const currentDate = new Date();
      const totalSeconds = (newYearsDate - currentDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="mt-2">
      <h2 className="text-white font-semibold ">HURRY UP! OFFER END IN:</h2>
      <div className="flex flex-wrap gap-5  text-white text-2xl items-center pt-2">
        <p id="days" className="">
          Days{":"}
          <span className="text-white px-1  font-sans ">
            {timeRemaining.days}
          </span>
        </p>
        <p id="hours">
          hours{":"}
          <span className="text-white px-1 font-sans ">
            {timeRemaining.hours}
          </span>
        </p>
        <p id="minutes">
          Minutes{":"}
          <span className="text-white px-1 font-sans ">
            {timeRemaining.minutes}
          </span>
        </p>
        <p id="seconds">
          Seconds{":"}
          <span className="text-white px-1 font-sans ">
            {timeRemaining.seconds}
          </span>
        </p>
      </div>
      <div className="flex gap-6 items-center pt-12">
        <Button
          className={
            "!bg-white !text-[#96AE00] hover:!bg-transparent hover:!text-white hover:!border-2 "
          }
        >
          Shop Now
        </Button>
        <Button
          className={
            "!bg-transparent !border-2 hover:!bg-white hover:!text-[#96AE00] "
          }
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Reminder;
