import { useState, useEffect } from "react";
import type {
  Project, Category, SortField, SortOrder
} from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- STATE ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERi CEKME ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TURETILMIS (DERIVED) VERi ---
  const filtered = applyFilters(
    projects, search, category,
    sortField, sortOrder
  );

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  // --- UI ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projelerim
        </h1>

        {/* HATA DURUMU */}
        {error && (
          <Alert variant="error" title="Hata">
            {error}
          </Alert>
        )}

        {/* FILTRELER */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Input id="search"
            placeholder="Proje ara..."
            value={search}
            onChange={e => setSearch(e.target.value)} />

          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <Button key={cat}
                variant={category === cat ? "primary" : "ghost"}
                size="sm"
                onClick={() => setCategory(cat)}>
                {cat === "all" ? "Tümü" : cat}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <select value={sortField}
              onChange={e => setSortField(e.target.value as SortField)}
              className="border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white">
              <option value="year">Yıl</option>
              <option value="title">Başlık</option>
            </select>
            <Button variant="ghost" size="sm"
              onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}>
              {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </Button>
          </div>
        </div>

        {/* YUKLENIYOR */}
        {loading && (
          <p className="text-center text-gray-500">
            Yükleniyor...
          </p>
        )}

        {/* PROJE LISTESI */}
        {!loading && filtered.length === 0 && (
           <p className="text-center text-gray-500">
             Eşleşen proje bulunamadı.
           </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <Card key={project.id}
              variant="elevated"
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} ekran görüntüsü`}>
              <p className="text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map(t => (
                  <span key={t}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {project.year} &middot; {project.category}
              </p>
            </Card>
          ))}
        </div>

        {/* SONUC SAYISI */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          {filtered.length} / {projects.length} proje gösteriliyor
        </p>
      </div>
    </div>
  );
}
