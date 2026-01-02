export interface Diary {
  id: string;
  slug: string;
  date: string;
  title: string;
  preview: string;
  content: string;
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
  content: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
}

