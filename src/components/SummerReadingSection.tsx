import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SUMMER_READING } from "../data/newsletterData";
import { Calendar, ChevronRight, Calculator, AlertTriangle, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";

export default function SummerReadingSection() {
  const [borrowCount, setBorrowCount] = useState<number>(3);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate Countdown to 2026/08/08 17:00:00
  useEffect(() => {
    const targetDate = new Date("2026-08-08T17:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-brand-green-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Info & Rule Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-brand-gold-500/20 text-brand-gold-450 border border-brand-gold-500/30 rounded-md text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-500" />
            {SUMMER_READING.slogan}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-white leading-tight">
            05 ｜ {SUMMER_READING.title}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl">
            {SUMMER_READING.description}
          </p>

          {/* Rules structured list */}
          <div className="space-y-4 pt-4 max-w-xl">
            {SUMMER_READING.rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 bg-brand-gold-500 text-brand-green-950 font-bold font-serif rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-gold-100 font-serif">
                    {rule.label}
                  </h4>
                  <p className="text-xs text-white/70 mt-1">{rule.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tip Banner */}
          <div className="p-4 bg-brand-gold-500/10 border border-brand-gold-500/30 rounded-2xl max-w-xl text-xs text-brand-gold-100 leading-relaxed flex gap-2.5 items-center">
            <AlertTriangle className="w-4.5 h-4.5 text-brand-gold-500 flex-shrink-0" />
            <span>
              <strong>溫馨提醒：</strong>{SUMMER_READING.tip}
            </span>
          </div>
        </div>

        {/* Calculator and Countdown Widget */}
        <div className="lg:col-span-5 space-y-6">
          {/* Real-time Countdown Box */}
          <div className="bg-brand-green-950/70 backdrop-blur-md rounded-3xl p-6 border border-white/10 text-center space-y-4 shadow-xl">
            <p className="text-[10px] font-mono font-bold tracking-widest text-brand-gold-500 uppercase">
              距離歸還截止日 2026/08/08 還剩
            </p>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="block text-3xl font-bold font-mono text-white">
                  {timeLeft.days}
                </span>
                <span className="text-[9px] text-white/50 tracking-wider font-sans uppercase">
                  天 Days
                </span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="block text-3xl font-bold font-mono text-white">
                  {timeLeft.hours}
                </span>
                <span className="text-[9px] text-white/50 tracking-wider font-sans uppercase">
                  時 Hours
                </span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="block text-3xl font-bold font-mono text-white">
                  {timeLeft.minutes}
                </span>
                <span className="text-[9px] text-white/50 tracking-wider font-sans uppercase">
                  分 Min
                </span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="block text-3xl font-bold font-mono text-white">
                  {timeLeft.seconds}
                </span>
                <span className="text-[9px] text-white/50 tracking-wider font-sans uppercase">
                  秒 Sec
                </span>
              </div>
            </div>

            <p className="text-[11px] text-white/50 leading-relaxed">
              請於暑期輔導第一週全數歸還，避免逾期影響下學期借書權益唷！
            </p>
          </div>

          {/* Interactive Limit Calculator */}
          <div className="bg-white text-brand-green-900 rounded-3xl p-6 shadow-xl border border-brand-green-100 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-bold text-sm tracking-wide font-serif text-brand-green-900 flex items-center gap-1.5 border-b border-brand-green-50 pb-3">
                <Calculator className="w-4.5 h-4.5 text-brand-green-650" />
                暑期 5 冊借書配置模擬器
              </h3>

              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-brand-green-800">您計畫借書的數量 (冊)</span>
                  <span className="font-bold text-sm text-brand-green-900">{borrowCount} / 5 冊</span>
                </div>
                {/* Visual input range */}
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={borrowCount}
                  onChange={(e) => setBorrowCount(parseInt(e.target.value))}
                  className="w-full accent-brand-green-655"
                />
              </div>

              {/* Dynamic summary message */}
              <div className="bg-brand-green-50 p-4 rounded-2xl text-xs space-y-2 leading-relaxed">
                {borrowCount < 5 ? (
                  <p className="text-brand-green-800">
                    💡 您目前借閱了 <strong className="text-brand-green-950">{borrowCount}</strong> 冊。暑期專案放寬每人可借足 <strong className="text-brand-green-950">5</strong> 冊。建議您可以再多挑選 <strong className="text-brand-green-950">{5 - borrowCount}</strong> 本畢業書單好書，充實假期！
                  </p>
                ) : (
                  <p className="text-emerald-800 font-medium">
                    🎉 已達到暑期借書最上限 <strong className="text-brand-green-950">5 冊 頂格配置</strong>！完美善用學校圖書福利，推薦分配至少 2 本自主學習書、2 本成長小說、1 本生涯探索手冊，完成全方位躍遷！
                  </p>
                )}
                
                <div className="pt-2 border-t border-brand-green-100 flex justify-between text-[11px] text-brand-green-600">
                  <span>可延長天數：+45 天額外展期</span>
                  <span>回饋認證點數： up to 5 筆</span>
                </div>
              </div>
            </div>

            <a
              href="#book-list"
              className="mt-4 w-full py-2.5 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              挑選書籍並配置去
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
