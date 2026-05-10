import { ScrollingTicker } from "../../components/ui/PageHeader";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { VideoSecton } from "./components/video-section";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ScrollingTicker />
      <About />
      <VideoSecton />
    </div>
  );
}
