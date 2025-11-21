import { Send, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

const mockComments: Comment[] = [
  {
    id: 1,
    name: "張小明",
    message: "你的作品很棒！期待看到更多精彩內容 👍",
    timestamp: "2025-01-15 14:30",
  },
  {
    id: 2,
    name: "李美華",
    message: "網站設計得很有科技感，學到了很多東西",
    timestamp: "2025-01-14 09:15",
  },
  {
    id: 3,
    name: "王大偉",
    message: "日記寫得很棒，能感受到你的熱情與用心",
    timestamp: "2025-01-13 18:45",
  },
];

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState(mockComments);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "請填寫所有欄位",
        description: "名字和留言內容都是必填的",
        variant: "destructive",
      });
      return;
    }

    const newComment: Comment = {
      id: comments.length + 1,
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");

    toast({
      title: "留言成功！",
      description: "感謝你的留言，我會盡快回覆",
    });

    console.log("New comment added:", newComment);
  };

  return (
    <section id="guestbook" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          data-testid="text-guestbook-title"
        >
          留言板
        </h2>

        <Card className="p-6 md:p-8 mb-12 backdrop-blur-sm bg-card/50">
          <h3 className="text-xl font-medium mb-6">留下你的想法</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="你的名字"
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="input-guestbook-name"
                className="bg-background"
              />
            </div>
            <div>
              <Textarea
                placeholder="寫下你的留言..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                data-testid="input-guestbook-message"
                className="bg-background resize-none"
              />
            </div>
            <Button
              type="submit"
              data-testid="button-submit-comment"
              className="w-full md:w-auto"
            >
              <Send className="w-4 h-4 mr-2" />
              送出留言
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <h3 className="text-xl font-medium mb-6">
            所有留言 ({comments.length})
          </h3>
          {comments.map((comment) => (
            <Card
              key={comment.id}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-comment-${comment.id}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-medium"
                      data-testid={`text-comment-name-${comment.id}`}
                    >
                      {comment.name}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p
                    className="text-foreground/80 leading-relaxed"
                    data-testid={`text-comment-message-${comment.id}`}
                  >
                    {comment.message}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
