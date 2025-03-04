import { QuestionMapping, Scores } from "./quiz-types";
//reee
/**
 * Масив от въпроси за теста, използвани за оценка на потребителя. Всеки въпрос
 * включва уникален ID, текста на въпроса, категорията му и типа на очаквания отговор.
 *
 * @type {QuestionMapping[]}
 */
export const questions: QuestionMapping[] = [
  {
    id: 1,
    question: "Обичам ръчно да изработвам неща.",
    category: "RIASEC",
    field: "HandsOn",
    answerType: "Likert"
  },
  {
    id: 2,
    question: "Обичам да решавам сложни проблеми или да анализирам данни.",
    category: "RIASEC",
    field: "ProblemSolving",
    answerType: "Likert"
  },
  {
    id: 3,
    question:
      "Често се чудя как работят неща или защо се случват определени явления.",
    category: "RIASEC",
    field: "Curiosity",
    answerType: "Likert"
  },
  {
    id: 4,
    question:
      "Обичам да създавам неща, като например да пиша, да рисувам или да проектирам.",
    category: "RIASEC",
    field: "Creative",
    answerType: "Likert"
  },
  {
    id: 5,
    question: "Чувствам се зареден с енергия, когато помагам на други хора.",
    category: "RIASEC",
    field: "Social",
    answerType: "Likert"
  },
  {
    id: 6,
    question:
      "Наслаждавам се на работа с хора за съвместно решаване на проблеми.",
    category: "RIASEC",
    field: "Collaboration",
    answerType: "Likert"
  },
  {
    id: 7,
    question:
      "Обичам да ръководя проекти или да убеждавам другите да възприемат моите идеи.",
    category: "RIASEC",
    field: "Enterprising",
    answerType: "Likert"
  },
  {
    id: 8,
    question:
      "Предпочитам да взимам решения като лидер вместо да следвам чужди инструкции.",
    category: "RIASEC",
    field: "Enterprising",
    answerType: "Likert"
  },
  {
    id: 9,
    question:
      "Обичам да работя организирано по предварително създаден от мен график.",
    category: "RIASEC",
    field: "Conventional",
    answerType: "Likert"
  },
  {
    id: 10,
    question: "Предпочитам работната ми среда да бъде:",
    category: "WorkStyle",
    field: "StructurePreference",
    answerType: "MultipleChoice",
    options: ["Структурирана", "Гъвкава"]
  },
  {
    id: 11,
    question: "Най-добре мога да се опиша като:",
    category: "Preferences",
    field: "PersonalityTypes",
    answerType: "MultipleChoice",
    options: [
      "Аналитичен мислител",
      "Човек, креативно решаващ проблеми",
      "Емпатичен слушател",
      "Организиран до детайли",
      "Уверен лидер",
      "Практически ориентиран работник"
    ]
  },
  {
    id: 12,
    question: "Чувствам се уверен при работа с технологични устройства.",
    category: "RIASEC",
    field: "TechComfort",
    answerType: "Likert"
  },
  {
    id: 13,
    question: "Бих предпочел да работя в/на: ",
    category: "Preferences",
    field: "WorkEnvironment",
    answerType: "MultipleChoice",
    options: ["Открито", "Офис", "Творческо студио"]
  },
  {
    id: 14,
    question: "Предпочитам да се занимавам с:",
    category: "WorkStyle",
    field: "Collaboration",
    answerType: "MultipleChoice",
    options: ["Екипна работа", "Индивидуални задачи"]
  },
  {
    id: 15,
    question: "За мен, най-важно в една работа е:",
    category: "Preferences",
    field: "JobPriority",
    answerType: "MultipleChoice",
    options: ["Креативност", "Стабилност", "Помагане на другите"]
  },
  {
    id: 16,
    question: "Развивам се най-добре в работна атмосфера, която е:",
    category: "WorkStyle",
    field: "WorkEnvironment",
    answerType: "MultipleChoice",
    options: ["Бърза и динамична", "Стабилна и предсказуема"]
  },
  {
    id: 17,
    question: "Най-високата образователна степен, която съм завършил, е:",
    category: "Preferences",
    field: "EducationLevel",
    answerType: "MultipleChoice",
    options: ["Основно", "Средно", "Бакалавър", "Магистър", "Докторант"]
  },
  {
    id: 18,
    question: "След 5 години, виждам себе си като",
    category: "Preferences",
    field: "CareerGoals",
    answerType: "MultipleChoice",
    options: ["Лидер", "Технически експерт", "Творец"]
  },
  {
    id: 19,
    question: "Най-голямо удоволствие изпитвам от:",
    category: "Preferences",
    field: "JobSatisfaction",
    answerType: "MultipleChoice",
    options: [
      "Решаване на сложни проблеми",
      "Създаване на нещо ново и иновативно",
      "Работа с данни и анализи",
      "Придобиване на нови знания и изследване"
    ]
  }
];

/**
 * Likert скала, използвана за въпроси, изискващи съгласие/несъгласие.
 * Всеки отговор има своя тежест, която представлява неговата стойност.
 *
 * @type {Array<{label: string, weight: number}>}
 */
export const likertScale = [
  { label: "Напълно съгласен", weight: 3 },
  { label: "Съгласен", weight: 2 },
  { label: "Неутрален", weight: 0 },
  { label: "Несъгласен", weight: -2 },
  { label: "Напълно несъгласен", weight: -3 }
];

/**
 * Начално състояние на оценките, използвано за проследяване на отговорите на потребителя за всяка категория.
 * Категориите `RIASEC` и `WorkStyle` имат предварително дефинирани структури, докато `Preferences` е празно в началото.
 *
 * @type {Scores}
 */
export const initialScores: Scores = {
  RIASEC: {
    Realistic: {},
    Investigative: {},
    Artistic: {},
    Social: {},
    Enterprising: {},
    Conventional: {}
  },
  Preferences: {},
  WorkStyle: {
    StructurePreference: "",
    Collaboration: "",
    WorkEnvironment: ""
  }
};
