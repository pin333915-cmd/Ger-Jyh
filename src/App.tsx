import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import NewsletterHeader from "./components/NewsletterHeader";
import BookListSection from "./components/BookListSection";
import LeaderboardSection from "./components/LeaderboardSection";
import SelExhibitionSection from "./components/SelExhibitionSection";
import SummerReadingSection from "./components/SummerReadingSection";
import PassportSection from "./components/PassportSection";
import ExhibitionSection from "./components/ExhibitionSection";
import ChallengeSection from "./components/ChallengeSection";
import { BookOpen, MapPin, Feather, Heart, Sparkles, MessageCircle, Send, Quote, ChevronUp } from "lucide-react";

interface GraduateWish {
  id: string;
  name: string;
  content: string;
  timestamp: string;
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [wishes, setWishes] = useState<GraduateWish[]>([]);
  const [wishName, setWishName] = useState("");
  const [wishContent, setWishContent] = useState("");

  // Track scroll position to show Back-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load and set default graduate wishes
  useEffect(() => {
    const saved = localStorage.getItem("gezhi_graduate_wishes");
    if (saved) {
      setWishes(JSON.parse(saved));
    } else {
      const defaultWishes: GraduateWish[] = [
        {
          id: "w1",
          name: "畢業班學姊 江同學",
          content: "感謝圖書館這三年靜靜的陪伴，那張靠窗的木桌是我看過最美的地方，祝福大家在未來都綻放光芒！",
          timestamp: "1 小時前",
        },
        {
          id: "w2",
          name: "七年四班 陳聖勳",
          content: "祝九年級學長姊畢業快樂！願你們帶著閱讀的心靈養分，彎道超車，考上理想高中！",
          timestamp: "2 小時前",
        },
        {
          id: "w3",
          name: "格致校友 許學長",
          content: "「有些故事會停留在六月，有些夢想將從今天出發。」看到新校刊這兩句話，真的太感動了，圖書館一直是格致人的精神燈塔。",
          timestamp: "3 小時前",
        },
      ];
      setWishes(defaultWishes);
      localStorage.setItem("gezhi_graduate_wishes", JSON.stringify(defaultWishes));
    }
  }, []);

  const handleSendWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishContent.trim()) return;

    const newWish: GraduateWish = {
      id: Math.random().toString(36).substr(2, 9),
      name: wishName.trim() || "匿名格致人",
      content: wishContent.trim(),
      timestamp: "剛剛",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem("gezhi_graduate_wishes", JSON.stringify(updated));

    setWishName("");
    setWishContent("");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-green-50 font-sans tracking-tight antialiased selection:bg-brand-gold-500 selection:text-brand-green-950">
      {/* Anchor tracking layout bar for easy scroll */}
      <nav className="sticky top-0 bg-white/70 backdrop-blur-md z-40 border-b border-brand-green-100 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center text-xs font-bold text-brand-green-800">
          <div className="flex items-center gap-1.5 text-brand-green-650 font-serif">
            <BookOpen className="w-4 h-4 text-brand-gold-500" />
            格致高中圖書館訊
          </div>
          <div className="flex gap-6">
            <a href="#newsletter-header" className="hover:text-brand-gold-600 transition">
              01 | 溫柔轉身
            </a>
            <a href="#book-list" className="hover:text-brand-gold-600 transition">
              02 | 推薦書單
            </a>
            <a href="#leaderboard" className="hover:text-brand-gold-600 transition font-sans">
              03 | 閱讀排行
            </a>
            <a href="#sel-exhibition" className="hover:text-brand-gold-600 transition text-nowrap">
              04 | 心靈書展
            </a>
            <a href="#summer-reading" className="hover:text-brand-gold-600 transition text-nowrap">
              05 | 暑期預告
            </a>
            <a href="#passport" className="hover:text-brand-gold-600 transition text-nowrap">
              06 | 數位護照
            </a>
            <a href="#exhibition" className="hover:text-brand-gold-600 transition text-nowrap">
              07 | 藝文展覽
            </a>
            <a href="#challenge" className="hover:text-brand-gold-600 transition text-nowrap">
              08 | 六月挑戰
            </a>
          </div>
        </div>
      </nav>

      {/* Main Single Page Sections */}
      <main className="space-y-4">
        {/* 01 | Header & Intro */}
        <div id="newsletter-header">
          <NewsletterHeader />
        </div>

        {/* 02 | Recommend Book list */}
        <div id="book-list">
          <BookListSection />
        </div>

        {/* 03 | Month Leaderboard */}
        <div id="leaderboard">
          <LeaderboardSection />
        </div>

        {/* 04 | SEL Exhibition Review */}
        <div id="sel-exhibition">
          <SelExhibitionSection />
        </div>

        {/* 05 | Summer Reading Guide */}
        <div id="summer-reading">
          <SummerReadingSection />
        </div>

        {/* 06 | EBook & Passport Activity */}
        <div id="passport">
          <PassportSection />
        </div>

        {/* 07 | Gallery Art recommends */}
        <div id="exhibition">
          <ExhibitionSection />
        </div>

        {/* 08 | Active checklist challenges */}
        <div id="challenge">
          <ChallengeSection />
        </div>

        {/* Interactive wishing wall & graduation wishes */}
        <section className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-white rounded-[3rem] shadow-xl border border-brand-green-105 mb-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold-50 text-brand-gold-600 border border-brand-gold-200 rounded-md text-xs font-semibold uppercase tracking-wider">
              <Feather className="w-3.5 h-3.5" />
              GRADUATE WISHING WALL
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-green-900">
              格致畢業祝福與留言牆
            </h2>
            <p className="text-brand-green-800/80 max-w-xl mx-auto text-xs leading-relaxed">
              有些誓言會隨著風箏高飛，有些期許留在庫房。歡迎在下方寫下你對畢業同窗的真摯寄語，或者對圖書館最溫暖的一句話。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Wish input field */}
            <form onSubmit={handleSendWish} className="md:col-span-5 bg-brand-green-50/50 p-6 rounded-2xl border border-brand-green-100 space-y-4">
              <h3 className="font-bold text-sm tracking-wide font-serif text-brand-green-900 flex items-center gap-1.5 border-b border-brand-green-100 pb-3">
                <MessageCircle className="w-4.5 h-4.5 text-brand-green-650" />
                寫下我的祝福語
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-brand-green-800 mb-1">您的姓名 / 筆名</label>
                  <input
                    type="text"
                    placeholder="例如：八年二班 江冠毅"
                    value={wishName}
                    onChange={(e) => setWishName(e.target.value)}
                    className="w-full px-4.5 py-2 text-xs rounded-xl border border-brand-green-100 bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-brand-green-800 mb-1">祝福或閱讀感言內容</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="寫下您對青春、同學，或是對圖書館靜謐港灣的溫柔話語..."
                    value={wishContent}
                    onChange={(e) => setWishContent(e.target.value)}
                    className="w-full px-4.5 py-2.5 text-xs rounded-xl border border-brand-green-100 bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950 placeholder-brand-green-800/40 leading-relaxed font-sans"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!wishContent.trim()}
                className="w-full py-2.5 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:bg-brand-green-200"
              >
                <Send className="w-3.5 h-3.5" />
                掛上祝福牆
              </button>
            </form>

            {/* Wishes wall listings */}
            <div className="md:col-span-7 h-[360px] overflow-y-auto space-y-4 pr-1.5 scrollbar-thin">
              <AnimatePresence>
                {wishes.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutReady={() => {}}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-brand-gold-50/20 hover:bg-brand-gold-50/50 border border-brand-gold-100/50 p-4.5 rounded-2xl space-y-2 text-xs shadow-xs text-left"
                  >
                    <div className="flex justify-between items-center">
                      <strong className="text-brand-green-905 font-serif">{item.name}</strong>
                      <span className="text-[10px] text-brand-green-600/50">{item.timestamp}</span>
                    </div>
                    <p className="text-brand-green-800 leading-relaxed font-serif italic text-[13px]">
                      「 {item.content} 」
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* Academic Elegant Footer */}
      <footer className="w-full py-16 bg-brand-green-950 text-white text-center relative overflow-hidden">
        {/* Ambient top gold light panel */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold-500/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,119,6,0.05),transparent_40%)]" />

        <div className="max-w-2xl mx-auto px-6 space-y-8 relative z-10">
          <div className="space-y-4">
            <Quote className="w-8 h-8 text-brand-gold-500 mx-auto opacity-70" />
            <p className="text-lg md:text-xl font-bold font-serif italic tracking-wide text-brand-gold-100 leading-relaxed">
              有些故事，會停留在六月；<br />有些夢想，將從今天出發。
            </p>
            <p className="text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
              願每位格致人，都能帶著閱讀留下的光，勇敢走向更遠的地方。
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/50">
            <p className="font-serif">學習的至友 · 格致高中圖書館 敬上</p>
            <p>© 2026 GEZHI HIGH SCHOOL LIBRARY. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollToTop}
            aria-label="回頂端"
            className="fixed bottom-6 right-6 p-3 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-green-950 rounded-full shadow-2xl transition z-40 border border-white/10 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
