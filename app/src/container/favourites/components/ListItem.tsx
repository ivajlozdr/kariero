interface Career {
  id: number;
  title: string;
  description: string;
  recommendationReason: string;
  brightOutlook: boolean;
  savedDate: string;
  isFavorite: boolean;
}

interface ListItemProps {
  career: Career;
  onRemove: (id: number) => void;
}

export default function ListItem({ career, onRemove }: ListItemProps) {
  return (
    <div className="bg-white dark:bg-bodybg rounded-lg shadow-md overflow-hidden border border-primary-100 dark:border-bodybg/70 hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg mr-3">
              <i className="ti ti-briefcase h-6 w-6 text-primary dark:text-primary-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {career.title}
            </h2>
          </div>
          <button
            onClick={() => onRemove(career.id)}
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            aria-label="Remove from favorites"
          >
            <i className="ti ti-trash h-5 w-5" />
          </button>
        </div>

        {career.brightOutlook && (
          <div className="mb-3">
            <div className="flex items-center bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium w-fit">
              <i className="ti ti-sun h-4 w-4 mr-1" />
              Bright Outlook
            </div>
          </div>
        )}

        <div className="mb-3">
          <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
            {career.description}
          </p>
        </div>

        <div className="mb-4 bg-primary-50 dark:bg-primary-900/20 p-3 rounded-md">
          <p className="text-gray-700 dark:text-gray-300 text-sm italic">
            <span className="font-medium">Recommended:</span>{" "}
            {career.recommendationReason}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm">
            <i className="ti ti-calendar h-4 w-4 mr-1" />
            Saved on {career.savedDate}
          </div>
          <button className="flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 font-medium text-sm transition-colors">
            View Details
            <i className="ti ti-chevron-right h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
