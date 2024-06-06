import React from "react";
import Navbar from "@/Components/Common/Navbar";
import HeroSection from "@/Components/Ui/HeroSection";
import WeeklySpeical from "@/Components/Ui/WeeklySpeical";
import Bestforyou from "@/Components/Ui/Bestforyou";
import WeeklyFilter from "@/Components/Ui/WeeklyFilter";

const HomePage = () => {
  return (
    <div>
     <Navbar />
     <HeroSection />
     <WeeklySpeical />
     <Bestforyou />
     <WeeklyFilter />
    </div>
  );
};

export default HomePage;
