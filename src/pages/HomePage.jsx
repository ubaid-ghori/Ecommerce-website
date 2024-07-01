import React from "react";
import Navbar from "@/Components/Common/Navbar";
import HeroSection from "@/Components/Ui/HeroSection";
import WeeklySpeical from "@/Components/Ui/WeeklySpeical";
import Bestforyou from "@/Components/Ui/Bestforyou";
import WeeklyFilter from "@/Components/Ui/WeeklyFilter";
import Timer from "@/Components/Ui/Timer";
import Blog from "@/Components/Ui/Blog";
import Footer from "@/Components/Ui/Footer";

const HomePage = () => {
  return (
    <div>
     <Navbar />
     <HeroSection />
     <WeeklySpeical />
     <Bestforyou />
     <WeeklyFilter />
     <Timer />
     <Blog />
     <Footer />
    </div>
  );
};

export default HomePage;
