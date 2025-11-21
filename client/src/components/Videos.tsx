import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface Video {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
}

const mockVideos: Video[] = [
  {
    id: 1,
    title: "我的程式學習之旅",
    description: "分享我從零開始學習程式設計的心路歷程",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "專案展示：AI 聊天機器人",
    description: "展示我最近完成的 AI 專案功能與技術細節",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

export default function Videos() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          data-testid="text-videos-title"
        >
          影片分享
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {mockVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover-elevate transition-all"
              data-testid={`card-video-${video.id}`}
            >
              <div className="aspect-video relative bg-muted group cursor-pointer">
                {playingId === video.id ? (
                  <iframe
                    src={video.embedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    data-testid={`iframe-video-${video.id}`}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <button
                        onClick={() => setPlayingId(video.id)}
                        className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
                        data-testid={`button-play-video-${video.id}`}
                      >
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-medium mb-2"
                  data-testid={`text-video-title-${video.id}`}
                >
                  {video.title}
                </h3>
                <p className="text-muted-foreground">{video.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
