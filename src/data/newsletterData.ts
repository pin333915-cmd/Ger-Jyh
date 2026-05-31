import { Book, ClassRank, StudentRank, Challenge } from "../types";

export const NEWSLETTER_VERSION = "第 327 期";
export const NEWSLETTER_DATE = "2026.June";
export const NEWSLETTER_TITLE = "青春不散場・夢想正啟航";

export const INTRO_SECTION = {
  title: "畢業，是青春最溫柔的一次轉身",
  content: `蟬鳴聲漸漸響起，六月的微風輕拂過校園的每個角落，提醒著我們，這是一個充滿離別與希望的季節。校園三年的回憶，彷彿還停留在昨天剛踏入校門的那一刻。那些在走廊上的嬉鬧、在教室裡的挑燈夜戰，還有圖書館裡靜靜陪伴你的時光，都將成為青春最珍貴的書籤。

親愛的畢業生，恭喜你們即將展開新的旅程！圖書館很榮幸能成為你們青春歲月裡的一個寧靜港灣。未來的路或許充滿未知與挑戰，但請記得，「閱讀」永遠是你們人生旅途上最堅實的力量。當你感到迷茫時，總有一本書能為你指引方向；當你感到疲憊時，總有一段文字能溫暖你的心靈。

願你們帶著在這裡汲取的知識與勇氣，展翅高飛。畢業，不是結束，而是青春最溫柔的一次轉身。`,
  footer_slogans: ["寫給即將遠行的你", "青春與夢想書單", "在人生轉彎處閱讀"],
};

export const BOOK_RECOMMENDATIONS: Book[] = [
  {
    id: "b1",
    title: "恭喜畢業",
    author: "喬治.桑德斯",
    category: "自我認識、成長",
    quote: "在你的一生中，最讓你感到遺憾的，往往是那些你沒有展現仁慈的時刻。試著成為一個更溫柔、更有愛心的人。",
  },
  {
    id: "b2",
    title: "好奇心: 生命不在於找答案, 而是問問題",
    author: "布萊恩‧葛瑟、查爾斯‧費希曼",
    category: "自我認識、成長",
    quote: "好奇心是我們探索世界的指南針。生命的精彩之處不只在於找到終點的標準答案，而在於沿途不停發問的旅程。",
  },
  {
    id: "b3",
    title: "高績效心智：全新聰明工作學",
    author: "莫頓.韓森",
    category: "自我認識、成長",
    quote: "專注於最核心的幾件事，並把每件事做到極致。這不是要你高喊『加油』，而是要你採取『聰明工作』的策略。",
  },
  {
    id: "b4",
    title: "原子習慣",
    author: "詹姆斯.克利爾",
    category: "自我認識、成長",
    quote: "每天進步 1%，一年後你將會成長 37 倍。微小的改變，將累積成令人驚嘆的巨大複利效應。",
  },
  {
    id: "b5",
    title: "那些學校忘了教你的事",
    author: "人生學校",
    category: "生涯探索",
    quote: "如何面對悲傷、如何抉擇職業、如何維繫一段美好關係——這些人生最重要的課題，都在這堂沒有學分的課程中。",
  },
  {
    id: "b6",
    title: "給中學生的生涯探索術",
    author: "謝其濬",
    category: "生涯探索",
    quote: "生涯規劃是一場冒險，而不是填空題。你要試著去尋找自己的火花，大膽嘗試各式各樣的可能性。",
  },
  {
    id: "b7",
    title: "沒定性是種優勢",
    author: "艾蜜莉.霍布尼克",
    category: "生涯探索",
    quote: "你不需要被單一職業或專長定型！在這個瞬息萬變的世界，多元發展的『多潛能者』將擁有最靈活的優勢。",
  },
  {
    id: "b8",
    title: "不讀名校，人生更好",
    author: "法蘭克.布魯尼",
    category: "生涯探索",
    quote: "學校的名氣並不能決定你的未來價值。起跑點上的光芒只是短暫的，你所展現的求知欲與毅力才是終身財富。",
  },
  {
    id: "b9",
    title: "生命中的美好缺憾",
    author: "約翰.葛林",
    category: "成長小說",
    quote: "有時候，這個世界並不完美，但我們依然能在短暫而有限的時空裡，編織出屬於彼此無限精彩的故事與愛。",
  },
  {
    id: "b10",
    title: "忘記告訴你的那些事",
    author: "喬伊斯.卡格.奧茲",
    category: "成長小說",
    quote: "藏在青春暗角裡的那些秘密與焦慮，都是每個人在成長的道路上必經的洗禮。掀開迷霧，你會看見真实的自己。",
  },
  {
    id: "b11",
    title: "後。青春期的詩",
    author: "九把刀",
    category: "成長小說",
    quote: "誰說青春沒有結尾的樂章？即便告別，我們依然能將那些年奮力奔逐的夢想，譜寫成永不退色、一往無前的詩歌。",
  },
  {
    id: "b12",
    title: "深夜加油站遇見蘇格拉底",
    author: "丹.米爾曼",
    category: "成長小說",
    quote: "生命只有在此時、此刻、此地。放下頭腦的重擔與焦慮，去享受生命當下旅程中的每一個呼吸與體驗。",
  },
];

export const CLASS_LEADERBOARD: ClassRank[] = [
  { rank: 1, className: "七年三班", count: 57 },
  { rank: 2, className: "八年二班", count: 54 },
  { rank: 3, className: "七年四班", count: 48 },
];

export const STUDENT_LEADERBOARD: StudentRank[] = [
  { rank: 1, className: "八年二班", name: "江冠毅", count: 54 },
  { rank: 2, className: "七年四班", name: "陳聖勳", count: 27 },
  { rank: 3, className: "七年六班", name: "陳奕璋", count: 21 },
  { rank: 4, className: "八年七班", name: "陳弈甫", count: 21 }, // Tied with 3rd place!
];

export const SEL_EXHIBITION = {
  title: "SEL－心靈書展",
  subtitle: "遇見更好的自己．探索內心對話的港灣",
  period: "4月27日至5月4日",
  description: `為響應423世界閱讀日，本校圖書館舉辦「SEL－心靈書展」主題活動，邀請全校師生一起走進閱讀與心靈對話的世界。
展場中，一本本關於情緒、成長與自我探索的書籍整齊陳列，不少同學駐足翻閱，有人輕聲討論書中的內容，也有人靜靜坐在角落閱讀。活動期間同步結合文化幣推廣，讓學生能更輕鬆地將喜愛的書帶回家。
為了增加參與感，現場也規劃學習單與摸彩贈書活動，同學們穿梭於書架之間，認真尋找答案、分享閱讀心得，圖書館裡不時傳來驚喜與笑聲。短短一週，累計參觀達1,287人次，讓閱讀不只是翻開一本書，更成為校園裡最溫暖的風景。`,
  trivia: [
    { label: "展覽期間", value: "2026.04.27 - 05.04" },
    { label: "累計參觀", value: "1,287 人次" },
    { label: "活動亮點", value: "心靈探索、學習單挑戰、摸彩抽書" },
    { label: "響應節日", value: "423 世界閱讀日" },
  ]
};

export const SUMMER_READING = {
  title: "暑假閱讀預告",
  slogan: "翻轉暑假！彎道超車",
  description: `漫長的暑假即將到來，除了盡情放鬆、充電之外，這也是拓展視野、充實自我的最佳時機！不論你是為了完成暑假閱讀心得作業，還是想利用這段完整的時間好好閱讀幾本一直想看的小說、科普或勵志書，學校圖書館都已經準備了滿滿的好書等著你！`,
  rules: [
    { label: "開放借閱期間", detail: "2026/6/22 至 6/30，可延長歸還時間 & 增加借閱冊數。" },
    { label: "暑期借閱冊數", detail: "每人最多可借閱 5 冊。" },
    { label: "歸還截止日期", detail: "請於暑輔第一週 2026/08/08 (五) 前全數歸還。" }
  ],
  tip: "作業免煩惱，圖書館特別規劃了「暑期推薦書單專區」，直接來這區挑選準沒錯！"
};

export const EBOOK_RESOURCES = [
  {
    name: "國立公共資訊圖書館 Udn讀書館",
    desc: "整合眾多實用電子書與暢銷雜誌，提供格致學生豐富的線上閱讀體驗。",
    link: "https://reading.udn.com/lib/nlpi",
  },
  {
    name: "新北E書房教育雲電子書整合服務平台",
    desc: "專屬新北市學子的線上書房，一鍵登入即可暢讀萬本繪本與叢書。",
    link: "https://ebook.ntpc.edu.tw/",
  },
  {
    name: "HyRead / iRead 電子書平台",
    desc: "本校師生常用熱門名著隨點隨看、圖解與影音資源豐富，提供完整的閱讀App與使用教學指南。",
    link: "https://ntpc.hyread.com.tw/",
  }
];

export const PASSPORT_ACTIVITY = {
  title: "暑期閱讀護照活動",
  description: "同學除了暑假的閱讀心得作業，可利用暑假期間寫作更多的閱讀心得至圖書館完成閱讀護照認證。",
  reward: "每認證通過一篇即可兌換合作社折價券 $20 元（無上限！）。",
  detailsLinkPlaceholder: "閱讀護照活動辦法細則"
};

export const ART_EXHIBITION = {
  title: "【超現實主義: 對話中的世界】",
  quote: "「夢很荒謬，藝術更自由，值得去看看。」",
  description: "鼓勵同學利用假日或暑假前往參觀，透過美術館展覽拓展視野、培養美感素養，也為藝術創作、閱讀寫作與自主學習累積靈感。",
  link: "https://www.tfam.museum"
};

export const JUNE_CHALLENGE: Challenge[] = [
  { id: "c1", text: "去一間沒去過的圖書館" },
  { id: "c2", text: "借一本「不是為了考試」的書" },
  { id: "c3", text: "拍下一張你最喜歡的閱讀角落" },
  { id: "c4", text: "和朋友交換一本書" },
  { id: "c5", text: "畢業生在畢業前，好好看完一本書" }
];
