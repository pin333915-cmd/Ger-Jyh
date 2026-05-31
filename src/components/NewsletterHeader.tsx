import { motion } from "motion/react";
import { INTRO_SECTION, NEWSLETTER_DATE, NEWSLETTER_TITLE, NEWSLETTER_VERSION } from "../data/newsletterData";
import { BookOpen, GraduationCap, MapPin, Navigation } from "lucide-react";

const heroImage = "/src/assets/images/library_hero_banner_1780210178442.png";

export default function NewsletterHeader() {
  return (
    <header className="relative w-full overflow-hidden bg-brand-green-50 text-brand-green-900 border-2 border-brand-green-100 rounded-none shadow-2xl">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,26,26,0.02),transparent_60%)]" />

      {/* Top Meta Bar */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center border-b border-brand-green-100 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="bg-[#1A1A1A] text-[#FDFCFB] w-12 h-12 rounded-none flex items-center justify-center font-bold font-serif text-lg border border-[#1A1A1A]">
            格致
          </div>
          <div>
            <h2 className="text-sm font-black tracking-widest font-mono text-brand-green-900 uppercase">
              GEZHI HIGH SCHOOL LIBRARY
            </h2>
            <p className="text-xs text-brand-green-800/70 font-mono">經典傳承 · 知識啟航</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0 bg-[#F3F1EF] px-5 py-2 rounded-none border border-brand-green-100 text-xs font-mono font-bold text-brand-green-900">
          <span className="text-[#1A1A1A]">{NEWSLETTER_VERSION}</span>
          <span className="text-brand-green-100/30">|</span>
          <span className="text-brand-green-900">{NEWSLETTER_DATE}</span>
        </div>
      </div>

      {/* Hero Body */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Texts */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-[#FDFCFB] rounded-none text-xs font-black uppercase tracking-widest"
          >
            <GraduationCap className="w-4 h-4 text-[#FDFCFB]" />
            畢業季節 · 特別推薦
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] font-black font-serif tracking-tight text-brand-green-900"
          >
            {NEWSLETTER_TITLE}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl font-serif text-brand-green-855 font-medium italic border-l-4 border-brand-green-100 pl-4"
          >
            {INTRO_SECTION.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="space-y-4 text-brand-green-800 text-sm md:text-base leading-relaxed max-w-xl"
          >
            {/* Split first paragraph to have a giant dropcap */}
            <p className="first-letter:text-6xl first-letter:font-black first-letter:text-[#1A1A1A] first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:leading-none">
              {INTRO_SECTION.content.split("\n\n")[0]}
            </p>
            {INTRO_SECTION.content.split("\n\n").slice(1).map((para, idx) => (
              <p key={idx} className="font-serif leading-relaxed">{para}</p>
            ))}
          </motion.div>

          {/* Slogans Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6 flex flex-wrap gap-3"
          >
            {INTRO_SECTION.footer_slogans.map((slogan, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F3F1EF] hover:bg-[#1A1A1A] hover:text-[#FDFCFB] border border-brand-green-100 rounded-none text-xs font-bold tracking-wider transition-all duration-300 shadow-xs cursor-default"
              >
                <BookOpen className="w-3.5 h-3.5 text-brand-green-900" />
                {slogan}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero Image Container */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-none overflow-hidden shadow-2xl border-2 border-brand-green-100 bg-[#EEE] aspect-[4/3] lg:aspect-[1] xl:aspect-[4/3]"
          >
            <img
              src={heroImage}
              alt="格致高中圖書館畢業季"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            className="absolute -bottom-6 -right-6 md:right-4 bg-[#1A1A1A] text-[#FDFCFB] rounded-none p-5 shadow-2xl max-w-[200px] border border-brand-green-100 hidden sm:block pointer-events-none"
          >
            <div className="flex gap-2">
              <Navigation className="w-5 h-5 flex-shrink-0 mt-0.5 transform rotate-45 text-[#FDFCFB]" />
              <div>
                <p className="font-bold text-sm tracking-tight font-serif mb-1">青春不散場</p>
                <p className="text-[10px] font-sans font-medium text-white/80 leading-relaxed">
                  帶上閱讀留下的光，勇敢走向更遠的地方。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

