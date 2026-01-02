import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { diaries } from "@/data/content";

export default function Diary() {

  return (
    <section id="diary" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          data-testid="text-diary-title"
        >
          我的日記
        </h2>

        <div className="space-y-6">
          {diaries.map((entry) => (
            <Link key={entry.id} href={`/diary/${entry.slug}`}>
              <Card
                className="p-6 backdrop-blur-sm bg-background/50 border-border hover-elevate transition-all cursor-pointer"
                data-testid={`card-diary-${entry.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-mono text-muted-foreground">
                        {entry.date}
                      </span>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <h3
                      className="text-2xl font-medium mb-3"
                      data-testid={`text-diary-title-${entry.id}`}
                    >
                      {entry.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {entry.preview}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      data-testid={`button-diary-read-${entry.id}`}
                      className="text-primary"
                    >
                      閱讀更多
                    </Button>
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
