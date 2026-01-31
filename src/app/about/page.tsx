import AboutCarousel from "./components/AboutCarousel";
import AboutTimeline from "./components/AboutTimeline";
import AboutIntroduction from "./components/AboutIntroduction";
import AboutValues from "./components/AboutValues";

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* Description Section */}
      <AboutIntroduction />
      
      {/* Values Section */}
      <AboutValues />

      {/* Carousel section */}
      <AboutCarousel />

      {/* Timeline section */}
      <AboutTimeline />
    </main>
  );
}