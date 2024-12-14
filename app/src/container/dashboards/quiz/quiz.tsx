import React, { useState } from "react";

// Define types for question mappings and scores
type QuestionMapping = {
  id: number;
  question: string;
  category: string;
  field: string;
  answerType: "Likert" | "MultipleChoice" | "YesNo" | "Numeric";
  options?: string[]; // For multiple-choice questions
};

interface Scores {
  [key: string]: {
    [field: string]: number | Record<string, number> | string[] | string;
  };
}

// Initial score structure
const initialScores: Scores = {
  RIASEC: {
    Realistic: { HandsOn: 0 },
    Investigative: { ProblemSolving: 0 },
    Artistic: { Creative: 0 },
    Social: {},
    Enterprising: {},
    Conventional: {}
  },
  Preferences: {},
  WorkStyle: {
    StructurePreference: 0,
    Collaboration: 0
  }
};

const QuizComponent: React.FC = () => {
  const [scores, setScores] = useState<Scores>(initialScores);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Updated questions array with the new questions
  const questions: QuestionMapping[] = [
    {
      id: 1,
      question: "Обичате ли да работите с ръцете си или да изграждате неща?",
      category: "RIASEC",
      field: "HandsOn",
      answerType: "Likert"
    },
    {
      id: 2,
      question:
        "Обичате ли да решавате сложни проблеми или да анализирате данни?",
      category: "RIASEC",
      field: "ProblemSolving",
      answerType: "Likert"
    },
    {
      id: 3,
      question:
        "Често ли се чудите как работят нещата или защо се случват определени явления?",
      category: "RIASEC",
      field: "Curiosity",
      answerType: "Likert"
    },
    {
      id: 4,
      question:
        "Обичате ли да създавате неща, като например да пишете, рисувате или проектирате?",
      category: "RIASEC",
      field: "Creative",
      answerType: "Likert"
    },
    {
      id: 5,
      question:
        "Чувствате ли се заредени с енергия, когато помагате на други хора или обучавате нови умения?",
      category: "RIASEC",
      field: "Social",
      answerType: "Likert"
    },
    {
      id: 6,
      question:
        "Бихте ли се наслаждавали на работа с хора за съвместно решаване на проблеми?",
      category: "RIASEC",
      field: "Collaboration",
      answerType: "Likert"
    },
    {
      id: 7,
      question:
        "Обичате ли да ръководите проекти или да убеждавате другите да възприемат вашите идеи?",
      category: "RIASEC",
      field: "Enterprising",
      answerType: "Likert"
    },
    {
      id: 8,
      question:
        "Бихте ли предпочели да вземате решения в лидерска роля вместо да следвате план?",
      category: "RIASEC",
      field: "Enterprising",
      answerType: "Likert"
    },
    {
      id: 9,
      question:
        "Обичате ли да организирате данни, да създавате графици или да работите с детайлни системи?",
      category: "RIASEC",
      field: "Conventional",
      answerType: "Likert"
    },
    {
      id: 10,
      question: "Бихте ли предпочели структурирана работна среда пред гъвкава?",
      category: "WorkStyle",
      field: "StructurePreference",
      answerType: "Likert"
    },
    {
      id: 11,
      question:
        "Кое от тези най-добре ви описва? (Изберете всички, които се отнасят): Аналитичен мислител, Креативен решавач на проблеми, Емпатичен слушател, Организиран до детайли, Уверен лидер, Практически ориентиран работник",
      category: "Preferences",
      field: "PersonalityTypes",
      answerType: "MultipleChoice",
      options: [
        "Аналитичен мислител",
        "Креативен решавач на проблеми",
        "Емпатичен слушател",
        "Организиран до детайли",
        "Уверен лидер",
        "Практически ориентиран работник"
      ]
    },
    {
      id: 12,
      question:
        "Колко удобно се чувствате при работа с технологии, инструменти или машини?",
      category: "RIASEC",
      field: "TechComfort",
      answerType: "Likert"
    },
    {
      id: 13,
      question:
        "Бихте ли предпочели да работите на открито, в офис или в творческо студио?",
      category: "Preferences",
      field: "WorkEnvironment",
      answerType: "MultipleChoice",
      options: ["Открито", "Офис", "Творческо студио"]
    },
    {
      id: 14,
      question:
        "Обичате ли да работите в екип или предпочитате индивидуални задачи?",
      category: "WorkStyle",
      field: "Collaboration",
      answerType: "MultipleChoice",
      options: ["Екип", "Индивидуални задачи"]
    },
    {
      id: 15,
      question:
        "Кое е по-важно за вас в една работа: креативност, стабилност или да помагате на другите?",
      category: "Preferences",
      field: "JobPriority",
      answerType: "MultipleChoice",
      options: ["Креативност", "Стабилност", "Помагане на другите"]
    },
    {
      id: 16,
      question:
        "Развивате ли се най-добре в бърза и динамична среда, или предпочитате стабилен и предсказуем ритъм на работа?",
      category: "WorkStyle",
      field: "WorkEnvironment",
      answerType: "MultipleChoice",
      options: ["Бърза и динамична", "Стабилен и предсказуем"]
    },
    {
      id: 17,
      question:
        "Какво е най-високото ниво на образование, което сте завършили?",
      category: "Preferences",
      field: "EducationLevel",
      answerType: "MultipleChoice",
      options: ["Основно", "Средно", "Висше", "Магистър", "Доктор"]
    },
    {
      id: 18,
      question:
        "Къде виждате себе си професионално след 5 години? (Лидерска роля, технически експерт, креативна позиция и т.н.)",
      category: "Preferences",
      field: "CareerGoals",
      answerType: "MultipleChoice",
      options: ["Лидерска роля", "Технически експерт", "Креативна позиция"]
    },
    {
      id: 19,
      question:
        "Какъв тип работа ви носи най-голямо удовлетворение: да помагате на другите, да решавате проблеми или да създавате нещо осезаемо?",
      category: "RIASEC",
      field: "JobSatisfaction",
      answerType: "MultipleChoice",
      options: [
        "Помагате на другите",
        "Решавате проблеми",
        "Създавате нещо осезаемо"
      ]
    },
    {
      id: 20,
      question:
        "Ако можехте да имате каквато и да е работа, без да се притеснявате за пари или квалификации, каква би била тя?",
      category: "Preferences",
      field: "IdealJob",
      answerType: "MultipleChoice",
      options: ["Изберете вашия идеален тип работа"]
    }
  ];

  // Likert scale options with weights
  const likertScale = [
    { label: "Strongly Agree", weight: 3 },
    { label: "Agree", weight: 2 },
    { label: "Slightly Agree", weight: 1 },
    { label: "Neutral", weight: 0 },
    { label: "Slightly Disagree", weight: -1 },
    { label: "Disagree", weight: -2 },
    { label: "Strongly Disagree", weight: -3 }
  ];

  const handleAnswer = (weight: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const { category, field } = currentQuestion;

      // Log the current score before updating
      console.log(
        `Before update - Category: ${category}, Field: ${field}, Current Score:`,
        scores[category][field]
      );

      setScores((prevScores) => {
        const currentFieldValue =
          typeof prevScores[category][field] === "number"
            ? (prevScores[category][field] as number)
            : 0;

        const newScores = {
          ...prevScores,
          [category]: {
            ...prevScores[category],
            [field]: currentFieldValue + weight
          }
        };

        // Log the new score after update
        console.log(
          `After update - Category: ${category}, Field: ${field}, New Score:`,
          newScores[category][field]
        );

        return newScores;
      });

      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleMultipleChoiceAnswer = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
      const { category, field, answerType } = currentQuestion;

      // Log the current score before updating
      console.log(
        `Before update - Category: ${category}, Field: ${field}, Current Score:`,
        scores[category]?.[field]
      );

      setScores((prevScores: Scores): Scores => {
        // Clone the existing category or initialize an empty object
        const categoryData = prevScores[category] || {};

        if (answerType === "MultipleChoice") {
          // Ensure `selectedOptions` is always an array
          const selectedOptions: string[] = Array.isArray(categoryData[field])
            ? categoryData[field]
            : [];

          // Toggle the selected option
          const newSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((item) => item !== option)
            : [...selectedOptions, option];

          return {
            ...prevScores,
            [category]: {
              ...categoryData,
              [field]: newSelectedOptions
            }
          };
        } else if (answerType === "Likert") {
          return {
            ...prevScores,
            [category]: {
              ...categoryData,
              [field]: option // Assuming `option` is a string
            }
          };
        }

        // Return the previous scores if no updates were made
        return prevScores;
      });

      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      {questions[currentQuestionIndex] ? (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].answerType === "Likert" && (
            <div>
              {likertScale.map((option) => (
                <button
                  key={option.weight}
                  onClick={() => handleAnswer(option.weight)}
                  className="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
          {questions[currentQuestionIndex].answerType === "MultipleChoice" && (
            <div>
              {questions[currentQuestionIndex].options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleMultipleChoiceAnswer(option)}
                  className="button"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2>Благодарим ви за попълването на въпросника!</h2>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
