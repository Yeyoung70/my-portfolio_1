export type Category = 'all' | 'film' | 'planning' | 'brand';

export type Work = {
    id: number;
    title: string;
    sub: string;
    desc: string;
    images: string[];
    videoUrls?: string[];
    category: Category;
  };
  
  export const works: Work[] = [
    {
      id: 1,
      title: "PROJECT TITLE ONE",
      sub: "ART DIRECTION & DESIGN — 2026",
      desc: "ART DIRECTION & DESIGN\nCLIENT NAME — 2026",
      images: ['/images/project1_1.jpg', '/images/project1_2.jpg'],
      category: 'film',
    },
    {
      id: 2,
      title: "PROJECT TITLE TWO",
      sub: "TYPOGRAPHY & IMAGE MAKING — 2025",
      desc: "TYPOGRAPHY & IMAGE MAKING\nCLIENT NAME — 2025",
      images: ['/images/project2_1.jpg'],
      category: 'planning',
    },
    {
      id: 3,
      title: "PROJECT TITLE THREE",
      sub: "VISUAL IDENTITY — 2025",
      desc: "VISUAL IDENTITY\nCLIENT NAME — 2025",
      images: [],
      videoUrls: ["https://www.youtube.com/embed/vOgdiKAgqLM", "https://www.youtube.com/embed/mTdYpVVSOq8",],
      category: 'film',
    },
    {
      id: 4,
      title: "PROJECT TITLE FOUR",
      sub: "ART DIRECTION — 2024",
      desc: "ART DIRECTION\nCLIENT NAME — 2024",
      images: [],
      category: 'brand',
    },
  ];