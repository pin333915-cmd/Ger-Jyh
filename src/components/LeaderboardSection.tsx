import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLASS_LEADERBOARD, STUDENT_LEADERBOARD } from "../data/newsletterData";
import { Award, Trophy, Users, User, ArrowUpRight, Flame } from "lucide-react";

export default function LeaderboardSection() {
  const [activeTab, setActiveTab] = useState<"class" | "student">("class");

  // Simple relative scale relative to max item to show a neat customized visual bar
  const maxClassCount = Math.max(...CLASS_LEADERBOARD.map((c) => c.count));
  const maxStudentCount = Math.max(...STUDENT_LEADERBOARD.map((s) => s.count));

  return (
    <section className="py-20 px-6 bg-brand-green-100/30">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold-100 text-brand-gold-600 rounded-md text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            READING EXCELLENCE LEADERBOARD
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-green-900">
            03 ｜ 5月份借閱排行榜
          </h2>
          <p className="text-brand-green-855/80 max-w-lg mx-auto text-sm leading-relaxed">
            表揚熱愛閱讀、勤學敏思的格致班級與同窗！每一次翻頁都是思想疆域的開墾，恭喜上榜的優秀師生，繼續引領校園書香潮！
          </p>
        </div>

        {/* Dynamic Selector Tabs */}
        <div className="flex p-1.5 bg-brand-green-100/60 rounded-2xl w-full sm:w-fit mx-auto border border-brand-green-200/50">
          <button
            onClick={() => setActiveTab("class")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-xs font-bold font-sans tracking-wide transition-all duration-300 ${
              activeTab === "class"
                ? "bg-white text-brand-green-900 shadow-md scale-[1.02]"
                : "text-brand-green-700/80 hover:text-brand-green-900"
            }`}
          >
            <Users className="w-4 h-4" />
            班級排行 (學期累計)
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-xs font-bold font-sans tracking-wide transition-all duration-300 ${
              activeTab === "student"
                ? "bg-white text-brand-green-900 shadow-md scale-[1.02]"
                : "text-brand-green-700/80 hover:text-brand-green-900"
            }`}
          >
            <User className="w-4 h-4" />
            個人優秀排行
          </button>
        </div>

        {/* Rankings Display Canvas */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-brand-green-105 relative overflow-hidden">
          {/* Subtle decorative stamp */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 pointer-events-none text-brand-green-900">
            <Award className="w-64 h-64" />
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "class" ? (
              <motion.div
                key="class-list"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="border-b border-brand-green-50 pb-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold font-serif text-brand-green-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-green-600" />
                    班級優異榜
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-green-600/50 bg-brand-green-50 px-3 py-1 rounded">
                    排行榜上限計
                  </span>
                </div>

                <div className="space-y-6">
                  {CLASS_LEADERBOARD.map((item, idx) => {
                    const pct = (item.count / maxClassCount) * 100;
                    return (
                      <div key={item.className} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-3">
                            {/* Medal visual identifier */}
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center font-serif text-xs font-bold ${
                                idx === 0
                                  ? "bg-brand-gold-500 text-brand-green-950 font-bold"
                                  : idx === 1
                                  ? "bg-brand-green-100 text-brand-green-800"
                                  : "bg-brand-green-50 text-brand-green-700"
                              }`}
                            >
                              {item.rank}
                            </span>
                            <span className="font-semibold text-brand-green-900 font-serif">
                              {item.className}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-base font-extrabold text-brand-green-900">
                              {item.count}
                            </span>
                            <span className="text-xs text-brand-green-600/60 font-sans">冊</span>
                          </div>
                        </div>

                        {/* Progress display slider */}
                        <div className="relative w-full h-3.5 bg-brand-green-50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                            className={`h-full rounded-full ${
                              idx === 0
                                ? "bg-gradient-to-r from-brand-gold-500 to-amber-500 shadow-sm"
                                : "bg-brand-green-650"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="student-list"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="border-b border-brand-green-50 pb-4 flex justify-between items-center">
                  <h3 className="text-lg font-bold font-serif text-brand-green-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-brand-green-600" />
                    個人閱達人排行榜
                  </h3>
                  <div className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-brand-gold-500 px-2 py-0.5 bg-brand-gold-50 rounded">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    江冠毅同學獨佔鰲頭 54本！
                  </div>
                </div>

                <div className="space-y-6">
                  {STUDENT_LEADERBOARD.map((item, idx) => {
                    const pct = (item.count / maxStudentCount) * 100;
                    // Draw tie badge if index >= 2
                    const isTied = item.rank === 3;
                    return (
                      <div key={item.name + item.className} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center font-serif text-xs font-bold ${
                                idx === 0
                                  ? "bg-brand-gold-500 text-brand-green-950"
                                  : idx === 1
                                  ? "bg-brand-green-100 text-brand-green-800"
                                  : "bg-brand-green-50 text-brand-green-700"
                              }`}
                            >
                              {item.rank}
                            </span>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-brand-green-900 font-serif">
                                {item.name}
                              </span>
                              <span className="text-xs text-brand-green-600 bg-brand-green-50 px-2.5 py-0.5 rounded-full font-sans">
                                {item.className}
                              </span>
                              {isTied && (
                                <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.5 bg-amber-50 text-amber-600 border border-amber-200/50 rounded-sm font-sans uppercase">
                                  並列第三名
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 font-mono">
                            <span className="text-base font-extrabold text-brand-green-900">
                              {item.count}
                            </span>
                            <span className="text-xs text-brand-green-600/60 font-sans">冊</span>
                          </div>
                        </div>

                        {/* Student reading meter */}
                        <div className="relative w-full h-3.5 bg-brand-green-50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                            className={`h-full rounded-full ${
                              idx === 0
                                ? "bg-gradient-to-r from-brand-gold-500 to-amber-500 shadow-sm"
                                : "bg-brand-green-650"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slogan Quote card inside Section */}
          <div className="mt-10 p-5 bg-brand-green-50/50 rounded-2xl border border-dashed border-brand-green-200 text-xs text-brand-green-800 text-center flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2.5 text-left">
              <span className="w-1.5 h-8 bg-brand-gold-500 rounded-full" />
              <div>
                <p className="font-bold text-brand-green-900">想成為下一季的閱讀楷模嗎？</p>
                <p className="text-brand-green-600/80">每次借書櫃台自動登記，累積學月學年借書數，即可獲得精美禮物與榮譽獎章！</p>
              </div>
            </div>
            <a
              href="#book-list"
              className="px-5 py-2.5 bg-brand-green-600 text-white hover:bg-brand-green-700 text-xs font-bold rounded-xl shadow-md cursor-pointer transition flex items-center gap-1 whitespace-nowrap"
            >
              挑本好書前去借閱
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
