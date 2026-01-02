import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { videos } from "@/data/content";

export default function Videos() {
  const [playingId, setPlayingId] = useState<string | null>(null);

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
          {videos.map((video) => (
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
