import { motion } from "framer-motion";

export default function EmptyState({ query }: { query: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16 px-4"
    >
      <div className="mx-auto w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
        <i className="ti ti-star h-8 w-8 text-slate-400 dark:text-slate-500" />
      </div>
      <h3 className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-2">
        {query ? "Няма намерени резултати" : "Нямате запазени професии"}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
        {query
          ? `Не намерихме професии, които съответстват на "${query}". Опитайте с друго търсене.`
          : "Добавете професии към вашите любими, за да ги видите тук и да получите бърз достъп до тях."}
      </p>
      <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium transition-colors">
        Разгледайте професии
      </button>
    </motion.div>
  );
}
