import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@assets/generated_images/Student_profile_portrait_photo_d6755280.png";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "學生 · 創作者 · 科技愛好者";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            <img
              src={profileImg}
              alt="Profile"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-2xl"
              data-testid="img-profile"
            />
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          data-testid="text-hero-name"
        >
          <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            你的名字
          </span>
        </h1>

        <div className="h-8 mb-8">
          <p
            className="text-xl md:text-2xl text-muted-foreground font-mono"
            data-testid="text-hero-subtitle"
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          歡迎來到我的數位空間，在這裡我分享我的學習旅程、創作作品與生活點滴
        </p>

        <button
          onClick={scrollToAbout}
          className="group animate-bounce hover:animate-none"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-8 h-8 text-primary group-hover:text-chart-2 transition-colors" />
        </button>
      </div>
    </section>
  );
}
