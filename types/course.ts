export type Course = {
  id: number;
  title: string;
  description?: string;
  chapters: Chapter[];
};

export type Chapter = {
  id: number;
  title: string;
  description?: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: number;
  title: string;
  description?: string;
};
