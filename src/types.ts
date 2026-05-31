export interface Book {
  id: string;
  title: string;
  author: string;
  category: "自我認識、成長" | "生涯探索" | "成長小說";
  quote?: string;
  isFavorite?: boolean;
}

export interface ClassRank {
  rank: number;
  className: string;
  count: number;
}

export interface StudentRank {
  rank: number;
  className: string;
  name: string;
  count: number;
}

export interface Challenge {
  id: string;
  text: string;
}

export interface PassportRecord {
  id: string;
  title: string;
  author: string;
  thoughts: string;
  date: string;
  status: "verified" | "pending";
}

export interface Coupon {
  id: string;
  code: string;
  amount: number;
  dateCreated: string;
  expiryDate: string;
}
