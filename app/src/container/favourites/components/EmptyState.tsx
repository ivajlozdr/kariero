import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EmptyState({ query }: { query: string }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 max-w-md mx-auto"
    >
      <div className="bg-bodybg rounded-2xl p-8 shadow-lg border border-bodybglighter dark:border-bodybg2">
        <div className="relative h-32 mb-6">
          {query ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 dark:bg-primary/30 rounded-full shadow-inner" />
                <i className="ti ti-search text-5xl text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary/40 to-secondary/20 dark:bg-secondary/30 rounded-full flex items-center justify-center shadow-sm"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, -3, 0]
                  }}
                  transition={{
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "reverse"
                    },
                    scale: { duration: 0.3 }
                  }}
                >
                  <span className="text-secondary text-base font-medium">
                    ?
                  </span>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 dark:bg-primary/30 rounded-full shadow-inner" />
                <i className="ti ti-bookmark text-5xl text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary/40 to-secondary/20 dark:bg-secondary/30 rounded-full flex items-center justify-center shadow-sm"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, -3, 0]
                  }}
                  transition={{
                    y: {
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    },
                    scale: { duration: 0.3 }
                  }}
                >
                  <span className="text-secondary text-base font-medium">
                    +
                  </span>
                </motion.div>
              </div>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 text-center">
          {query ? "Няма намерени резултати" : "Нямате запазени професии"}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 mb-6 text-center leading-relaxed">
          {query
            ? `Не намерихме професии, които съответстват на "${query}". Опитайте отново.`
            : "Добавете професии към вашия списък с любими, за да ги видите тук и да получите бърз достъп до тях."}
        </p>

        <motion.button
          onClick={() => navigate("/app/quiz/")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors flex items-center justify-center group"
        >
          Разгледайте професии
          <i className="ti ti-arrow-right ml-2 text-base transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
}
