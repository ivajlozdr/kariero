import { useNavigate } from "react-router-dom";
import { FullCareerDetails } from "../../../types_common";

export interface ListItemProps {
  career: FullCareerDetails;
  onRemove: (id: string) => void;
}

export default function ListItem({ career, onRemove }: ListItemProps) {
  const navigate = useNavigate();

  const formattedDate = career.date
    ? new Date(career.date).toLocaleDateString()
    : "Дата неизвестна";

  return (
    <div className="bg-white dark:bg-bodybg rounded-lg shadow-md overflow-hidden border border-primary/15 dark:border-primary/10 hover:shadow-xl transition-all duration-300 group">
      <div className="p-6 pb-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/15 dark:bg-primary/15 p-3 rounded-xl text-center flex items-center justify-center transition-colors group-hover:bg-primary/20">
              <i className="ti ti-briefcase text-xl h-5 w-5 text-primary dark:text-primary/90" />
            </div>
            <h2 className="text-xl font-semibold text-defaulttextcolor dark:text-white leading-tight">
              {career.translated.title}
            </h2>
          </div>
          <button
            onClick={() => onRemove(career.occupation.code)}
            className="text-danger/70 hover:text-danger dark:text-danger/70 dark:hover:text-danger transition-colors p-1.5 rounded-full hover:bg-danger/10 dark:hover:bg-danger/10"
            aria-label="Remove from favorites"
          >
            <i className="ti ti-trash h-5 w-5 text-xl" />
          </button>
        </div>

        {career.occupation.tags.bright_outlook && (
          <div className="mb-4">
            <div className="flex items-center bg-primary/15 dark:bg-primary/15 text-primary/90 dark:text-primary/90 px-3 py-1.5 rounded-full text-sm font-medium w-fit">
              <i className="ti ti-sun h-4 w-4 mr-1.5" />
              Ярко бъдеще
            </div>
          </div>
        )}

        <div className="mb-4">
          <p className="text-defaulttextcolor/90 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {career.translated.description}
          </p>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-primary/10 dark:border-primary/10 mt-2">
          <div className="flex items-center text-primary/80 dark:text-primary/70 text-sm">
            <i className="ti ti-calendar h-4 w-4 mr-1.5" />
            Запазена на {formattedDate}
          </div>
          <button
            onClick={() => {
              navigate("/app/job/details", {
                state: { fullCareerDetails: career }
              });
            }}
            className="flex items-center text-primary hover:text-primary/80 dark:text-primary/80 dark:hover:text-primary font-medium text-sm transition-colors py-1 px-2 rounded-md hover:bg-primary/10 dark:hover:bg-primary/10"
          >
            Вижте детайли
            <i className="ti ti-chevron-right h-4 w-4 ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
