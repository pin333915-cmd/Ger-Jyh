import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { JUNE_CHALLENGE } from "../data/newsletterData";
import { CheckSquare, Square, Award, Sparkles, X, Share2, BookMarked, Download } from "lucide-react";

export default function ChallengeSection() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  // Load checked challenge items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("gezhi_challenges");
    if (saved) {
      setCheckedIds(JSON.parse(saved));
    }
  }, []);

  const handleToggle = (id: string) => {
    let updated: string[];
    if (checkedIds.includes(id)) {
      updated = checkedIds.filter((cid) => cid !== id);
    } else {
      updated = [...checkedIds, id];
    }
    setCheckedIds(updated);
    localStorage.setItem("gezhi_challenges", JSON.stringify(updated));

    // If fully completed (5/5), show congratulatory certificate modal!
    if (updated.length === JUNE_CHALLENGE.length) {
      setShowCertificate(true);
    }
  };

  const progressPct = (checkedIds.length / JUNE_CHALLENGE.length) * 100;

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      {/* Container holding the white card */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-green-100 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Intro and Graphic Side */}
        <div className="md:w-5/12 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold-100/50 text-brand-gold-600 rounded-md text-xs font-semibold uppercase tracking-wider">
            <CheckSquare className="w-3.5 h-3.5" />
            STUDENT JUNE ACTIVE CHALLENGE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-green-900 leading-tight">
            08 ｜ 格致學子<br className="hidden md:block" />六月閱讀挑戰
          </h2>
          <p className="text-brand-green-800/80 text-xs leading-relaxed font-sans">
            伴隨風起悠揚的蟬鳴與離歌歌聲，我們為你在這個六月出了五道溫柔的挑戰題。試著完成它們，無論你是要在鳳凰花開中邁向高中的九年級生，還是精進突破的學弟妹，你都能在此刻重拾初心、與文字相遇。
          </p>

          {/* Graphical Progress circle or bar */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-bold text-brand-green-905">
              <span>挑戰達成進度</span>
              <span>
                {checkedIds.length} / {JUNE_CHALLENGE.length}
              </span>
            </div>
            <div className="w-full h-3 bg-brand-green-50 rounded-full overflow-hidden border border-brand-green-100/50 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                className="h-full bg-gradient-to-r from-brand-gold-500 to-amber-500 rounded-full"
              />
            </div>
            <p className="text-[10px] text-brand-green-600/70 font-sans italic">
              * 只要勾選完全部 5 道挑戰，即可獲得圖書館線上頒發的「六月閱讀達人」專屬數位學術紀念書卡！
            </p>
          </div>
        </div>

        {/* Interactive Checkbox List Side */}
        <div className="md:w-7/12 w-full space-y-3">
          {JUNE_CHALLENGE.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer select-none ${
                  isChecked
                    ? "bg-brand-green-50/50 border-brand-green-200 shadow-xs"
                    : "bg-brand-green-50/20 hover:bg-brand-green-50/50 border-transparent hover:border-brand-green-100"
                }`}
              >
                <div className="mt-0.5 flex-shrink-0 text-brand-green-650">
                  {isChecked ? (
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                      <CheckSquare className="w-5.5 h-5.5 fill-brand-green-600 text-white" />
                    </motion.div>
                  ) : (
                    <Square className="w-5.5 h-5.5 text-brand-green-600/40 hover:text-brand-green-600" />
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold transition-colors leading-relaxed ${
                      isChecked ? "text-brand-green-700/70 line-through" : "text-brand-green-900"
                    }`}
                  >
                    {item.text}
                  </p>
                  {item.text.includes("畢業生") && (
                    <span className="inline-block mt-1 text-[9px] font-bold text-brand-gold-600 bg-brand-gold-50 border border-brand-gold-100/65 px-2 py-0.5 rounded-sm">
                      畢業溫馨彩蛋
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* June Challenge certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border-4 border-brand-gold-105 relative"
            >
              {/* Corner graphics */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-gold-500 rounded-tl-xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-brand-gold-500 rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-brand-gold-500 rounded-bl-xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-gold-500 rounded-br-xl pointer-events-none" />

              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-6 right-6 p-1 bg-brand-gold-50 hover:bg-brand-gold-100 text-brand-gold-500 rounded-full transition z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 space-y-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-brand-gold-500/10 text-brand-gold-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Award className="w-6.5 h-6.5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-brand-gold-600 block uppercase pt-2">
                    GEZHI ACTIVE READING CHAMPION
                  </span>
                  <h3 className="text-2xl font-black font-serif text-brand-green-950">
                    六月閱讀達人證書
                  </h3>
                </div>

                <div className="border-t border-b border-brand-green-50 py-6 space-y-4 font-serif">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-sans font-bold text-brand-green-600/60 uppercase">
                      請簽下您的姓名證件以認證
                    </label>
                    <input
                      type="text"
                      placeholder="請輸入姓名 (例如: 江冠毅)"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="text-center w-full max-w-[200px] mx-auto border-b-2 border-brand-gold-500 focus:outline-none focus:border-brand-green-800 text-base font-bold text-brand-green-950 px-2 py-1 font-serif bg-transparent"
                    />
                  </div>

                  <p className="text-xs text-brand-green-800 leading-relaxed font-sans px-4">
                    茲證明 <strong className="text-brand-green-955 font-serif text-sm">{userName || "格致讀書郎"}</strong> 於2026年六月順利突破並完成了本校圖書館舉辦的「五大畢業季閱讀實踐挑戰」，持之以恆，敏學勵志，特頒此狀以茲鼓勵！
                  </p>
                </div>

                {/* Classic Library Badge card layout card representation printable */}
                <div className="bg-brand-green-50 border border-brand-green-150 p-4 rounded-2xl flex items-center gap-4 text-left relative overflow-hidden">
                  <BookMarked className="w-10 h-10 text-brand-green-700/80 flex-shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-brand-green-900 font-serif">格致2026超現實青春書籤</h5>
                    <p className="text-[10px] text-brand-green-600 mt-0.5 leading-normal">
                      編號：GZ-CHALLENGE-{(Math.random() * 9000 + 1000).toFixed(0)}<br />
                      核發：格致中學圖書館編輯部
                    </p>
                  </div>
                  {/* Miniature decorative stamp */}
                  <div className="absolute -right-2 -bottom-2 opacity-15 pointer-events-none transform rotate-12">
                    <Sparkles className="w-16 h-16 text-brand-gold-500 fill-current" />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      alert(`已為 ${userName || "格致學子"} 同學自動匯出並產製畢業達人書籤 PNG 憑證。請長按螢幕截圖妥善保存！`);
                      setShowCertificate(false);
                    }}
                    className="flex-1 py-3 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    儲存數位書籤 & 導出
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
