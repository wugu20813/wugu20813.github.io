import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Mail, label: "Email", url: "mailto:your.email@example.com" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">
              Built with{" "}
            </span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-muted-foreground">
              by 你的名字
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                onClick={() => {
                  console.log(`Opening ${link.label}`);
                  if (link.url.startsWith("mailto:")) {
                    window.location.href = link.url;
                  }
                }}
                data-testid={`button-social-${link.label.toLowerCase()}`}
                className="rounded-full"
              >
                <link.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={scrollToTop}
            data-testid="button-back-to-top"
          >
            返回頂部 ↑
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {currentYear} 你的名字. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
