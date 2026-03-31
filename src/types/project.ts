// Kategori tipleri
export type Category =
  | "frontend"
  | "fullstack"
  | "backend";

// Siralama secenekleri
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

// Proje veri modeli
export interface Project {
  readonly id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
}

// Filtre durumu
export interface FilterState {
  search: string;
  category: Category | "all";
  sortField: SortField;
  sortOrder: SortOrder;
}
