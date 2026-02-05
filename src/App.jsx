import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Leadership from "./components/Leadership";
import Timeline from "./components/Timeline";
import ImpactValues from "./components/ImpactValues";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="app-container">
      <Navbar />
      <Hero />
      <Profile />
      <Leadership />
      <Timeline />
      <ImpactValues />
      <Footer />
    </main>
  );
}

export default App;
