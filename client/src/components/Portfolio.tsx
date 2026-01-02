import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { works } from "@/data/content";

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
          {works.map((project) => (
            <Link key={project.id} href={`/work/${project.slug}`}>
              <Card
                className="overflow-hidden hover-elevate transition-all group cursor-pointer"
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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.links.demo, '_blank');
                        }}
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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.links.github, '_blank');
                        }}
                        data-testid={`button-github-${project.id}`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        程式碼
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
