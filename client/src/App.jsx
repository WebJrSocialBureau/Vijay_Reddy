import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (to be created)
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import BlogEditor from "./pages/BlogEditor";

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
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0a192f",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Outfit, sans-serif",
          },
          success: {
            iconTheme: {
              primary: "#ff4d4d",
              secondary: "#fff",
            },
          },
        }}
      />
      <main className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/create" element={<BlogEditor />} />
          <Route path="/admin/edit/:id" element={<BlogEditor />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
