import { CareerPathCardProps } from "../quiz-types";

const CareerPathCard: React.FC<CareerPathCardProps> = ({
  pathName,
  reason,
  careers,
  onClick
}) => {
  return (
    <div
      className="relative group w-full max-w-sm h-[440px] cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-xl border-4 border-primary/50 group-hover:border-secondary group-hover:border-6"></div>

      <div className="relative z-10 rounded-xl p-6 w-full h-full text-defaulttextcolor shadow-lg group-hover:shadow-2xl">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="font-bold text-2xl group-hover:text-secondary text-primary mb-4">
              {pathName}
            </h2>
            <p
              className="text-sm text-defaulttextcolor dark:text-defaulttextcolor/70 leading-relaxed mt-2 line-clamp-3"
              title={reason}
            >
              {reason}
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg group-hover:text-secondary group-hover:border-secondary text-primary font-semibold mb-2 border-l-4 border-primary pl-3">
              Кариери в тази сфера
            </h4>
            <ul className="list-none space-y-2">
              {careers.map((career, index) => (
                <li
                  key={index}
                  className="bg-white/10 py-1 px-3 rounded-lg text-defaulttextcolor dark:text-defaulttextcolor/70 text-sm hover:bg-pink-600 transition"
                >
                  {career}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathCard;
