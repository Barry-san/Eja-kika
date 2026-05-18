import { useRevealAnimation, useTextAnimations } from "../../animation";
import { ScrollingTicker } from "../../components/ui/PageHeader";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { VideoSecton } from "./components/video-section";

export default function HomePage() {
  useRevealAnimation();
  useTextAnimations();
  return (
    <div>
      <Hero />
      <ScrollingTicker />
      <About />
      <VideoSecton />
    </div>
  );
}
