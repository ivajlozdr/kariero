import { CareerPathCardProps } from "../quiz-types";

// Основен компонент на картата на сферата
const CareerPathCard: React.FC<CareerPathCardProps> = ({
  pathName,
  reason,
  careers,
  onClick
}) => {
  return (
    <div
      className="career-path-card border rounded-lg shadow-lg p-6 w-full max-w-md h-[400px] cursor-pointer"
      onClick={onClick}
    >
      <div className="career-path-header flex flex-col justify-between h-full">
        <div>
          <h2 className="path-name font-bold text-2xl">{pathName}</h2>
          <p
            className="path-reason text-sm text-gray-600 mt-2 line-clamp-4"
            title={reason}
          >
            {reason}
          </p>
        </div>
        <div className="careers-list mt-4">
          <h4 className="text-lg font-semibold mb-2">Careers in this Path:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            {careers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerPathCard;
