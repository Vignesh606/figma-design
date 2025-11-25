import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedStartups } from "./components/FeaturedStartups";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { WhyJoinECell } from "./components/WhyJoinECell";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedStartups />
        <UpcomingEvents />
        <WhyJoinECell />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
