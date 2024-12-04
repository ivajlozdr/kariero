import React from "react";

const CareerCard: React.FC<{
  title: string;
  description: string;
  salary: string;
  skills: string;
}> = ({ title, description, salary, skills }) => {
  return (
    <div className="career-card">
      <h3 className="career-title">{title}</h3>
      <p className="career-description">{description}</p>
      <p className="career-salary">Salary: {salary}</p>
      <p className="career-skills">Skills: {skills}</p>
    </div>
  );
};

const Careers: React.FC = () => {
  const careers = [
    {
      title: "Software Engineer",
      description: "Develop software applications.",
      salary: "$80,000 - $120,000",
      skills: "JavaScript, Python, Java"
    },
    {
      title: "Data Analyst",
      description: "Analyze data to provide insights.",
      salary: "$60,000 - $90,000",
      skills: "Excel, SQL, Python"
    },
    {
      title: "Product Manager",
      description: "Oversee product development.",
      salary: "$70,000 - $110,000",
      skills: "Agile, Communication, Marketing"
    }
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-4">
      {careers.map((career, index) => (
        <CareerCard
          key={index}
          title={career.title}
          description={career.description}
          salary={career.salary}
          skills={career.skills}
        />
      ))}
    </div>
  );
};

export default Careers;
