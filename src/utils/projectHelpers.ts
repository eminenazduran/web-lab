import type {
  Project, Category, SortField, SortOrder
} from "../types/project";

// --- Arama filtresi ---
export function filterBySearch(
  projects: Project[],
  query: string
): Project[] {
  if (!query.trim()) return projects;

  const lower = query.toLowerCase();
  return projects.filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower) ||
    p.tech.some(t =>
      t.toLowerCase().includes(lower)
    )
  );
}

// --- Kategori filtresi ---
export function filterByCategory(
  projects: Project[],
  category: Category | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter(
    p => p.category === category
  );
}

// --- Siralama ---
export function sortProjects(
  projects: Project[],
  field: SortField,
  order: SortOrder
): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (field === "year") {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title, "tr");
  });

  return order === "desc"
    ? sorted.reverse()
    : sorted;
}

// --- Hepsini birlestir ---
export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  result = sortProjects(result, sortField, sortOrder);
  return result;
}
