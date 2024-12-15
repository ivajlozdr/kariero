import React, { useState } from "react";

// CareerCard Component
const CareerCard: React.FC<{
  title: string;
  description: string;
  skills: string[]; // Expecting an array of skill names
}> = ({ title, description, skills }) => {
  const [isHovered, setIsHovered] = useState(false);

  const visibleSkills = isHovered ? skills : skills.slice(0, 5);

  return (
    <div
      className="career-card border rounded-lg shadow-lg p-6 w-full max-w-xs h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="career-header flex flex-col justify-between h-full">
        <div>
          <h3 className="career-title font-semibold text-2xl">{title}</h3>
          <p
            className="career-description text-sm text-gray-600 mt-2 cursor-pointer line-clamp-3"
            title={description}
          >
            {description}
          </p>
        </div>
        <div className="skills-list">
          <h4 className="text-lg font-semibold mb-2">Skills Needed:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            {visibleSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          {skills.length > 5 && !isHovered && (
            <span className="text-sm text-blue-500 cursor-pointer">
              Hover to see more skills
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
