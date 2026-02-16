import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Leadership from "../components/Leadership";
import Timeline from "../components/Timeline";
import ImpactValues from "../components/ImpactValues";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Profile />
      <Leadership />
      <Timeline />
      <ImpactValues />
      <BlogSection />
    </>
  );
};

export default Home;
