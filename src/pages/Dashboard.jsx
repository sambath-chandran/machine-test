import React from "react";
import Header from "../components/Header";
import WelcomeBanner from "../components/WelcomeBanner";
import SliderComp from "../components/Slider";

function Dashboard() {
  return (
    <>
      <Header />
      <br />
      <WelcomeBanner />
      <br />
      <SliderComp />
    </>
  );
}

export default Dashboard;
