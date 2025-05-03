import React from "react";
import Header from "../components/Header";
import WelcomeBanner from "../components/WelcomeBanner";
import SliderComp from "../components/Slider";
import ContriesList from "../components/ContriesList";

function Dashboard() {
  return (
    <>
      <Header />
      <br />
      <WelcomeBanner />
      <br />
      <SliderComp />
      <br />
      <ContriesList />
    </>
  );
}

export default Dashboard;
