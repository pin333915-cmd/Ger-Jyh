import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EBOOK_RESOURCES, PASSPORT_ACTIVITY } from "../data/newsletterData";
import { BookOpen, Globe, ArrowUpRight, Award, PlusCircle, CheckCircle, Gift, X, Wallet, Trash2 } from "lucide-react";
import { Coupon } from "../types";

export default function PassportSection() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [bookTitle, setBookTitle] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<string>("");
  const [reviewText, setReviewText] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [selectedCouponToShow, setSelectedCouponToShow] = useState<Coupon | null>(null);

  // Load existing coupons from localStorage
  useEffect(() => {
    const savedCoupons = localStorage.getItem("gezhi_passport_coupons");
    if (savedCoupons) {
      setCoupons(JSON.parse(savedCoupons));
    }
  }, []);

  const handlePassportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookTitle || !reviewText || reviewText.length < 15) {
      alert("請填寫完整的書名與至少 15 字的心得分享！");
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      // Simulate verification by our lovely library teacher
      const newCoupon: Coupon = {
        id: "CP-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        code: "GZ-" + Math.floor(100000 + Math.random() * 900000),
        amount: 20,
        dateCreated: new Date().toLocaleDateString(),
        expiryDate: "2026/09/30", // Expiry date after school startup
      };

      const updatedCoupons = [newCoupon, ...coupons];
      setCoupons(updatedCoupons);
      localStorage.setItem("gezhi_passport_coupons", JSON.stringify(updatedCoupons));

      setIsVerifying(false);
      setSelectedCouponToShow(newCoupon);

      // Clear input fields
      setBookTitle("");
      setBookAuthor("");
      setReviewText("");
    }, 2000);
  };

  const handleClearCoupons = () => {
    if (confirm("確認清除您已獲得的所有合作社折價券嗎？")) {
      setCoupons([]);
      localStorage.removeItem("gezhi_passport_coupons");
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Electronic Book & Details Information panel */}
      <div className="lg:col-span-6 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green-100 text-brand-green-800 rounded-md text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            DIGITAL LIBRARIES & READING PASSPORT
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-green-900 leading-tight">
            06 ｜ 電子書與閱讀護照
          </h2>
          <p className="text-brand-green-800/80 leading-relaxed text-sm">
            迎接數位學習時代，本校圖書館為全校師生彙整多元、充沛的電子圖書資源。彈指之間，即可暢讀萬卷名著。暑假期間更備有豐富的閱讀護照獎勵，讓我們一起用閱讀積累幸福。
          </p>
        </div>

        {/* Ebook Lists */}
        <div className="space-y-4">
          <h3 className="font-bold text-sm tracking-wide font-serif text-brand-green-900 uppercase border-l-3 border-brand-gold-500 pl-3">
            推薦電子書平台
          </h3>

          <div className="space-y-3">
            {EBOOK_RESOURCES.map((resource, idx) => (
              <a
                key={idx}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-white hover:bg-brand-green-50/20 border border-brand-green-100/50 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-brand-green-950 group-hover:text-brand-green-800 font-serif flex items-center gap-1">
                      {resource.name}
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-green-600/50 group-hover:text-brand-green-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </h4>
                    <p className="text-xs text-brand-green-800/75 leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>
                  <Globe className="w-5 h-5 text-brand-green-600/30 group-hover:text-brand-green-700/60 flex-shrink-0 mt-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Passport Promotion Rule box */}
        <div className="bg-brand-gold-50 rounded-3xl p-6 border border-brand-gold-100 space-y-4">
          <h3 className="text-sm font-bold text-brand-gold-600 flex items-center gap-2 font-serif">
            <Award className="w-5 h-5" />
            暑期閱讀護照活動辦法 & 折價券獎勵
          </h3>
          <p className="text-xs text-brand-green-900 leading-relaxed">
            {PASSPORT_ACTIVITY.description} <strong className="text-brand-green-950">{PASSPORT_ACTIVITY.reward}</strong>
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-gold-600 bg-brand-gold-100/50 px-3 py-1.5 rounded-lg border border-brand-gold-100/80">
              《閱讀護照活動辦法》特別修訂細則
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Writing Passport & Coupon Wallet */}
      <div className="lg:col-span-6 space-y-6">
        {/* Passport review submission section */}
        <div className="bg-white border border-brand-green-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-green-950 px-6 py-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-bold text-sm tracking-wide font-serif text-brand-gold-100">
                ✏️ 閱讀護照心得即時上傳
              </h3>
              <p className="text-[10px] text-white/50 font-mono mt-0.5">自主學習 · 心得認證換折價券</p>
            </div>
            {coupons.length > 0 && (
              <div className="flex items-center gap-1 bg-brand-gold-500 text-brand-green-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow">
                <Wallet className="w-3.5 h-3.5" />
                皮夾：{coupons.length} 張折價券
              </div>
            )}
          </div>

          <form onSubmit={handlePassportSubmit} className="p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-green-900 mb-1.5">閱讀書籍名稱</label>
                <input
                  type="text"
                  required
                  placeholder="例: 原子習慣"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  className="w-full px-4 py-2 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-green-900 mb-1.5">書籍作者 / 譯者</label>
                <input
                  type="text"
                  placeholder="例: 詹姆斯.克利爾"
                  value={bookAuthor}
                  onChange={(e) => setBookAuthor(e.target.value)}
                  className="w-full px-4 py-2 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-green-900 mb-1.5">
                精簡心得心得(最少 15 字，多寫有助評選優秀心得)
              </label>
              <textarea
                required
                rows={4}
                placeholder="請分享這本書給您的感動、啟發或具體計畫。填妥提交後即由本校圖書教師同仁、志工媽媽進行認證。"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:ring-2 focus:ring-brand-green-600 focus:outline-none text-brand-green-950 placeholder-brand-green-800/30 font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={isVerifying || !bookTitle || !reviewText}
              className="w-full py-3 bg-brand-green-600 disabled:bg-brand-green-100 disabled:text-brand-green-400 hover:bg-brand-green-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-green-600/10 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {isVerifying ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  圖書管理員線上審查中...
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4" />
                  遞交心得，審查並發放 $20 抵用券
                </>
              )}
            </button>
          </form>
        </div>

        {/* Coupons storage wallet */}
        {coupons.length > 0 && (
          <div className="bg-white border border-dashed border-brand-green-200 rounded-3xl p-6 shadow-md">
            <div className="flex justify-between items-center border-b border-brand-green-50 pb-3 mb-4">
              <h4 className="text-xs font-bold text-brand-green-900 font-serif flex items-center gap-1.5">
                <Wallet className="w-4.5 h-4.5 text-brand-gold-500" />
                我的優惠券錢包 ({coupons.length} 張)
              </h4>
              <button
                onClick={handleClearCoupons}
                className="text-[10px] text-red-500 font-semibold hover:underline flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5 animate-bounce-short" />
                清空抵用券
              </button>
            </div>

            {/* Coupons list mapping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coupons.map((coupon) => (
                <div
                  key={coupon.id}
                  onClick={() => setSelectedCouponToShow(coupon)}
                  className="bg-brand-gold-50 hover:bg-brand-gold-100 border border-brand-gold-200 rounded-2xl p-4 flex justify-between items-center cursor-pointer transition transform hover:scale-[1.02] relative overflow-hidden group shadow-xs"
                >
                  <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-brand-gold-500 to-amber-600" />
                  <div>
                    <span className="block text-[8px] font-mono tracking-widest text-brand-gold-600 font-bold uppercase">
                      COOP CHECKOUT GIFT
                    </span>
                    <h5 className="text-xl font-extrabold text-brand-green-905 font-mono">
                      NT$ {coupon.amount}
                    </h5>
                    <p className="text-[9px] text-brand-green-600/70 mt-1">
                      代碼：{coupon.code}
                    </p>
                  </div>
                  <div className="bg-white/80 group-hover:bg-brand-gold-500 group-hover:text-white rounded-full p-1.5 transition text-brand-gold-600">
                    <Gift className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-center text-brand-green-600/50 mt-4 leading-normal">
              細嚼慢嚥：點擊折價券卡片，可展開大尺寸條碼憑證、學籍證件資訊，即可至本校合作社結帳抵扣。
            </p>
          </div>
        )}
      </div>

      {/* Coupon inspection Modal */}
      <AnimatePresence>
        {selectedCouponToShow && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border border-brand-gold-300 relative"
            >
              <button
                onClick={() => setSelectedCouponToShow(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-brand-gold-50 hover:bg-brand-gold-100 text-brand-gold-500 transition z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center p-6 space-y-6">
                <div>
                  <span className="text-[9px] font-bold text-brand-gold-600 font-mono tracking-widest bg-brand-gold-50 border border-brand-gold-200 px-3 py-1 rounded">
                    OFFICIAL REDEEMABLE COUPON
                  </span>
                  <div className="mt-4 w-12 h-12 rounded-full bg-brand-gold-500/10 text-brand-gold-500 flex items-center justify-center mx-auto">
                    <Gift className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-sm font-bold text-brand-green-800 font-serif">格致高中合作社專屬折價券</span>
                  <div className="text-4xl font-extrabold text-brand-green-950 font-mono flex items-center justify-center gap-1">
                    <span className="text-lg text-brand-gold-500">$</span>
                    20 <span className="text-sm text-brand-green-850 font-sans">NTD</span>
                  </div>
                  <p className="text-xs text-brand-green-600">認證合格讀書心得．閱讀護照系列活動</p>
                </div>

                {/* Simulated coupon cutout ticket area */}
                <div className="border-t-2 border-b-2 border-dashed border-brand-gold-300 py-4 px-2 space-y-2 relative bg-brand-gold-50/50">
                  <div className="grid grid-cols-2 text-left text-xs space-y-1.5 text-brand-green-800">
                    <div className="col-span-2 text-center text-[10px] font-bold text-brand-gold-600 font-mono tracking-widest bg-brand-gold-100 rounded-sm mb-1">
                      憑證系統認證詳細
                    </div>
                    <p className="font-medium"><strong>核發日期:</strong></p>
                    <p className="text-right">{selectedCouponToShow.dateCreated}</p>
                    <p className="font-medium"><strong>截止日期:</strong></p>
                    <p className="text-right text-red-600">{selectedCouponToShow.expiryDate}</p>
                    <p className="font-medium"><strong>安全核對代碼:</strong></p>
                    <p className="text-right font-mono font-bold text-brand-green-950">{selectedCouponToShow.code}</p>
                  </div>

                  {/* Simulated barcode */}
                  <div className="pt-4 text-center">
                    <div className="inline-block bg-white px-4 py-2 border border-brand-gold-200 rounded">
                      <div className="font-mono text-[10px] tracking-widest text-[#2d3748] font-bold bg-white leading-none">
                        ||| || | | |||| ||| | ||| | ||||| |
                      </div>
                      <span className="block text-[8px] font-mono text-brand-green-600 mt-1 font-bold">
                        SECURE-CODE: {selectedCouponToShow.id}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-brand-green-700/80 leading-relaxed font-sans px-4">
                  * <strong>兌換須知：</strong>每篇心得認證發放乙張，結帳前請向服務人員出示此專屬條碼與學籍識別證件，不予折現，逾期無效。
                </div>

                <button
                  onClick={() => setSelectedCouponToShow(null)}
                  className="w-full py-2.5 bg-brand-gold-500 hover:bg-brand-gold-600 text-brand-green-950 font-bold text-xs rounded-xl transition"
                >
                  收下優惠券
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
