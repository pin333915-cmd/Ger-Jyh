import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOOK_RECOMMENDATIONS } from "../data/newsletterData";
import { Book } from "../types";
import { Search, Filter, Bookmark, BookOpen, Clock, X, Check, BookmarkCheck, ShoppingBag } from "lucide-react";

export default function BookListSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [borrowModalOpen, setBorrowModalOpen] = useState<boolean>(false);
  const [borrowSuccess, setBorrowSuccess] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>("");
  const [studentId, setStudentId] = useState<string>("");
  const [selectedBookForBorrow, setSelectedBookForBorrow] = useState<Book | null>(null);

  // Load favorites and borrowed books from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("gezhi_favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (bookId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: string[];
    if (favorites.includes(bookId)) {
      updated = favorites.filter((id) => id !== bookId);
    } else {
      updated = [...favorites, bookId];
    }
    setFavorites(updated);
    localStorage.setItem("gezhi_favorites", JSON.stringify(updated));
  };

  const handleOpenBorrow = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedBookForBorrow(book);
    setBorrowModalOpen(true);
    setBorrowSuccess(false);
  };

  const handleConfirmBorrow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBookForBorrow) return;

    // Save borrow record to localStorage
    const savedBorrows = localStorage.getItem("gezhi_borrows") || "[]";
    const borrows = JSON.parse(savedBorrows);
    const newBorrow = {
      id: Math.random().toString(36).substr(2, 9),
      bookId: selectedBookForBorrow.id,
      title: selectedBookForBorrow.title,
      author: selectedBookForBorrow.author,
      borrowDate: new Date().toLocaleDateString(),
      dueDate: "2026/08/08", // Summer reading deadline from newsletter!
      studentName: studentName || "格致讀書生",
      studentId: studentId || "GZ2026-X",
    };
    borrows.push(newBorrow);
    localStorage.setItem("gezhi_borrows", JSON.stringify(borrows));

    setBorrowSuccess(true);
    setTimeout(() => {
      setBorrowModalOpen(false);
      setBorrowSuccess(false);
      setSelectedBookForBorrow(null);
      // Trigger shelf update event
      window.dispatchEvent(new Event("shelf-updated"));
    }, 2500);
  };

  const categories = ["全部", "自我認識、成長", "生涯探索", "成長小說", "我的想讀"];

  const filteredBooks = BOOK_RECOMMENDATIONS.filter((book) => {
    // Matching categories
    const matchesCategory =
      selectedCategory === "全部" ||
      (selectedCategory === "我的想讀" && favorites.includes(book.id)) ||
      book.category === selectedCategory;

    // Matching query
    const matchesQuery =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green-100 text-brand-green-800 rounded-md text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          CHINESE LITERATURE RECOMMENDED LIST
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-brand-green-900">
          02 ｜ 畢業季推薦書單
        </h2>
        <p className="text-brand-green-800/80 max-w-2xl mx-auto text-sm leading-relaxed">
          青春長卷，以好書落筆。圖書館特別規劃「寫給即將遠行的你」、「青春與夢想」、「在人生轉彎處閱讀」三大子題，助九年級畢業生在暑期與未來征途，積攢澎湃前行的力量。
        </p>
      </div>

      {/* Control Panel: Search & Filter Tabs */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-brand-green-100/50 mb-10 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-6">
        {/* Scrollable Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 scrollbar-none max-w-full">
          <Filter className="w-4 h-4 text-brand-green-600 flex-shrink-0 mr-1" />
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-brand-green-600 text-white shadow-lg shadow-brand-green-600/20"
                    : "bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-800"
                }`}
              >
                {cat}
                {cat === "我的想讀" && favorites.length > 0 && (
                  <span className="ml-1.5 bg-brand-gold-500 text-brand-green-950 font-bold px-1.5 py-0.5 rounded-full text-[10px]">
                    {favorites.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-green-600/50" />
          <input
            type="text"
            placeholder="搜尋書名、作者..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-brand-green-100 bg-brand-green-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 font-sans text-sm text-brand-green-900 transition-all"
          />
        </div>
      </div>

      {/* Empty State */}
      {filteredBooks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-white rounded-3xl shadow-md border border-brand-green-100/30"
        >
          <Bookmark className="w-12 h-12 text-brand-green-200 mx-auto mb-4" />
          <p className="text-brand-green-800 font-medium font-serif">暫無符合條件的推薦書籍</p>
          <p className="text-xs text-brand-green-800/60 mt-1">
            {selectedCategory === "我的想讀" ? "試著點擊書卡右上角的書籤，珍藏想讀的書單吧！" : "試著清除搜尋條件或更換分類。"}
          </p>
        </motion.div>
      )}

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredBooks.map((book, idx) => {
            const isFav = favorites.includes(book.id);
            return (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setActiveBook(book)}
                className="group relative bg-white hover:bg-brand-green-50/20 rounded-2xl p-6 shadow-md hover:shadow-xl border border-brand-green-100/30 hover:border-brand-green-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Favorite Bookmark */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(book.id, e)}
                  aria-label={isFav ? "移除想讀" : "加入想讀"}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-brand-green-100/50 transition-colors z-10"
                >
                  <Bookmark
                    className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                      isFav ? "fill-brand-gold-500 text-brand-gold-500" : "text-brand-green-600/30"
                    }`}
                  />
                </button>

                <div className="space-y-4">
                  {/* Category Badge */}
                  <span className="inline-block px-2.5 py-1 bg-brand-green-50 group-hover:bg-brand-green-100 text-brand-green-800 rounded-md text-[10px] font-bold tracking-wider">
                    {book.category}
                  </span>

                  {/* Title & Author */}
                  <div>
                    <h3 className="text-base font-bold font-serif text-brand-green-900 group-hover:text-brand-green-700 leading-snug tracking-tight line-clamp-2 pr-5">
                      {book.title}
                    </h3>
                    <p className="text-xs text-brand-green-800/70 mt-1.5 font-sans">
                      {book.author}
                    </p>
                  </div>

                  {/* Extract Quote placeholder */}
                  {book.quote && (
                    <p className="text-xs text-brand-green-800/80 italic font-serif leading-relaxed line-clamp-3 pl-3.5 border-l-2 border-brand-gold-500/30 pt-0.5">
                      「{book.quote}」
                    </p>
                  )}
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-brand-green-50/50 flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-green-600/50">#畢業特別推薦</span>
                  <button
                    onClick={(e) => handleOpenBorrow(book, e)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-green-700 group-hover:text-brand-green-900 hover:underline cursor-pointer"
                  >
                    馬上借閱
                    <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Book details sliding modal */}
      <AnimatePresence>
        {activeBook && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-brand-green-100 relative"
            >
              {/* Top cover color strip */}
              <div className="h-4 bg-gradient-to-r from-brand-green-600 to-brand-green-900" />
              
              <button
                onClick={() => setActiveBook(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-1 bg-brand-green-50 text-brand-green-800 rounded-md text-xs font-bold">
                    {activeBook.category}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-brand-green-900 leading-tight">
                    {activeBook.title}
                  </h3>
                  <p className="text-sm text-brand-green-800/80">作者：{activeBook.author}</p>
                </div>

                {activeBook.quote && (
                  <div className="bg-brand-gold-50 rounded-2xl p-4 border border-brand-gold-100 max-w-full">
                    <p className="text-xs text-brand-gold-600 font-bold uppercase tracking-wider mb-2 font-mono">
                      經典篇章金句 · QUOTE
                    </p>
                    <p className="text-sm font-serif italic text-brand-green-900 leading-relaxed pr-2">
                      「 {activeBook.quote} 」
                    </p>
                  </div>
                )}

                <div className="bg-brand-green-50/50 rounded-2xl p-4 text-xs text-brand-green-800/70 space-y-2 leading-relaxed">
                  <div className="flex gap-2">
                    <Clock className="w-4 h-4 text-brand-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-green-900">學子暑期閱讀優利：</strong>
                      借閱該書即符合「暑寒假圖書借閱計畫」資格，截止還書日期放寬至 <strong className="text-brand-green-900">2026/08/08 (五)</strong>。
                    </span>
                  </div>
                </div>

                {/* Actions in detail */}
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      toggleFavorite(activeBook.id, e);
                    }}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border transition ${
                      favorites.includes(activeBook.id)
                        ? "bg-brand-gold-50 border-brand-gold-500 text-brand-gold-600"
                        : "bg-white border-brand-green-200 text-brand-green-800 hover:bg-brand-green-50"
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${favorites.includes(activeBook.id) ? "fill-brand-gold-500" : ""}`} />
                    {favorites.includes(activeBook.id) ? "已加入想讀" : "加入想讀"}
                  </button>

                  <button
                    onClick={(e) => {
                      handleOpenBorrow(activeBook, e);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-brand-green-600 hover:bg-brand-green-700 text-white shadow-lg shadow-brand-green-600/20 flex items-center justify-center gap-2 transition"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    馬上借閱
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Borrow simulation Modal */}
      <AnimatePresence>
        {borrowModalOpen && selectedBookForBorrow && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl border border-brand-green-200"
            >
              <div className="p-6 relative">
                <button
                  type="button"
                  onClick={() => setBorrowModalOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full text-brand-green-650 hover:bg-brand-green-50 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {borrowSuccess ? (
                  /* Success Screen */
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mx-auto text-brand-green-600">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="w-10 h-10"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-green-900 font-serif">借閱登記成功！</h3>
                      <p className="text-xs text-brand-green-800/80 mt-1">借閱證號及記錄已寫入您的卡片。</p>
                    </div>
                    <div className="bg-brand-green-50 p-4 rounded-xl text-left border border-brand-green-150 relative overflow-hidden text-xs space-y-2">
                      <div className="border-b border-brand-green-250 pb-1.5 mb-1.5 font-bold flex justify-between">
                        <span>《格致書書香館》電子憑證</span>
                        <span className="text-brand-gold-500">2026 夏季限定</span>
                      </div>
                      <p><strong>書名：</strong>《{selectedBookForBorrow.title}》</p>
                      <p><strong>借書人：</strong>{studentName || "格致讀書生"}</p>
                      <p><strong>借閱日：</strong>{new Date().toLocaleDateString()}</p>
                      <p className="text-red-600"><strong>應還日：</strong>2026/08/08 (特別假期展延)</p>
                      {/* Simulated barcode */}
                      <div className="pt-2 text-center">
                        <div className="font-mono text-[10px] tracking-widest text-brand-green-600 font-bold bg-white p-1 inline-block border border-dashed rounded">
                          |||| | ||||| | || |||| | | |||
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Input Register Form */
                  <form onSubmit={handleConfirmBorrow} className="space-y-6">
                    <div className="text-center space-y-2">
                      <span className="text-xs font-bold text-brand-gold-500 font-mono tracking-widest bg-brand-gold-50 px-2.5 py-1 rounded-sm">
                        DIGITAL BOOKSHELF REQUISITION
                      </span>
                      <h3 className="text-xl font-bold font-serif text-brand-green-900">
                        馬上借閱《格致書香館》
                      </h3>
                      <p className="text-xs text-brand-green-800/60 leading-relaxed">
                        您已選定數位圖書《{selectedBookForBorrow.title}》，請登記學號/班級資訊以便取得暑假特殊借書借還延展。
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-green-900 mb-1.5">
                          借書生姓名 / 暱稱
                        </label>
                        <input
                          type="text"
                          required
                          value={studentName}
                          onChange={(e) => setStudentName(e.target.value)}
                          placeholder="請輸入姓名 (例: 江冠毅)"
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 text-brand-green-950"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-green-900 mb-1.5">
                          班級與座號 / 學號
                        </label>
                        <input
                          type="text"
                          required
                          value={studentId}
                          onChange={(e) => setStudentId(e.target.value)}
                          placeholder="例如：八年二班 15號"
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-brand-green-100 bg-brand-green-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 text-brand-green-950"
                        />
                      </div>
                    </div>

                    <div className="bg-brand-gold-50 p-3 rounded-xl border border-brand-gold-100 text-[11px] text-brand-gold-600 leading-relaxed font-sans flex gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-gold-500" />
                      <span>
                        依據本期校刊預告，暑期圖書單人可最多借閱 5 冊，並放寬截止日期至 08/08 暑輔第一週歸還。
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={!studentName || !studentId}
                      className="w-full py-3 rounded-xl font-bold text-xs bg-brand-green-600 disabled:bg-brand-green-100 disabled:text-brand-green-400 hover:bg-brand-green-700 text-white shadow-lg shadow-brand-green-600/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      確認登記並借閱
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
