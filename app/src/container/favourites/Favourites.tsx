import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ListItem from "./components/ListItem";
import EmptyState from "./components/EmptyState";
import { FullCareerDetails } from "../../types_common";
import { fetchFavorites } from "./helper_functions";

export default function Favourites() {
  const [favoritedCareers, setFavoritedCareers] = useState<FullCareerDetails[]>(
    []
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    console.log("Fetching favorites...");
    fetchFavorites(token || "", setFavoritedCareers);
  }, []);

  const removeFromFavorites = (id: string) => {
    setFavoritedCareers(
      favoritedCareers.filter((career) => career.occupation.code !== id)
    );
  };

  const filteredCareers = favoritedCareers.filter((career) => {
    const matchesSearch =
      career.translated.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      career.translated.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "bright")
      return matchesSearch && career.occupation.tags.bright_outlook;

    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Любими професии
            </h1>
            <p className="text-defaulttextcolor/75 dark:text-defaulttextcolor/50 max-w-lg">
              Всички професии, които сте добавили към списъка си с любими,
              можете да откриете тук и да разгледате техните подробности.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white dark:bg-bodybg px-4 py-2 rounded-lg shadow-sm">
            <i className="ti ti-bookmark h-5 w-5 text-xl" />
            <span className="font-medium text-md">
              {favoritedCareers.length} запазени
            </span>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-black/20 dark:bg-white/50"></div>
      </header>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-80">
            <i className="ti ti-search text-lg absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/20 dark:text-white/50" />
            <input
              type="text"
              placeholder="Търсене на професии..."
              className="w-full pl-10 py-2 pr-4 rounded-md bg-white dark:bg-bodybg border-primary/15 dark:border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/15 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="w-full md:w-auto">
            <div className="inline-flex bg-white dark:bg-bodybg border-primary/15 dark:border-primary/10 p-1 rounded-md">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "all"
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                Всички
              </button>
              <button
                onClick={() => setActiveTab("bright")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "bright"
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                Ярко бъдеще
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {filteredCareers.length > 0 ? (
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career) => (
              <ListItem
                key={career.occupation.code}
                career={career}
                onRemove={removeFromFavorites}
              />
            ))}
          </div>
        </AnimatePresence>
      ) : (
        <EmptyState query={searchQuery} />
      )} */}
    </div>
  );
}
