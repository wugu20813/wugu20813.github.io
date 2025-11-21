import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Diary from "@/components/Diary";
import Videos from "@/components/Videos";
import Portfolio from "@/components/Portfolio";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Diary />
        <Videos />
        <Portfolio />
        <Guestbook />
      </main>
      <Footer />
    </div>
  );
}
