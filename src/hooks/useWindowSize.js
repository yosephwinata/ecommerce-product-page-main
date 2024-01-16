import { useState, useEffect } from "react";
import { DESKTOP_BREAKPOINT } from "../utils/constants";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isDesktop: window.innerWidth >= DESKTOP_BREAKPOINT,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the window size on mount

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return windowSize;
};

export default useWindowSize;
