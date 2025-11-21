import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dashboardImg from "@assets/generated_images/Web_dashboard_project_thumbnail_d51c6c0e.png";
import mobileImg from "@assets/generated_images/Mobile_app_project_thumbnail_9f1091aa.png";
import aiImg from "@assets/generated_images/AI_project_thumbnail_59c1e701.png";
import ecommerceImg from "@assets/generated_images/E-commerce_project_thumbnail_4502335f.png";
import gameImg from "@assets/generated_images/Game_development_project_thumbnail_60e5cdc6.png";
import dataImg from "@assets/generated_images/Data_analytics_project_thumbnail_660129c1.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "智能數據儀表板",
    description: "企業級數據視覺化平台，支援即時數據分析與自訂報表功能",
    image: dashboardImg,
    tags: ["React", "D3.js", "Node.js"],
    links: { demo: "#", github: "#" },
  },
  {
    id: 2,
    title: "社交聊天應用",
    description: "即時通訊 App，支援文字、語音訊息與群組聊天",
    image: mobileImg,
    tags: ["React Native", "Firebase", "WebSocket"],
    links: { demo: "#", github: "#" },
  },
  {
    id: 3,
    title: "AI 助理機器人",
    description: "基於自然語言處理的智能助理，可協助日常任務管理",
    image: aiImg,
    tags: ["Python", "TensorFlow", "NLP"],
    links: { github: "#" },
  },
  {
    id: 4,
    title: "電子商務平台",
    description: "全功能線上購物網站，包含購物車、支付與訂單管理",
    image: ecommerceImg,
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    links: { demo: "#", github: "#" },
  },
  {
    id: 5,
    title: "2D 平台遊戲",
    description: "像素風格的平台跳躍遊戲，支援多關卡與成就系統",
    image: gameImg,
    tags: ["Unity", "C#", "Game Design"],
    links: { demo: "#" },
  },
  {
    id: 6,
    title: "數據分析工具",
    description: "數據科學專案，提供互動式圖表與統計分析功能",
    image: dataImg,
    tags: ["Python", "Pandas", "Plotly"],
    links: { github: "#" },
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          data-testid="text-portfolio-title"
        >
          作品集
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 space-y-4">
                <h3
                  className="text-xl font-medium"
                  data-testid={`text-project-title-${project.id}`}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                      data-testid={`badge-tag-${tag.toLowerCase().replace(/\./g, '').replace(/ /g, '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {project.links.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => console.log(`Opening demo for ${project.title}`)}
                      data-testid={`button-demo-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      查看專案
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => console.log(`Opening GitHub for ${project.title}`)}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      程式碼
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
