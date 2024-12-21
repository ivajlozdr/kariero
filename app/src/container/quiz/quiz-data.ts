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
    answerType: "MultipleChoice",
    options: ["Структурирана", "Гъвкава"]
  },
  {
    id: 11,
    question: "Кое от тези най-добре Ви описва?",
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
    options: ["Бърза и динамична", "Стабилна и предсказуема"]
  },
  {
    id: 17,
    question: "Какво е най-високото ниво на образование, което сте завършили?",
    category: "Preferences",
    field: "EducationLevel",
    answerType: "MultipleChoice",
    options: ["Основно", "Средно", "Бакалавър", "Магистър", "Докторант"]
  },
  {
    id: 18,
    question: "Какъв тип професионална роля искате да заемате след 5 години?",
    category: "Preferences",
    field: "CareerGoals",
    answerType: "MultipleChoice",
    options: ["Лидерска роля", "Технически експерт", "Креативна позиция"]
  },
  {
    id: 19,
    question:
      "Какъв тип дейности в работата ви носят най-голямо удовлетворение?",
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
 * Всеки отговор е свързан с тегло, което представлява неговата стойност.
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
