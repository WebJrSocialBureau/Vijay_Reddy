import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position to top
    window.scrollTo(0, 0);

    // Also find and reset Lenis scroll if available
    // Lenis often uses the window scroll, but sometimes it needs a specific .scrollTo call
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
