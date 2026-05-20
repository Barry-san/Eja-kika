import AOS from "aos";
import { useRoutes } from "react-router-dom";
import { useRevealAnimation, useTextAnimations } from "./animation";
import { routes } from "./routes";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AppRoutes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useRevealAnimation();
  useTextAnimations();
  return <>{useRoutes(routes)}</>;
}
