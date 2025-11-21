import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DiaryEntry {
  id: number;
  date: string;
  title: string;
  preview: string;
  content: string;
}

const mockDiaries: DiaryEntry[] = [
  {
    id: 1,
    date: "2025-01-15",
    title: "開始新的學期",
    preview: "今天是新學期的第一天，充滿了期待與挑戰。我為自己設定了許多新目標...",
    content: "今天是新學期的第一天，充滿了期待與挑戰。我為自己設定了許多新目標，希望能在這個學期有所突破。",
  },
  {
    id: 2,
    date: "2025-01-10",
    title: "完成了第一個 AI 專案",
    preview: "經過一個月的努力，我終於完成了我的第一個機器學習專案...",
    content: "經過一個月的努力，我終於完成了我的第一個機器學習專案。這個過程讓我學到了很多東西。",
  },
  {
    id: 3,
    date: "2025-01-05",
    title: "參加技術研討會心得",
    preview: "今天參加了一場關於前端開發的研討會，聽到了許多業界專家的分享...",
    content: "今天參加了一場關於前端開發的研討會，聽到了許多業界專家的分享，對未來的職涯規劃有了更清晰的方向。",
  },
];

export default function Diary() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
          {mockDiaries.map((entry) => (
            <Card
              key={entry.id}
              className="p-6 backdrop-blur-sm bg-background/50 border-border hover-elevate transition-all"
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
                    {expandedId === entry.id ? entry.content : entry.preview}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(entry.id)}
                    data-testid={`button-diary-toggle-${entry.id}`}
                    className="text-primary"
                  >
                    {expandedId === entry.id ? "收起" : "閱讀更多"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
