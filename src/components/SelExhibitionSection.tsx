import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SEL_EXHIBITION } from "../data/newsletterData";
import { BookOpen, Sparkles, Smile, HelpCircle, Heart, Tag, Calendar, Users2, Award, Gift } from "lucide-react";

export default function SelExhibitionSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [drawResult, setDrawResult] = useState<string | null>(null);
  
  // Student form data
  const [name, setName] = useState<string>("");
  const [gradClass, setGradClass] = useState<string>("八年二班");
  const [selectedEmotion, setSelectedEmotion] = useState<string>("情緒療癒");
  const [opinion, setOpinion] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const startLuckyDraw = () => {
    setIsDrawing(true);
    // Draw categories based on SEL Exhibition
    const prizes = [
      "心靈療癒好書《深夜加油站遇見蘇格拉底》乙本",
      "心靈修煉好書《原子習慣》特別紀念版乙本",
      "423世界閱讀日聯名「文字治癒」刺繡書籤",
      "格致圖書館心靈咖啡閣 50 元飲品兌換券",
      "合作社專用「滿額熱狗」免費兌換券"
    ];

    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setDrawResult(randomPrize);
      setIsDrawing(false);
    }, 2000);
  };

  const resetActivity = () => {
    setFormSubmitted(false);
    setDrawResult(null);
    setIsDrawing(false);
    setName("");
    setOpinion("");
  };

  const emotions = ["情緒療癒", "成長迷茫", "人際交往", "自我接納", "未來探索"];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Narrative Info Box */}
      <div className="lg:col-span-6 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green-150 text-brand-green-800 rounded-md text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          PAST EXHIBITION RETROSPECTIVE
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-brand-green-900 leading-tight">
          04 ｜ 書展回顧：SEL－心靈書展
        </h2>
        <p className="text-brand-gold-600 font-serif font-semibold text-lg italic tracking-wide">
          {SEL_EXHIBITION.subtitle}
        </p>

        <p className="text-brand-green-800/80 leading-relaxed text-sm whitespace-pre-line font-sans">
          {SEL_EXHIBITION.description}
        </p>

        {/* Fact grid cards */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-brand-green-100/40 border border-brand-green-200/20 p-4 rounded-2xl flex items-center gap-3">
            <Calendar className="w-5 h-5 text-brand-green-700 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-brand-green-600 font-bold uppercase tracking-wider">展覽展期</p>
              <p className="text-xs font-semibold text-brand-green-950">4.27 - 5.04</p>
            </div>
          </div>

          <div className="bg-brand-green-100/40 border border-brand-green-200/20 p-4 rounded-2xl flex items-center gap-3">
            <Users2 className="w-5 h-5 text-brand-green-700 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-brand-green-600 font-bold uppercase tracking-wider">累計參與</p>
              <p className="text-xs font-semibold text-brand-green-950">1,287 人次</p>
            </div>
          </div>

          <button
            type="button"
            className="col-span-2 text-left bg-brand-gold-50/50 border border-brand-gold-100 p-4 rounded-2xl flex items-center gap-3 hover:bg-brand-gold-50 transition-colors"
          >
            <Tag className="w-5 h-5 text-brand-gold-500 flex-shrink-0" />
            <div>
              <p className="text-[10px] text-brand-gold-650 font-bold uppercase tracking-wider">特別回饋機制</p>
              <p className="text-xs font-semibold text-brand-green-950">文化幣推廣合辦 · 購書更享優渥</p>
            </div>
          </button>
        </div>
      </div>

      {/* Interactive Questionnaire Canvas */}
      <div className="lg:col-span-6 bg-white border border-brand-green-100 shadow-2xl rounded-3xl overflow-hidden self-stretch flex flex-col justify-between">
        <div className="bg-brand-green-900 px-6 py-5 text-white flex justify-between items-center">
          <div>
            <h3 className="font-bold text-sm tracking-wide font-serif text-brand-gold-100 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-gold-500" />
              SEL 線上心靈學習單
            </h3>
            <p className="text-[10px] text-white/50 font-mono mt-0.5">心靈對話＆現場摸彩線上複刻</p>
          </div>
          <Smile className="w-6 h-6 text-brand-gold-500 opacity-90" />
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              /* Learning Sheet Form */
              <motion.form
                key="sel-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-green-900 mb-1.5">學生姓名</label>
                    <input
                      type="text"
                      required
                      placeholder="姓名 (例: 陳聖勳)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-green-900 mb-1.5">格致班級</label>
                    <select
                      value={gradClass}
                      onChange={(e) => setGradClass(e.target.value)}
                      className="w-full px-4 py-2 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950"
                    >
                      <option>七年三班</option>
                      <option>七年四班</option>
                      <option>七年五班</option>
                      <option>八年二班</option>
                      <option>八年七班</option>
                      <option>九年一班</option>
                      <option>九年二班</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-green-900 mb-1.5">你目前最需要被關照的能量</label>
                  <div className="flex flex-wrap gap-2">
                    {emotions.map((emo) => {
                      const isSel = selectedEmotion === emo;
                      return (
                        <button
                          key={emo}
                          type="button"
                          onClick={() => setSelectedEmotion(emo)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border transition-all ${
                            isSel
                              ? "bg-brand-green-600 border-brand-green-600 text-white shadow-sm"
                              : "bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-800 border-transparent"
                          }`}
                        >
                          {emo}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-green-900 mb-1.5">
                    寫下一句你在心靈書展/閱讀中，最有共鳴的收穫：
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="例如：《原子習慣》讓我懂得細碎習慣的偉大複利；當我感到焦慮時，這段文字為我指引方向..."
                    value={opinion}
                    onChange={(e) => setOpinion(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950 placeholder-brand-green-800/30"
                  />
                </div>

                <div className="bg-brand-gold-50 p-3 rounded-xl text-[11px] text-brand-gold-600 font-sans flex gap-2">
                  <HelpCircle className="w-4 h-4 flex-shrink-0 text-brand-gold-500 mt-0.5" />
                  <span>
                    完成心靈學習單後，即可連線現場「電子幸運大摸彩」，百分之百中獎率！獲得精選SEL情绪好書。
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-green-600/10 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  提交心靈學習單並開啟摸彩
                </button>
              </motion.form>
            ) : (
              /* Lucky Draw Stage */
              <motion.div
                key="sel-draw"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6 space-y-6"
              >
                {!drawResult ? (
                  /* Drawing Screen */
                  <div className="space-y-6 animate-pulse">
                    <div className="w-20 h-20 bg-brand-gold-100 text-brand-gold-500 rounded-full flex items-center justify-center mx-auto shadow-lg border border-brand-gold-200">
                      <Gift className="w-10 h-10" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-green-900 font-serif">
                        感謝提交學習單！
                      </h4>
                      <p className="text-xs text-brand-green-600 mt-1">
                        格致圖書館幸運摸彩箱已為 {name} 同學備妥。
                      </p>
                    </div>

                    <button
                      onClick={startLuckyDraw}
                      disabled={isDrawing}
                      className="px-8 py-3 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-green-950 font-extrabold text-sm rounded-xl shadow-lg transition-all transform hover:scale-[1.03] disabled:opacity-50 cursor-pointer"
                    >
                      {isDrawing ? "摸彩箱滾動中..." : "開始點擊抽獎"}
                    </button>
                  </div>
                ) : (
                  /* Draw Result Screen */
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1, type: "spring" }}
                    className="space-y-6"
                  >
                    <div className="w-20 h-20 bg-brand-green-100 text-brand-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg border-2 border-brand-green-200">
                      <Award className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-brand-gold-105 border border-brand-gold-200 text-brand-gold-700 text-[10px] font-bold tracking-widest uppercase rounded">
                        摸彩大獎揭曉 CONGRATULATIONS
                      </span>
                      <h4 className="text-lg font-bold text-brand-green-900 font-serif px-4">
                        恭喜 {name} 同學幸運抽中！
                      </h4>
                    </div>

                    <p className="bg-brand-gold-50 border border-brand-gold-200 text-brand-gold-800 p-4 rounded-2xl font-serif text-base font-extrabold shadow-sm leading-relaxed mx-2">
                      🎉 {drawResult}
                    </p>

                    <p className="text-[11px] text-brand-green-650/80 leading-relaxed px-4">
                      本憑證編碼為 <span className="font-mono font-bold">SEL-{(Math.random() * 10000).toFixed(0)}</span>，請拍照存檔或前往圖書館前台出示領取專屬禮物！
                    </p>

                    <div className="flex justify-center gap-3">
                      <button
                        onClick={resetActivity}
                        className="px-5 py-2.5 bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-800 text-xs font-bold rounded-xl transition"
                      >
                        重新填寫
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
