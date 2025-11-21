import studyImg from "@assets/generated_images/Student_studying_lifestyle_photo_51a73af9.png";
import codingImg from "@assets/generated_images/Coding_workspace_lifestyle_photo_b2ca2acb.png";
import presentImg from "@assets/generated_images/Presentation_lifestyle_photo_2031f8e1.png";
import journalImg from "@assets/generated_images/Creative_journaling_lifestyle_photo_e777bdb2.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-12 text-center"
          data-testid="text-about-title"
        >
          關於我
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" data-testid="text-about-intro">
              我是一名充滿熱情的學生，對科技、設計與創新充滿興趣。我相信科技能夠改變世界，
              而每一行程式碼都是創造未來的可能性。
            </p>
            <p className="text-lg leading-relaxed">
              在這個網站上，我記錄了我的學習歷程、專案作品，以及日常生活的思考與感悟。
              我喜歡探索新技術、解決問題，並與他人分享我的經驗。
            </p>
            <p className="text-lg leading-relaxed">
              除了寫程式，我也熱愛閱讀、攝影和音樂。我相信多元的興趣能夠激發創意，
              讓我在不同領域找到靈感。
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "Python", "UI/UX", "Machine Learning"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover-elevate"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\./g, '').replace(/\//g, '-')}`}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { src: studyImg, alt: "學習時光" },
              { src: codingImg, alt: "程式開發" },
              { src: presentImg, alt: "專案發表" },
              { src: journalImg, alt: "創作紀錄" },
            ].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  data-testid={`img-lifestyle-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
