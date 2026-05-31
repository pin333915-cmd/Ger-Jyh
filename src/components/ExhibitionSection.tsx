import { motion } from "motion/react";
import { ART_EXHIBITION } from "../data/newsletterData";
import { Palette, Share2, Compass, ArrowUpRight, HelpCircle, Eye } from "lucide-react";

export default function ExhibitionSection() {
  const surrealImages = [
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop", // abstract art representation
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"  // aesthetic/surreal representation
  ];

  const artists = [
    { name: "薩爾瓦多·達利", desc: "西班牙超現實主義巨匠，以扭曲的時間與荒誕夢境聞名。" },
    { name: "雷內·馬格利特", desc: "比利時畫家，以奇異、哲學思辨的日常事物重組見長。" },
    { name: "馬克斯·恩斯特", desc: "德國畫家、雕塑家，開創拼貼及拓印等前衛自動性寫真技法。" }
  ];

  return (
    <section className="py-20 px-6 bg-brand-green-100/30">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green-100 text-brand-green-800 rounded-md text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5 text-brand-green-700" />
            CULTURAL EXHIBITION RECOMMENDATION
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-green-900">
            07 ｜ 藝文展覽推薦
          </h2>
          <p className="text-brand-green-800/80 max-w-2xl mx-auto text-sm leading-relaxed">
            透過藝術之眼，探索自由疆域。圖書館特別為格致青年引薦當期最具張力與反思性的重量級藝文展覽，鼓勵大家利用假期親臨美術館，喚醒深藏的心靈能量。
          </p>
        </div>

        {/* Exhibition Spotlight Card */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-green-105 grid grid-cols-1 md:grid-cols-12">
          {/* Aesthetic poster side */}
          <div className="md:col-span-5 relative bg-brand-green-950 min-h-[250px] md:min-h-full flex flex-col justify-end p-8 text-white overflow-hidden">
            {/* Surreal graphic background representing TFAM */}
            <div className="absolute inset-0 bg-cover bg-center brightness-60 mix-blend-overlay hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${surrealImages[0]})` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-transparent to-transparent opacity-80" />
            
            <div className="relative z-10 space-y-3">
              <strong className="text-brand-gold-500 font-mono tracking-widest text-[10px] uppercase block">
                TFAM SPECIAL CO-OPERATION
              </strong>
              <h3 className="text-2xl font-black font-serif text-white tracking-normal leading-tight">
                超現實主義：<br />對話中的世界
              </h3>
              <p className="text-xs text-white/50 font-mono">Taipei Fine Arts Museum</p>
            </div>
          </div>

          {/* Exhibition detail content side */}
          <div className="md:col-span-7 p-8 lg:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[10px] bg-brand-green-50 text-brand-green-800 font-bold px-3 py-1.5 rounded-lg border border-brand-green-100 uppercase tracking-wider font-mono">
                  台北市立美術館 當代特展
                </span>
                <span className="text-xs text-brand-green-600 font-bold flex items-center gap-1">
                  <Compass className="w-4 h-4 text-brand-green-650" />
                  假日參觀推薦
                </span>
              </div>

              {/* Quote from user data */}
              <div className="text-center py-4 px-2 bg-brand-gold-50/50 rounded-2xl border border-dashed border-brand-gold-200">
                <p className="text-base font-extrabold font-serif italic text-brand-gold-600 leading-relaxed">
                  {ART_EXHIBITION.quote}
                </p>
              </div>

              <p className="text-xs text-brand-green-800/80 leading-relaxed">
                {ART_EXHIBITION.description} 藝術史上的「超現實主義」打破理性邊界，開墾潛意識之海。走進展館，讓那些大膽的造型、荒謬夢境般的形式與自由筆觸，為你的自主學習報告提供源源不絕的哲思靈感。
              </p>

              {/* Artists mini highlight to enrich the literature feeling */}
              <div className="space-y-2 pt-2">
                <p className="text-[10px] font-mono font-bold tracking-widest text-brand-green-700 uppercase">
                  核心參展藝術家重點 highlights
                </p>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  {artists.map((art) => (
                    <div key={art.name} className="flex gap-2 items-start bg-brand-green-50/30 p-2.5 rounded-lg border border-brand-green-100/30">
                      <strong className="text-brand-green-950 font-serif whitespace-nowrap">{art.name}</strong>
                      <span className="text-brand-green-100">|</span>
                      <span className="text-brand-green-700/80 leading-relaxed text-[11px]">{art.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Link button to web information */}
            <div className="pt-6 border-t border-brand-green-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-brand-green-605 flex items-center gap-1 font-medium italic">
                <HelpCircle className="w-3.5 h-3.5 text-brand-green-500" />
                暑假課外美學報告題材首選
              </span>

              <a
                href={ART_EXHIBITION.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-lg hover:shadow-brand-green-600/10"
              >
                <Eye className="w-4 h-4" />
                北美館展覽資訊連結
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
