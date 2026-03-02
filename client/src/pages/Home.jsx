import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Leadership from "../components/Leadership";
import Timeline from "../components/Timeline";
import ImpactValues from "../components/ImpactValues";
import BlogSection from "../components/BlogSection";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Visionary Leadership & Social Impact"
        description="Explore the journey, visions, and impact of Vijay Reddy Vennam, a dedicated leader shaping the future of South India through innovation and excellence."
        keywords="Vijay Reddy Vennam, Leadership, Social Impact, South India, Innovation, Governance"
      />
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
