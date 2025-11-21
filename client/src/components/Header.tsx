import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "首頁", id: "hero" },
    { label: "關於我", id: "about" },
    { label: "日記", id: "diary" },
    { label: "影片", id: "videos" },
    { label: "作品集", id: "portfolio" },
    { label: "留言板", id: "guestbook" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-3 py-1 rounded-md"
            data-testid="button-logo"
          >
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Tech Portfolio
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="justify-start"
                data-testid={`button-mobile-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
