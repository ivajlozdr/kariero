import { QuestionMapping } from "./quiz-types";

export const questions: QuestionMapping[] = [
  // RIASEC questions
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
    question: "Какво е най-високото ниво на образование, което сте завършили?",
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
  }
];

export const likertScale = [
  { label: "Strongly Agree", weight: 3 },
  { label: "Agree", weight: 2 },
  { label: "Neutral", weight: 0 },
  { label: "Disagree", weight: -2 },
  { label: "Strongly Disagree", weight: -3 }
];

export const hardcodedData = [
  {
    code: "15-2041.00",
    display: "short",
    occupation: {
      code: "15-2041.00",
      title: "Statisticians",
      tags: {
        bright_outlook: true,
        green: false
      },
      description:
        "Develop or apply mathematical or statistical theory and methods to collect, organize, interpret, and summarize numerical data to provide usable information. May specialize in fields such as biostatistics, agricultural statistics, business statistics, or economic statistics. Includes mathematical and survey statisticians.",
      sample_of_reported_job_titles: {
        title: [
          "Database Analyst",
          "Demographer",
          "Education Research Analyst",
          "Mathematical Statistician",
          "Psychometric Consultant",
          "Quantitative Methodologist",
          "Statistical Analyst",
          "Statistical Consultant",
          "Statistical Reporting Analyst",
          "Statistician"
        ]
      },
      also_see: {
        occupation: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.01/",
            code: "15-2041.01",
            title: "Biostatisticians",
            tags: {
              bright_outlook: true,
              green: false
            }
          }
        ]
      },
      updated: {
        partial: false,
        year: 2024,
        resource_updated: [
          {
            title: "Abilities",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Alternate Titles",
            source: "Multiple sources",
            year: 2024
          },
          {
            title: "Detailed Work Activities",
            source: "Analyst",
            year: 2020
          },
          {
            title: "Education",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Interests",
            source: "Machine Learning",
            year: 2023
          },
          {
            title: "Job Zone",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Knowledge",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Sample of Reported Titles",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Skills",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Tasks",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Technology Skills & Tools",
            source: "Analyst",
            year: 2023
          },
          {
            title: "Work Activities",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Context",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Needs",
            source: "Legacy Analyst"
          },
          {
            title: "Work Styles",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Values",
            source: "Analyst",
            year: 2008
          }
        ]
      },
      bright_outlook: {
        description: "This occupation is expected to grow rapidly.",
        category: ["Grow Rapidly"]
      },
      summary_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tasks",
            title: "Tasks"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/technology_skills",
            title: "Technology Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tools_used",
            title: "Tools Used"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tools_technology",
            title: "Tools &amp; Technology"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/knowledge",
            title: "Knowledge"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/skills",
            title: "Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/abilities",
            title: "Abilities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_activities",
            title: "Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/detailed_work_activities",
            title: "Detailed Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_context",
            title: "Work Context"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/job_zone",
            title: "Job Zone"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/education",
            title: "Education"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/interests",
            title: "Interests"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_styles",
            title: "Work Styles"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_values",
            title: "Work Values"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/related_occupations",
            title: "Related Occupations"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/additional_information",
            title: "Sources of Additional Information"
          }
        ]
      },
      details_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tasks",
            title: "Tasks"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/technology_skills",
            title: "Technology Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_used",
            title: "Tools Used"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_technology",
            title: "Tools &amp; Technology"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/knowledge",
            title: "Knowledge"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/skills",
            title: "Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/abilities",
            title: "Abilities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_activities",
            title: "Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/detailed_work_activities",
            title: "Detailed Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_context",
            title: "Work Context"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/job_zone",
            title: "Job Zone"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/education",
            title: "Education"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/interests",
            title: "Interests"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_styles",
            title: "Work Styles"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_values",
            title: "Work Values"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/related_occupations",
            title: "Related Occupations"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/additional_information",
            title: "Sources of Additional Information"
          }
        ]
      },
      custom_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/custom/work_activities_outline",
            title: "Work Activities Outline"
          }
        ]
      }
    },
    tasks: {
      task: [
        {
          id: 8956,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8956",
          statement:
            "Analyze and interpret statistical data to identify significant differences in relationships among sources of information.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: 8958,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8958",
          statement:
            "Evaluate the statistical methods and procedures used to obtain data to ensure validity, applicability, efficiency, and accuracy.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: 8953,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8953",
          statement:
            "Report results of statistical analyses, including information in the form of graphs, charts, and tables.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: 21100,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/21100",
          statement:
            "Determine whether statistical methods are appropriate, based on user needs or research questions of interest.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: 8957,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8957",
          statement:
            "Prepare data for processing by organizing information, checking for inaccuracies, and adjusting and weighting the raw data.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 87
          }
        },
        {
          id: 8966,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8966",
          statement:
            "Develop and test experimental designs, sampling techniques, and analytical methods.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: 8955,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8955",
          statement:
            "Identify relationships and trends in data, as well as any factors that could affect the results of research.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: 20194,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/20194",
          statement:
            "Present statistical and nonstatistical results, using charts, bullets, and graphs, in meetings or conferences to audiences such as clients, peers, and students.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 82
          }
        },
        {
          id: 8961,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8961",
          statement:
            "Design research projects that apply valid scientific techniques, and use information obtained from baselines or historical data to structure uncompromised and efficient analyses.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 82
          }
        },
        {
          id: 8965,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8965",
          statement:
            "Adapt statistical methods to solve specific problems in many fields, such as economics, biology, and engineering.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 81
          }
        }
      ]
    },
    technology_skills: {
      see_all: {
        href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/technology_skills?all=1"
      },
      category: [
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232605",
          title: {
            id: 43232605,
            name: "Analytical or scientific software"
          },
          example: [
            {
              hot_technology: "IBM SPSS Statistics",
              name: "IBM SPSS Statistics"
            },
            {
              name: "Minitab"
            },
            {
              hot_technology: "SAS",
              name: "SAS"
            },
            {
              hot_technology: "The MathWorks MATLAB",
              name: "The MathWorks MATLAB"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232106",
          title: {
            id: 43232106,
            name: "Presentation software"
          },
          example: [
            {
              hot_technology: "Microsoft PowerPoint",
              name: "Microsoft PowerPoint"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232405",
          title: {
            id: 43232405,
            name: "Object or component oriented development software"
          },
          example: [
            {
              hot_technology: "C++",
              name: "C++"
            },
            {
              hot_technology: "Python",
              name: "Python"
            },
            {
              hot_technology: "R",
              name: "R"
            },
            {
              name: "Sun Microsystems Java"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232306",
          title: {
            id: 43232306,
            name: "Data base user interface and query software"
          },
          example: [
            {
              hot_technology: "Amazon Redshift",
              name: "Amazon Redshift"
            },
            {
              hot_technology: "IBM DB2",
              name: "IBM DB2"
            },
            {
              hot_technology: "Microsoft SQL Server",
              name: "Microsoft SQL Server"
            },
            {
              hot_technology: "Structured query language SQL",
              name: "Structured query language SQL"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232307",
          title: {
            id: 43232307,
            name: "Data mining software"
          },
          example: [
            {
              name: "Angoss KnowledgeSEEKER"
            },
            {
              name: "NCR Teradata Warehouse Miner"
            },
            {
              name: "SAS Enterprise Miner"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232304",
          title: {
            id: 43232304,
            name: "Data base management system software"
          },
          example: [
            {
              hot_technology: "Apache Hadoop",
              name: "Apache Hadoop"
            },
            {
              name: "Apache Pig"
            },
            {
              hot_technology: "Teradata Database",
              name: "Teradata Database"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232402",
          title: {
            id: 43232402,
            name: "Development environment software"
          },
          example: [
            {
              name: "Common business oriented language COBOL"
            },
            {
              name: "Formula translation/translator FORTRAN"
            },
            {
              hot_technology: "Microsoft Visual Basic",
              name: "Microsoft Visual Basic"
            },
            {
              hot_technology: "Microsoft Visual Basic for Applications VBA",
              name: "Microsoft Visual Basic for Applications VBA"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43233004",
          title: {
            id: 43233004,
            name: "Operating system software"
          },
          example: [
            {
              hot_technology: "Linux",
              name: "Linux"
            },
            {
              hot_technology: "UNIX",
              name: "UNIX"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232314",
          title: {
            id: 43232314,
            name: "Business intelligence and data analysis software"
          },
          example: [
            {
              hot_technology: "Apache Spark",
              name: "Apache Spark"
            },
            {
              name: "Qlik Tech QlikView"
            },
            {
              hot_technology: "Tableau",
              name: "Tableau"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232110",
          title: {
            id: 43232110,
            name: "Spreadsheet software"
          },
          example: [
            {
              hot_technology: "Microsoft Excel",
              name: "Microsoft Excel"
            }
          ]
        }
      ]
    },
    tools_used: {
      category: [
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211503",
          title: {
            id: 43211503,
            name: "Notebook computers"
          },
          example: [
            {
              name: "Laptop computers"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211507",
          title: {
            id: 43211507,
            name: "Desktop computers"
          },
          example: []
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211508",
          title: {
            id: 43211508,
            name: "Personal computers"
          },
          example: []
        }
      ]
    },
    tools_technology: {
      tools: {
        category: [
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211503",
            title: {
              id: 43211503,
              name: "Notebook computers"
            },
            example: [
              {
                name: "Laptop computers"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211507",
            title: {
              id: 43211507,
              name: "Desktop computers"
            },
            example: []
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211508",
            title: {
              id: 43211508,
              name: "Personal computers"
            },
            example: []
          }
        ]
      },
      technology: {
        see_all: {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_technology?all=1"
        },
        category: [
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232605",
            title: {
              id: 43232605,
              name: "Analytical or scientific software"
            },
            example: [
              {
                hot_technology: "IBM SPSS Statistics",
                name: "IBM SPSS Statistics"
              },
              {
                name: "Minitab"
              },
              {
                hot_technology: "SAS",
                name: "SAS"
              },
              {
                hot_technology: "The MathWorks MATLAB",
                name: "The MathWorks MATLAB"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232106",
            title: {
              id: 43232106,
              name: "Presentation software"
            },
            example: [
              {
                hot_technology: "Microsoft PowerPoint",
                name: "Microsoft PowerPoint"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232405",
            title: {
              id: 43232405,
              name: "Object or component oriented development software"
            },
            example: [
              {
                hot_technology: "C++",
                name: "C++"
              },
              {
                hot_technology: "Python",
                name: "Python"
              },
              {
                hot_technology: "R",
                name: "R"
              },
              {
                name: "Sun Microsystems Java"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232306",
            title: {
              id: 43232306,
              name: "Data base user interface and query software"
            },
            example: [
              {
                hot_technology: "Amazon Redshift",
                name: "Amazon Redshift"
              },
              {
                hot_technology: "IBM DB2",
                name: "IBM DB2"
              },
              {
                hot_technology: "Microsoft SQL Server",
                name: "Microsoft SQL Server"
              },
              {
                hot_technology: "Structured query language SQL",
                name: "Structured query language SQL"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232307",
            title: {
              id: 43232307,
              name: "Data mining software"
            },
            example: [
              {
                name: "Angoss KnowledgeSEEKER"
              },
              {
                name: "NCR Teradata Warehouse Miner"
              },
              {
                name: "SAS Enterprise Miner"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232304",
            title: {
              id: 43232304,
              name: "Data base management system software"
            },
            example: [
              {
                hot_technology: "Apache Hadoop",
                name: "Apache Hadoop"
              },
              {
                name: "Apache Pig"
              },
              {
                hot_technology: "Teradata Database",
                name: "Teradata Database"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232402",
            title: {
              id: 43232402,
              name: "Development environment software"
            },
            example: [
              {
                name: "Common business oriented language COBOL"
              },
              {
                name: "Formula translation/translator FORTRAN"
              },
              {
                hot_technology: "Microsoft Visual Basic",
                name: "Microsoft Visual Basic"
              },
              {
                hot_technology: "Microsoft Visual Basic for Applications VBA",
                name: "Microsoft Visual Basic for Applications VBA"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43233004",
            title: {
              id: 43233004,
              name: "Operating system software"
            },
            example: [
              {
                hot_technology: "Linux",
                name: "Linux"
              },
              {
                hot_technology: "UNIX",
                name: "UNIX"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232314",
            title: {
              id: 43232314,
              name: "Business intelligence and data analysis software"
            },
            example: [
              {
                hot_technology: "Apache Spark",
                name: "Apache Spark"
              },
              {
                name: "Qlik Tech QlikView"
              },
              {
                hot_technology: "Tableau",
                name: "Tableau"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232110",
            title: {
              id: 43232110,
              name: "Spreadsheet software"
            },
            example: [
              {
                hot_technology: "Microsoft Excel",
                name: "Microsoft Excel"
              }
            ]
          }
        ]
      }
    },
    knowledge: {
      element: [
        {
          id: "2.C.4.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.4.a",
          name: "Mathematics",
          description:
            "Knowledge of arithmetic, algebra, geometry, calculus, statistics, and their applications.",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: "2.C.3.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.3.a",
          name: "Computers and Electronics",
          description:
            "Knowledge of circuit boards, processors, chips, electronic equipment, and computer hardware and software, including applications and programming.",
          score: {
            scale: "Importance",
            important: true,
            value: 80
          }
        },
        {
          id: "2.C.7.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.7.a",
          name: "English Language",
          description:
            "Knowledge of the structure and content of the English language including the meaning and spelling of words, rules of composition, and grammar.",
          score: {
            scale: "Importance",
            important: true,
            value: 73
          }
        },
        {
          id: "2.C.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.6",
          name: "Education and Training",
          description:
            "Knowledge of principles and methods for curriculum and training design, teaching and instruction for individuals and groups, and the measurement of training effects.",
          score: {
            scale: "Importance",
            important: false,
            value: 48
          }
        },
        {
          id: "2.C.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.a",
          name: "Administration and Management",
          description:
            "Knowledge of business and management principles involved in strategic planning, resource allocation, human resources modeling, leadership technique, production methods, and coordination of people and resources.",
          score: {
            scale: "Importance",
            important: false,
            value: 45
          }
        },
        {
          id: "2.C.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.e",
          name: "Customer and Personal Service",
          description:
            "Knowledge of principles and processes for providing customer and personal services. This includes customer needs assessment, meeting quality standards for services, and evaluation of customer satisfaction.",
          score: {
            scale: "Importance",
            important: false,
            value: 37
          }
        },
        {
          id: "2.C.4.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.4.d",
          name: "Biology",
          description:
            "Knowledge of plant and animal organisms, their tissues, cells, functions, interdependencies, and interactions with each other and the environment.",
          score: {
            scale: "Importance",
            important: false,
            value: 36
          }
        },
        {
          id: "2.C.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.b",
          name: "Administrative",
          description:
            "Knowledge of administrative and office procedures and systems such as word processing, managing files and records, stenography and transcription, designing forms, and workplace terminology.",
          score: {
            scale: "Importance",
            important: false,
            value: 33
          }
        },
        {
          id: "2.C.3.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.3.b",
          name: "Engineering and Technology",
          description:
            "Knowledge of the practical application of engineering science and technology. This includes applying principles, techniques, procedures, and equipment to the design and production of various goods and services.",
          score: {
            scale: "Importance",
            important: false,
            value: 33
          }
        },
        {
          id: "2.C.9.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.9.b",
          name: "Communications and Media",
          description:
            "Knowledge of media production, communication, and dissemination techniques and methods. This includes alternative ways to inform and entertain via written, oral, and visual media.",
          score: {
            scale: "Importance",
            important: false,
            value: 31
          }
        }
      ]
    },
    skills: {
      element: [
        {
          id: "2.A.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.e",
          name: "Mathematics",
          description: "Using mathematics to solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 97
          }
        },
        {
          id: "2.A.2.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.2.a",
          name: "Critical Thinking",
          description:
            "Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "2.A.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.a",
          name: "Reading Comprehension",
          description:
            "Understanding written sentences and paragraphs in work-related documents.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "2.A.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.b",
          name: "Active Listening",
          description:
            "Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.B.2.i",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.B.2.i",
          name: "Complex Problem Solving",
          description:
            "Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.A.1.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.d",
          name: "Speaking",
          description: "Talking to others to convey information effectively.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.A.2.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.2.b",
          name: "Active Learning",
          description:
            "Understanding the implications of new information for both current and future problem-solving and decision-making.",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        },
        {
          id: "2.A.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.c",
          name: "Writing",
          description:
            "Communicating effectively in writing as appropriate for the needs of the audience.",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        },
        {
          id: "2.A.1.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.f",
          name: "Science",
          description: "Using scientific rules and methods to solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 63
          }
        },
        {
          id: "2.B.4.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.B.4.e",
          name: "Judgment and Decision Making",
          description:
            "Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          score: {
            scale: "Importance",
            important: true,
            value: 60
          }
        }
      ]
    },
    abilities: {
      element: [
        {
          id: "1.A.1.c.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.c.1",
          name: "Mathematical Reasoning",
          description:
            "The ability to choose the right mathematical methods or formulas to solve a problem.",
          score: {
            scale: "Importance",
            important: true,
            value: 94
          }
        },
        {
          id: "1.A.1.c.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.c.2",
          name: "Number Facility",
          description:
            "The ability to add, subtract, multiply, or divide quickly and correctly.",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: "1.A.1.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.2",
          name: "Written Comprehension",
          description:
            "The ability to read and understand information and ideas presented in writing.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.A.1.b.5",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.5",
          name: "Inductive Reasoning",
          description:
            "The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events).",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.4.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.4.a.1",
          name: "Near Vision",
          description:
            "The ability to see details at close range (within a few feet of the observer).",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.1",
          name: "Oral Comprehension",
          description:
            "The ability to listen to and understand information and ideas presented through spoken words and sentences.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.3",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.3",
          name: "Oral Expression",
          description:
            "The ability to communicate information and ideas in speaking so others will understand.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.4",
          name: "Written Expression",
          description:
            "The ability to communicate information and ideas in writing so others will understand.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.b.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.4",
          name: "Deductive Reasoning",
          description:
            "The ability to apply general rules to specific problems to produce answers that make sense.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "1.A.1.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.6",
          name: "Information Ordering",
          description:
            "The ability to arrange things or actions in a certain order or pattern according to a specific rule or set of rules (e.g., patterns of numbers, letters, words, pictures, mathematical operations).",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        }
      ]
    },
    work_activities: {
      element: [
        {
          id: "4.A.2.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.a.4",
          name: "Analyzing Data or Information",
          description:
            "Identifying the underlying principles, reasons, or facts of information by breaking down information or data into separate parts.",
          score: {
            scale: "Importance",
            important: true,
            value: 99
          }
        },
        {
          id: "4.A.3.b.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.3.b.1",
          name: "Working with Computers",
          description:
            "Using computers and computer systems (including hardware and software) to program, write software, set up functions, enter data, or process information.",
          score: {
            scale: "Importance",
            important: true,
            value: 99
          }
        },
        {
          id: "4.A.2.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.a.2",
          name: "Processing Information",
          description:
            "Compiling, coding, categorizing, calculating, tabulating, auditing, or verifying information or data.",
          score: {
            scale: "Importance",
            important: true,
            value: 95
          }
        },
        {
          id: "4.A.4.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.a.1",
          name: "Interpreting the Meaning of Information for Others",
          description:
            "Translating or explaining what information means and how it can be used.",
          score: {
            scale: "Importance",
            important: true,
            value: 93
          }
        },
        {
          id: "4.A.2.b.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.b.1",
          name: "Making Decisions and Solving Problems",
          description:
            "Analyzing information and evaluating results to choose the best solution and solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 91
          }
        },
        {
          id: "4.A.1.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.1.a.1",
          name: "Getting Information",
          description:
            "Observing, receiving, and otherwise obtaining information from all relevant sources.",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: "4.A.4.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.a.2",
          name: "Communicating with Supervisors, Peers, or Subordinates",
          description:
            "Providing information to supervisors, co-workers, and subordinates by telephone, in written form, e-mail, or in person.",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: "4.A.2.b.3",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.b.3",
          name: "Updating and Using Relevant Knowledge",
          description:
            "Keeping up-to-date technically and applying new knowledge to your job.",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: "4.A.3.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.3.b.6",
          name: "Documenting/Recording Information",
          description:
            "Entering, transcribing, recording, storing, or maintaining information in written or electronic/magnetic form.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "4.A.4.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.b.6",
          name: "Providing Consultation and Advice to Others",
          description:
            "Providing guidance and expert advice to management or other groups on technical, systems-, or process-related topics.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        }
      ]
    },
    detailed_work_activities: {
      activity: [
        {
          id: "4.A.2.b.1.I04.D10",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.1.I04.D10",
          name: "Determine appropriate methods for data analysis."
        },
        {
          id: "4.A.2.a.4.I04.D02",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.4.I04.D02",
          name: "Analyze data to identify trends or relationships among variables."
        },
        {
          id: "4.A.2.a.1.I10.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.1.I10.D01",
          name: "Evaluate project designs to determine adequacy or feasibility."
        },
        {
          id: "4.A.3.b.6.I03.D05",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.6.I03.D05",
          name: "Prepare analytical reports."
        },
        {
          id: "4.A.2.a.4.I05.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.4.I05.D01",
          name: "Evaluate technical data to determine effect on designs or plans."
        },
        {
          id: "4.A.2.b.2.I18.D14",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.2.I18.D14",
          name: "Prepare graphics or other visual representations of information."
        },
        {
          id: "4.A.2.a.2.I01.D06",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.2.I01.D06",
          name: "Evaluate data quality."
        },
        {
          id: "4.A.3.b.1.I06.D07",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.1.I06.D07",
          name: "Prepare data for analysis."
        },
        {
          id: "4.A.2.b.2.I23.D04",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.2.I23.D04",
          name: "Design research studies to obtain scientific information."
        },
        {
          id: "4.A.3.b.6.I03.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.6.I03.D01",
          name: "Present research results to others."
        }
      ]
    },
    work_context: {
      element: [
        {
          id: "4.C.1.a.2.h",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.h",
          name: "Electronic Mail",
          description: "How often do you use electronic mail in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 100
          },
          response: [
            {
              percentage: 100,
              name: "Every day"
            }
          ]
        },
        {
          id: "4.C.2.d.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.2.d.1.a",
          name: "Spend Time Sitting",
          description: "How much does this job require sitting?",
          score: {
            scale: "Context",
            important: true,
            value: 93
          },
          response: [
            {
              percentage: 71,
              name: "Continually or almost continually"
            },
            {
              percentage: 29,
              name: "More than half the time"
            }
          ]
        },
        {
          id: "4.C.3.b.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.b.4",
          name: "Importance of Being Exact or Accurate",
          description:
            "How important is being very exact or highly accurate in performing this job?",
          score: {
            scale: "Context",
            important: true,
            value: 88
          },
          response: [
            {
              percentage: 67,
              name: "Extremely important"
            },
            {
              percentage: 24,
              name: "Very important"
            }
          ]
        },
        {
          id: "4.C.1.a.2.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.f",
          name: "Telephone",
          description:
            "How often do you have telephone conversations in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 86
          },
          response: [
            {
              percentage: 50,
              name: "Every day"
            },
            {
              percentage: 44,
              name: "Once a week or more but not every day"
            }
          ]
        },
        {
          id: "4.C.1.b.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.b.1.e",
          name: "Work With Work Group or Team",
          description:
            "How important is it to work with others in a group or team in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 86
          },
          response: [
            {
              percentage: 53,
              name: "Extremely important"
            },
            {
              percentage: 37,
              name: "Very important"
            },
            {
              percentage: 11,
              name: "Important"
            }
          ]
        },
        {
          id: "4.C.2.a.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.2.a.1.a",
          name: "Indoors, Environmentally Controlled",
          description:
            "How often does this job require working indoors in environmentally controlled conditions?",
          score: {
            scale: "Context",
            important: true,
            value: 84
          },
          response: [
            {
              percentage: 80,
              name: "Every day"
            },
            {
              percentage: 15,
              name: "Never"
            }
          ]
        },
        {
          id: "4.C.1.a.2.l",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.l",
          name: "Face-to-Face Discussions",
          description:
            "How often do you have to have face-to-face discussions with individuals or teams in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 83
          },
          response: [
            {
              percentage: 39,
              name: "Every day"
            },
            {
              percentage: 56,
              name: "Once a week or more but not every day"
            }
          ]
        },
        {
          id: "4.C.3.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.a.4",
          name: "Freedom to Make Decisions",
          description:
            "How much decision making freedom, without supervision, does the job offer?",
          score: {
            scale: "Context",
            important: true,
            value: 80
          },
          response: [
            {
              percentage: 33,
              name: "A lot of freedom"
            },
            {
              percentage: 52,
              name: "Some freedom"
            },
            {
              percentage: 14,
              name: "Limited freedom"
            }
          ]
        },
        {
          id: "4.C.3.b.8",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.b.8",
          name: "Structured versus Unstructured Work",
          description:
            "To what extent is this job structured for the worker, rather than allowing the worker to determine tasks, priorities, and goals?",
          score: {
            scale: "Context",
            important: true,
            value: 79
          },
          response: [
            {
              percentage: 24,
              name: "A lot of freedom"
            },
            {
              percentage: 67,
              name: "Some freedom"
            }
          ]
        },
        {
          id: "4.C.3.d.8",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.d.8",
          name: "Duration of Typical Work Week",
          description: "Number of hours typically worked in one week.",
          score: {
            scale: "Context",
            important: true,
            value: 74
          },
          response: [
            {
              percentage: 48,
              name: "More than 40 hours"
            },
            {
              percentage: 52,
              name: "40 hours"
            }
          ]
        }
      ]
    },
    job_zone: {
      value: 5,
      title: "Job Zone Five: Extensive Preparation Needed",
      education:
        "Most of these occupations require graduate school. For example, they may require a master's degree, and some require a Ph.D., M.D., or J.D. (law degree).",
      related_experience:
        "Extensive skill, knowledge, and experience are needed for these occupations. Many require more than five years of experience. For example, surgeons must complete four years of college and an additional five to seven years of specialized medical training to be able to do their job.",
      job_training:
        "Employees may need some on-the-job training, but most of these occupations assume that the person will already have the required skills, knowledge, work-related experience, and/or training.",
      job_zone_examples:
        "These occupations often involve coordinating, training, supervising, or managing the activities of others to accomplish goals. Very advanced communication and organizational skills are required. Examples include pharmacists, lawyers, astronomers, biologists, clergy, physician assistants, and veterinarians.",
      svp_range: "(8.0 and above)"
    },
    education: {
      level_required: {
        category: [
          {
            name: "Master's degree",
            score: {
              scale: "Percentage of Respondents",
              value: 62
            }
          },
          {
            name: "Bachelor's degree",
            score: {
              scale: "Percentage of Respondents",
              value: 14
            }
          },
          {
            name: "Doctoral degree",
            score: {
              scale: "Percentage of Respondents",
              value: 10
            }
          }
        ]
      }
    },
    interests: {
      element: [
        {
          id: "1.B.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.b",
          name: "Investigative",
          description:
            "Work involves studying and researching non-living objects, living organisms, disease or other forms of impairment, or human behavior. Investigative occupations are often associated with physical, life, medical, or social sciences, and can be found in the fields of humanities, mathematics/statistics, information technology, or health care service.",
          score: {
            scale: "Occupational Interest",
            important: true,
            value: 94
          }
        },
        {
          id: "1.B.1.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.f",
          name: "Conventional",
          description:
            "Work involves following procedures and regulations to organize information or data, typically in a business setting. Conventional occupations are often associated with office work, accounting, mathematics/statistics, information technology, finance, or human resources.",
          score: {
            scale: "Occupational Interest",
            important: true,
            value: 82
          }
        },
        {
          id: "1.B.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.a",
          name: "Realistic",
          description:
            "Work involves designing, building, or repairing of equipment, materials, or structures, engaging in physical activity, or working outdoors. Realistic occupations are often associated with engineering, mechanics and electronics, construction, woodworking, transportation, machine operation, agriculture, animal services, physical or manual labor, athletics, or protective services.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 18
          }
        },
        {
          id: "1.B.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.e",
          name: "Enterprising",
          description:
            "Work involves managing, negotiating, marketing, or selling, typically in a business setting, or leading or advising people in political and legal situations. Enterprising occupations are often associated with business initiatives, sales, marketing/advertising, finance, management/administration, professional advising, public speaking, politics, or law.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 14
          }
        },
        {
          id: "1.B.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.c",
          name: "Artistic",
          description:
            "Work involves creating original visual artwork, performances, written works, food, or music for a variety of media, or applying artistic principles to the design of various objects and materials. Artistic occupations are often associated with visual arts, applied arts and design, performing arts, music, creative writing, media, or culinary art.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 13
          }
        },
        {
          id: "1.B.1.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.d",
          name: "Social",
          description:
            "Work involves helping, teaching, advising, assisting, or providing service to others. Social occupations are often associated with social, health care, personal service, teaching/education, or religious activities.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 12
          }
        }
      ]
    },
    work_styles: {
      element: [
        {
          id: "1.C.7.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.7.b",
          name: "Analytical Thinking",
          description:
            "Job requires analyzing information and using logic to address work-related issues and problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 98
          }
        },
        {
          id: "1.C.5.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.c",
          name: "Integrity",
          description: "Job requires being honest and ethical.",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: "1.C.5.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.b",
          name: "Attention to Detail",
          description:
            "Job requires being careful about detail and thorough in completing work tasks.",
          score: {
            scale: "Importance",
            important: true,
            value: 91
          }
        },
        {
          id: "1.C.5.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.a",
          name: "Dependability",
          description:
            "Job requires being reliable, responsible, and dependable, and fulfilling obligations.",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: "1.C.3.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.3.a",
          name: "Cooperation",
          description:
            "Job requires being pleasant with others on the job and displaying a good-natured, cooperative attitude.",
          score: {
            scale: "Importance",
            important: true,
            value: 81
          }
        },
        {
          id: "1.C.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.c",
          name: "Initiative",
          description:
            "Job requires a willingness to take on responsibilities and challenges.",
          score: {
            scale: "Importance",
            important: true,
            value: 79
          }
        },
        {
          id: "1.C.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.a",
          name: "Achievement/Effort",
          description:
            "Job requires establishing and maintaining personally challenging achievement goals and exerting effort toward mastering tasks.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.C.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.b",
          name: "Persistence",
          description: "Job requires persistence in the face of obstacles.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.C.4.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.4.c",
          name: "Adaptability/Flexibility",
          description:
            "Job requires being open to change (positive or negative) and to considerable variety in the workplace.",
          score: {
            scale: "Importance",
            important: true,
            value: 74
          }
        },
        {
          id: "1.C.4.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.4.b",
          name: "Stress Tolerance",
          description:
            "Job requires accepting criticism and dealing calmly and effectively with high-stress situations.",
          score: {
            scale: "Importance",
            important: true,
            value: 67
          }
        }
      ]
    },
    work_values: {
      element: [
        {
          id: "1.B.2.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.f",
          name: "Independence",
          description:
            "Occupations that satisfy this work value allow employees to work on their own and make decisions. Corresponding needs are Creativity, Responsibility and Autonomy.",
          score: {
            scale: "Extent",
            important: true,
            value: 78
          }
        },
        {
          id: "1.B.2.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.a",
          name: "Achievement",
          description:
            "Occupations that satisfy this work value are results oriented and allow employees to use their strongest abilities, giving them a feeling of accomplishment. Corresponding needs are Ability Utilization and Achievement.",
          score: {
            scale: "Extent",
            important: true,
            value: 72
          }
        },
        {
          id: "1.B.2.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.c",
          name: "Recognition",
          description:
            "Occupations that satisfy this work value offer advancement, potential for leadership, and are often considered prestigious. Corresponding needs are Advancement, Authority, Recognition and Social Status.",
          score: {
            scale: "Extent",
            important: true,
            value: 67
          }
        },
        {
          id: "1.B.2.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.d",
          name: "Relationships",
          description:
            "Occupations that satisfy this work value allow employees to provide service to others and work with co-workers in a friendly non-competitive environment. Corresponding needs are Co-workers, Moral Values and Social Service.",
          score: {
            scale: "Extent",
            important: true,
            value: 61
          }
        },
        {
          id: "1.B.2.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.b",
          name: "Working Conditions",
          description:
            "Occupations that satisfy this work value offer job security and good working conditions. Corresponding needs are Activity, Compensation, Independence, Security, Variety and Working Conditions.",
          score: {
            scale: "Extent",
            important: true,
            value: 61
          }
        },
        {
          id: "1.B.2.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.e",
          name: "Support",
          description:
            "Occupations that satisfy this work value offer supportive management that stands behind employees. Corresponding needs are Company Policies, Supervision: Human Relations and Supervision: Technical.",
          score: {
            scale: "Extent",
            important: false,
            value: 33
          }
        }
      ]
    },
    related_occupations: {
      occupation: [
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-1029.01/",
          code: "19-1029.01",
          title: "Bioinformatics Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2041.01/",
          code: "15-2041.01",
          title: "Biostatisticians",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2051.02/",
          code: "15-2051.02",
          title: "Clinical Data Managers",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-1221.00/",
          code: "15-1221.00",
          title: "Computer and Information Research Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2051.00/",
          code: "15-2051.00",
          title: "Data Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-3011.01/",
          code: "19-3011.01",
          title: "Environmental Economists",
          tags: {
            bright_outlook: false,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/13-2099.01/",
          code: "13-2099.01",
          title: "Financial Quantitative Analysts",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2021.00/",
          code: "15-2021.00",
          title: "Mathematicians",
          tags: {
            bright_outlook: false,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2031.00/",
          code: "15-2031.00",
          title: "Operations Research Analysts",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-3022.00/",
          code: "19-3022.00",
          title: "Survey Researchers",
          tags: {
            bright_outlook: false,
            green: false
          }
        }
      ]
    },
    additional_information: {
      source: [
        {
          url: "https://www.amstat.org/",
          name: "American Statistical Association"
        },
        {
          url: "https://www.actuary.org/",
          name: "American Academy of Actuaries"
        },
        {
          url: "https://www.aera.net/",
          name: "American Educational Research Association"
        },
        {
          url: "https://www.ams.org/",
          name: "American Mathematical Society"
        },
        {
          url: "https://www.ashg.org/",
          name: "American Society of Human Genetics"
        },
        {
          url: "https://www.airweb.org/",
          name: "Association for Institutional Research"
        },
        {
          url: "https://www.diaglobal.org/",
          name: "Drug Information Association"
        },
        {
          url: "https://www.biometricsociety.org/",
          name: "International Biometric Society"
        },
        {
          url: "https://www.ncme.org/",
          name: "National Council on Measurement in Education"
        },
        {
          url: "https://support.sas.com/usergroups/",
          name: "SAS Users Groups"
        }
      ]
    },
    translated: {
      title: "Статистици",
      description:
        "Разработете или приложете математическа или статистическа теория и методи за събиране, организиране, интерпретиране и обобщаване на числени данни, за да предоставите използваема информация. Може да специализира в области като биостатистика, селскостопанска статистика, бизнес статистика или икономическа статистика. Включва математика и статистици по проучвания."
    }
  },
  {
    code: "15-2041.00",
    display: "short",
    occupation: {
      code: "15-2041.00",
      title: "Statisticians",
      tags: {
        bright_outlook: true,
        green: false
      },
      description:
        "Develop or apply mathematical or statistical theory and methods to collect, organize, interpret, and summarize numerical data to provide usable information. May specialize in fields such as biostatistics, agricultural statistics, business statistics, or economic statistics. Includes mathematical and survey statisticians.",
      sample_of_reported_job_titles: {
        title: [
          "Database Analyst",
          "Demographer",
          "Education Research Analyst",
          "Mathematical Statistician",
          "Psychometric Consultant",
          "Quantitative Methodologist",
          "Statistical Analyst",
          "Statistical Consultant",
          "Statistical Reporting Analyst",
          "Statistician"
        ]
      },
      also_see: {
        occupation: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.01/",
            code: "15-2041.01",
            title: "Biostatisticians",
            tags: {
              bright_outlook: true,
              green: false
            }
          }
        ]
      },
      updated: {
        partial: false,
        year: 2024,
        resource_updated: [
          {
            title: "Abilities",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Alternate Titles",
            source: "Multiple sources",
            year: 2024
          },
          {
            title: "Detailed Work Activities",
            source: "Analyst",
            year: 2020
          },
          {
            title: "Education",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Interests",
            source: "Machine Learning",
            year: 2023
          },
          {
            title: "Job Zone",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Knowledge",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Sample of Reported Titles",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Skills",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Tasks",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Technology Skills & Tools",
            source: "Analyst",
            year: 2023
          },
          {
            title: "Work Activities",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Context",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Needs",
            source: "Legacy Analyst"
          },
          {
            title: "Work Styles",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Values",
            source: "Analyst",
            year: 2008
          }
        ]
      },
      bright_outlook: {
        description: "This occupation is expected to grow rapidly.",
        category: ["Grow Rapidly"]
      },
      summary_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tasks",
            title: "Tasks"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/technology_skills",
            title: "Technology Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tools_used",
            title: "Tools Used"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tools_technology",
            title: "Tools &amp; Technology"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/knowledge",
            title: "Knowledge"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/skills",
            title: "Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/abilities",
            title: "Abilities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_activities",
            title: "Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/detailed_work_activities",
            title: "Detailed Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_context",
            title: "Work Context"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/job_zone",
            title: "Job Zone"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/education",
            title: "Education"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/interests",
            title: "Interests"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_styles",
            title: "Work Styles"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_values",
            title: "Work Values"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/related_occupations",
            title: "Related Occupations"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/additional_information",
            title: "Sources of Additional Information"
          }
        ]
      },
      details_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tasks",
            title: "Tasks"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/technology_skills",
            title: "Technology Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_used",
            title: "Tools Used"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_technology",
            title: "Tools &amp; Technology"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/knowledge",
            title: "Knowledge"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/skills",
            title: "Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/abilities",
            title: "Abilities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_activities",
            title: "Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/detailed_work_activities",
            title: "Detailed Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_context",
            title: "Work Context"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/job_zone",
            title: "Job Zone"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/education",
            title: "Education"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/interests",
            title: "Interests"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_styles",
            title: "Work Styles"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_values",
            title: "Work Values"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/related_occupations",
            title: "Related Occupations"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/additional_information",
            title: "Sources of Additional Information"
          }
        ]
      },
      custom_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/custom/work_activities_outline",
            title: "Work Activities Outline"
          }
        ]
      }
    },
    tasks: {
      task: [
        {
          id: 8956,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8956",
          statement:
            "Analyze and interpret statistical data to identify significant differences in relationships among sources of information.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: 8958,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8958",
          statement:
            "Evaluate the statistical methods and procedures used to obtain data to ensure validity, applicability, efficiency, and accuracy.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: 8953,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8953",
          statement:
            "Report results of statistical analyses, including information in the form of graphs, charts, and tables.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: 21100,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/21100",
          statement:
            "Determine whether statistical methods are appropriate, based on user needs or research questions of interest.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: 8957,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8957",
          statement:
            "Prepare data for processing by organizing information, checking for inaccuracies, and adjusting and weighting the raw data.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 87
          }
        },
        {
          id: 8966,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8966",
          statement:
            "Develop and test experimental designs, sampling techniques, and analytical methods.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: 8955,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8955",
          statement:
            "Identify relationships and trends in data, as well as any factors that could affect the results of research.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: 20194,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/20194",
          statement:
            "Present statistical and nonstatistical results, using charts, bullets, and graphs, in meetings or conferences to audiences such as clients, peers, and students.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 82
          }
        },
        {
          id: 8961,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8961",
          statement:
            "Design research projects that apply valid scientific techniques, and use information obtained from baselines or historical data to structure uncompromised and efficient analyses.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 82
          }
        },
        {
          id: 8965,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8965",
          statement:
            "Adapt statistical methods to solve specific problems in many fields, such as economics, biology, and engineering.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 81
          }
        }
      ]
    },
    technology_skills: {
      see_all: {
        href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/technology_skills?all=1"
      },
      category: [
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232605",
          title: {
            id: 43232605,
            name: "Analytical or scientific software"
          },
          example: [
            {
              hot_technology: "IBM SPSS Statistics",
              name: "IBM SPSS Statistics"
            },
            {
              name: "Minitab"
            },
            {
              hot_technology: "SAS",
              name: "SAS"
            },
            {
              hot_technology: "The MathWorks MATLAB",
              name: "The MathWorks MATLAB"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232106",
          title: {
            id: 43232106,
            name: "Presentation software"
          },
          example: [
            {
              hot_technology: "Microsoft PowerPoint",
              name: "Microsoft PowerPoint"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232405",
          title: {
            id: 43232405,
            name: "Object or component oriented development software"
          },
          example: [
            {
              hot_technology: "C++",
              name: "C++"
            },
            {
              hot_technology: "Python",
              name: "Python"
            },
            {
              hot_technology: "R",
              name: "R"
            },
            {
              name: "Sun Microsystems Java"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232306",
          title: {
            id: 43232306,
            name: "Data base user interface and query software"
          },
          example: [
            {
              hot_technology: "Amazon Redshift",
              name: "Amazon Redshift"
            },
            {
              hot_technology: "IBM DB2",
              name: "IBM DB2"
            },
            {
              hot_technology: "Microsoft SQL Server",
              name: "Microsoft SQL Server"
            },
            {
              hot_technology: "Structured query language SQL",
              name: "Structured query language SQL"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232307",
          title: {
            id: 43232307,
            name: "Data mining software"
          },
          example: [
            {
              name: "Angoss KnowledgeSEEKER"
            },
            {
              name: "NCR Teradata Warehouse Miner"
            },
            {
              name: "SAS Enterprise Miner"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232304",
          title: {
            id: 43232304,
            name: "Data base management system software"
          },
          example: [
            {
              hot_technology: "Apache Hadoop",
              name: "Apache Hadoop"
            },
            {
              name: "Apache Pig"
            },
            {
              hot_technology: "Teradata Database",
              name: "Teradata Database"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232402",
          title: {
            id: 43232402,
            name: "Development environment software"
          },
          example: [
            {
              name: "Common business oriented language COBOL"
            },
            {
              name: "Formula translation/translator FORTRAN"
            },
            {
              hot_technology: "Microsoft Visual Basic",
              name: "Microsoft Visual Basic"
            },
            {
              hot_technology: "Microsoft Visual Basic for Applications VBA",
              name: "Microsoft Visual Basic for Applications VBA"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43233004",
          title: {
            id: 43233004,
            name: "Operating system software"
          },
          example: [
            {
              hot_technology: "Linux",
              name: "Linux"
            },
            {
              hot_technology: "UNIX",
              name: "UNIX"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232314",
          title: {
            id: 43232314,
            name: "Business intelligence and data analysis software"
          },
          example: [
            {
              hot_technology: "Apache Spark",
              name: "Apache Spark"
            },
            {
              name: "Qlik Tech QlikView"
            },
            {
              hot_technology: "Tableau",
              name: "Tableau"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232110",
          title: {
            id: 43232110,
            name: "Spreadsheet software"
          },
          example: [
            {
              hot_technology: "Microsoft Excel",
              name: "Microsoft Excel"
            }
          ]
        }
      ]
    },
    tools_used: {
      category: [
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211503",
          title: {
            id: 43211503,
            name: "Notebook computers"
          },
          example: [
            {
              name: "Laptop computers"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211507",
          title: {
            id: 43211507,
            name: "Desktop computers"
          },
          example: []
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211508",
          title: {
            id: 43211508,
            name: "Personal computers"
          },
          example: []
        }
      ]
    },
    tools_technology: {
      tools: {
        category: [
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211503",
            title: {
              id: 43211503,
              name: "Notebook computers"
            },
            example: [
              {
                name: "Laptop computers"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211507",
            title: {
              id: 43211507,
              name: "Desktop computers"
            },
            example: []
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211508",
            title: {
              id: 43211508,
              name: "Personal computers"
            },
            example: []
          }
        ]
      },
      technology: {
        see_all: {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_technology?all=1"
        },
        category: [
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232605",
            title: {
              id: 43232605,
              name: "Analytical or scientific software"
            },
            example: [
              {
                hot_technology: "IBM SPSS Statistics",
                name: "IBM SPSS Statistics"
              },
              {
                name: "Minitab"
              },
              {
                hot_technology: "SAS",
                name: "SAS"
              },
              {
                hot_technology: "The MathWorks MATLAB",
                name: "The MathWorks MATLAB"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232106",
            title: {
              id: 43232106,
              name: "Presentation software"
            },
            example: [
              {
                hot_technology: "Microsoft PowerPoint",
                name: "Microsoft PowerPoint"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232405",
            title: {
              id: 43232405,
              name: "Object or component oriented development software"
            },
            example: [
              {
                hot_technology: "C++",
                name: "C++"
              },
              {
                hot_technology: "Python",
                name: "Python"
              },
              {
                hot_technology: "R",
                name: "R"
              },
              {
                name: "Sun Microsystems Java"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232306",
            title: {
              id: 43232306,
              name: "Data base user interface and query software"
            },
            example: [
              {
                hot_technology: "Amazon Redshift",
                name: "Amazon Redshift"
              },
              {
                hot_technology: "IBM DB2",
                name: "IBM DB2"
              },
              {
                hot_technology: "Microsoft SQL Server",
                name: "Microsoft SQL Server"
              },
              {
                hot_technology: "Structured query language SQL",
                name: "Structured query language SQL"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232307",
            title: {
              id: 43232307,
              name: "Data mining software"
            },
            example: [
              {
                name: "Angoss KnowledgeSEEKER"
              },
              {
                name: "NCR Teradata Warehouse Miner"
              },
              {
                name: "SAS Enterprise Miner"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232304",
            title: {
              id: 43232304,
              name: "Data base management system software"
            },
            example: [
              {
                hot_technology: "Apache Hadoop",
                name: "Apache Hadoop"
              },
              {
                name: "Apache Pig"
              },
              {
                hot_technology: "Teradata Database",
                name: "Teradata Database"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232402",
            title: {
              id: 43232402,
              name: "Development environment software"
            },
            example: [
              {
                name: "Common business oriented language COBOL"
              },
              {
                name: "Formula translation/translator FORTRAN"
              },
              {
                hot_technology: "Microsoft Visual Basic",
                name: "Microsoft Visual Basic"
              },
              {
                hot_technology: "Microsoft Visual Basic for Applications VBA",
                name: "Microsoft Visual Basic for Applications VBA"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43233004",
            title: {
              id: 43233004,
              name: "Operating system software"
            },
            example: [
              {
                hot_technology: "Linux",
                name: "Linux"
              },
              {
                hot_technology: "UNIX",
                name: "UNIX"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232314",
            title: {
              id: 43232314,
              name: "Business intelligence and data analysis software"
            },
            example: [
              {
                hot_technology: "Apache Spark",
                name: "Apache Spark"
              },
              {
                name: "Qlik Tech QlikView"
              },
              {
                hot_technology: "Tableau",
                name: "Tableau"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232110",
            title: {
              id: 43232110,
              name: "Spreadsheet software"
            },
            example: [
              {
                hot_technology: "Microsoft Excel",
                name: "Microsoft Excel"
              }
            ]
          }
        ]
      }
    },
    knowledge: {
      element: [
        {
          id: "2.C.4.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.4.a",
          name: "Mathematics",
          description:
            "Knowledge of arithmetic, algebra, geometry, calculus, statistics, and their applications.",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: "2.C.3.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.3.a",
          name: "Computers and Electronics",
          description:
            "Knowledge of circuit boards, processors, chips, electronic equipment, and computer hardware and software, including applications and programming.",
          score: {
            scale: "Importance",
            important: true,
            value: 80
          }
        },
        {
          id: "2.C.7.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.7.a",
          name: "English Language",
          description:
            "Knowledge of the structure and content of the English language including the meaning and spelling of words, rules of composition, and grammar.",
          score: {
            scale: "Importance",
            important: true,
            value: 73
          }
        },
        {
          id: "2.C.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.6",
          name: "Education and Training",
          description:
            "Knowledge of principles and methods for curriculum and training design, teaching and instruction for individuals and groups, and the measurement of training effects.",
          score: {
            scale: "Importance",
            important: false,
            value: 48
          }
        },
        {
          id: "2.C.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.a",
          name: "Administration and Management",
          description:
            "Knowledge of business and management principles involved in strategic planning, resource allocation, human resources modeling, leadership technique, production methods, and coordination of people and resources.",
          score: {
            scale: "Importance",
            important: false,
            value: 45
          }
        },
        {
          id: "2.C.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.e",
          name: "Customer and Personal Service",
          description:
            "Knowledge of principles and processes for providing customer and personal services. This includes customer needs assessment, meeting quality standards for services, and evaluation of customer satisfaction.",
          score: {
            scale: "Importance",
            important: false,
            value: 37
          }
        },
        {
          id: "2.C.4.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.4.d",
          name: "Biology",
          description:
            "Knowledge of plant and animal organisms, their tissues, cells, functions, interdependencies, and interactions with each other and the environment.",
          score: {
            scale: "Importance",
            important: false,
            value: 36
          }
        },
        {
          id: "2.C.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.b",
          name: "Administrative",
          description:
            "Knowledge of administrative and office procedures and systems such as word processing, managing files and records, stenography and transcription, designing forms, and workplace terminology.",
          score: {
            scale: "Importance",
            important: false,
            value: 33
          }
        },
        {
          id: "2.C.3.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.3.b",
          name: "Engineering and Technology",
          description:
            "Knowledge of the practical application of engineering science and technology. This includes applying principles, techniques, procedures, and equipment to the design and production of various goods and services.",
          score: {
            scale: "Importance",
            important: false,
            value: 33
          }
        },
        {
          id: "2.C.9.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.9.b",
          name: "Communications and Media",
          description:
            "Knowledge of media production, communication, and dissemination techniques and methods. This includes alternative ways to inform and entertain via written, oral, and visual media.",
          score: {
            scale: "Importance",
            important: false,
            value: 31
          }
        }
      ]
    },
    skills: {
      element: [
        {
          id: "2.A.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.e",
          name: "Mathematics",
          description: "Using mathematics to solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 97
          }
        },
        {
          id: "2.A.2.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.2.a",
          name: "Critical Thinking",
          description:
            "Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "2.A.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.a",
          name: "Reading Comprehension",
          description:
            "Understanding written sentences and paragraphs in work-related documents.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "2.A.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.b",
          name: "Active Listening",
          description:
            "Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.B.2.i",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.B.2.i",
          name: "Complex Problem Solving",
          description:
            "Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.A.1.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.d",
          name: "Speaking",
          description: "Talking to others to convey information effectively.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.A.2.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.2.b",
          name: "Active Learning",
          description:
            "Understanding the implications of new information for both current and future problem-solving and decision-making.",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        },
        {
          id: "2.A.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.c",
          name: "Writing",
          description:
            "Communicating effectively in writing as appropriate for the needs of the audience.",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        },
        {
          id: "2.A.1.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.f",
          name: "Science",
          description: "Using scientific rules and methods to solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 63
          }
        },
        {
          id: "2.B.4.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.B.4.e",
          name: "Judgment and Decision Making",
          description:
            "Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          score: {
            scale: "Importance",
            important: true,
            value: 60
          }
        }
      ]
    },
    abilities: {
      element: [
        {
          id: "1.A.1.c.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.c.1",
          name: "Mathematical Reasoning",
          description:
            "The ability to choose the right mathematical methods or formulas to solve a problem.",
          score: {
            scale: "Importance",
            important: true,
            value: 94
          }
        },
        {
          id: "1.A.1.c.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.c.2",
          name: "Number Facility",
          description:
            "The ability to add, subtract, multiply, or divide quickly and correctly.",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: "1.A.1.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.2",
          name: "Written Comprehension",
          description:
            "The ability to read and understand information and ideas presented in writing.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.A.1.b.5",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.5",
          name: "Inductive Reasoning",
          description:
            "The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events).",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.4.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.4.a.1",
          name: "Near Vision",
          description:
            "The ability to see details at close range (within a few feet of the observer).",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.1",
          name: "Oral Comprehension",
          description:
            "The ability to listen to and understand information and ideas presented through spoken words and sentences.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.3",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.3",
          name: "Oral Expression",
          description:
            "The ability to communicate information and ideas in speaking so others will understand.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.4",
          name: "Written Expression",
          description:
            "The ability to communicate information and ideas in writing so others will understand.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.b.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.4",
          name: "Deductive Reasoning",
          description:
            "The ability to apply general rules to specific problems to produce answers that make sense.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "1.A.1.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.6",
          name: "Information Ordering",
          description:
            "The ability to arrange things or actions in a certain order or pattern according to a specific rule or set of rules (e.g., patterns of numbers, letters, words, pictures, mathematical operations).",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        }
      ]
    },
    work_activities: {
      element: [
        {
          id: "4.A.2.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.a.4",
          name: "Analyzing Data or Information",
          description:
            "Identifying the underlying principles, reasons, or facts of information by breaking down information or data into separate parts.",
          score: {
            scale: "Importance",
            important: true,
            value: 99
          }
        },
        {
          id: "4.A.3.b.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.3.b.1",
          name: "Working with Computers",
          description:
            "Using computers and computer systems (including hardware and software) to program, write software, set up functions, enter data, or process information.",
          score: {
            scale: "Importance",
            important: true,
            value: 99
          }
        },
        {
          id: "4.A.2.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.a.2",
          name: "Processing Information",
          description:
            "Compiling, coding, categorizing, calculating, tabulating, auditing, or verifying information or data.",
          score: {
            scale: "Importance",
            important: true,
            value: 95
          }
        },
        {
          id: "4.A.4.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.a.1",
          name: "Interpreting the Meaning of Information for Others",
          description:
            "Translating or explaining what information means and how it can be used.",
          score: {
            scale: "Importance",
            important: true,
            value: 93
          }
        },
        {
          id: "4.A.2.b.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.b.1",
          name: "Making Decisions and Solving Problems",
          description:
            "Analyzing information and evaluating results to choose the best solution and solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 91
          }
        },
        {
          id: "4.A.1.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.1.a.1",
          name: "Getting Information",
          description:
            "Observing, receiving, and otherwise obtaining information from all relevant sources.",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: "4.A.4.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.a.2",
          name: "Communicating with Supervisors, Peers, or Subordinates",
          description:
            "Providing information to supervisors, co-workers, and subordinates by telephone, in written form, e-mail, or in person.",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: "4.A.2.b.3",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.b.3",
          name: "Updating and Using Relevant Knowledge",
          description:
            "Keeping up-to-date technically and applying new knowledge to your job.",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: "4.A.3.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.3.b.6",
          name: "Documenting/Recording Information",
          description:
            "Entering, transcribing, recording, storing, or maintaining information in written or electronic/magnetic form.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "4.A.4.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.b.6",
          name: "Providing Consultation and Advice to Others",
          description:
            "Providing guidance and expert advice to management or other groups on technical, systems-, or process-related topics.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        }
      ]
    },
    detailed_work_activities: {
      activity: [
        {
          id: "4.A.2.b.1.I04.D10",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.1.I04.D10",
          name: "Determine appropriate methods for data analysis."
        },
        {
          id: "4.A.2.a.4.I04.D02",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.4.I04.D02",
          name: "Analyze data to identify trends or relationships among variables."
        },
        {
          id: "4.A.2.a.1.I10.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.1.I10.D01",
          name: "Evaluate project designs to determine adequacy or feasibility."
        },
        {
          id: "4.A.3.b.6.I03.D05",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.6.I03.D05",
          name: "Prepare analytical reports."
        },
        {
          id: "4.A.2.a.4.I05.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.4.I05.D01",
          name: "Evaluate technical data to determine effect on designs or plans."
        },
        {
          id: "4.A.2.b.2.I18.D14",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.2.I18.D14",
          name: "Prepare graphics or other visual representations of information."
        },
        {
          id: "4.A.2.a.2.I01.D06",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.2.I01.D06",
          name: "Evaluate data quality."
        },
        {
          id: "4.A.3.b.1.I06.D07",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.1.I06.D07",
          name: "Prepare data for analysis."
        },
        {
          id: "4.A.2.b.2.I23.D04",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.2.I23.D04",
          name: "Design research studies to obtain scientific information."
        },
        {
          id: "4.A.3.b.6.I03.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.6.I03.D01",
          name: "Present research results to others."
        }
      ]
    },
    work_context: {
      element: [
        {
          id: "4.C.1.a.2.h",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.h",
          name: "Electronic Mail",
          description: "How often do you use electronic mail in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 100
          },
          response: [
            {
              percentage: 100,
              name: "Every day"
            }
          ]
        },
        {
          id: "4.C.2.d.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.2.d.1.a",
          name: "Spend Time Sitting",
          description: "How much does this job require sitting?",
          score: {
            scale: "Context",
            important: true,
            value: 93
          },
          response: [
            {
              percentage: 71,
              name: "Continually or almost continually"
            },
            {
              percentage: 29,
              name: "More than half the time"
            }
          ]
        },
        {
          id: "4.C.3.b.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.b.4",
          name: "Importance of Being Exact or Accurate",
          description:
            "How important is being very exact or highly accurate in performing this job?",
          score: {
            scale: "Context",
            important: true,
            value: 88
          },
          response: [
            {
              percentage: 67,
              name: "Extremely important"
            },
            {
              percentage: 24,
              name: "Very important"
            }
          ]
        },
        {
          id: "4.C.1.a.2.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.f",
          name: "Telephone",
          description:
            "How often do you have telephone conversations in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 86
          },
          response: [
            {
              percentage: 50,
              name: "Every day"
            },
            {
              percentage: 44,
              name: "Once a week or more but not every day"
            }
          ]
        },
        {
          id: "4.C.1.b.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.b.1.e",
          name: "Work With Work Group or Team",
          description:
            "How important is it to work with others in a group or team in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 86
          },
          response: [
            {
              percentage: 53,
              name: "Extremely important"
            },
            {
              percentage: 37,
              name: "Very important"
            },
            {
              percentage: 11,
              name: "Important"
            }
          ]
        },
        {
          id: "4.C.2.a.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.2.a.1.a",
          name: "Indoors, Environmentally Controlled",
          description:
            "How often does this job require working indoors in environmentally controlled conditions?",
          score: {
            scale: "Context",
            important: true,
            value: 84
          },
          response: [
            {
              percentage: 80,
              name: "Every day"
            },
            {
              percentage: 15,
              name: "Never"
            }
          ]
        },
        {
          id: "4.C.1.a.2.l",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.l",
          name: "Face-to-Face Discussions",
          description:
            "How often do you have to have face-to-face discussions with individuals or teams in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 83
          },
          response: [
            {
              percentage: 39,
              name: "Every day"
            },
            {
              percentage: 56,
              name: "Once a week or more but not every day"
            }
          ]
        },
        {
          id: "4.C.3.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.a.4",
          name: "Freedom to Make Decisions",
          description:
            "How much decision making freedom, without supervision, does the job offer?",
          score: {
            scale: "Context",
            important: true,
            value: 80
          },
          response: [
            {
              percentage: 33,
              name: "A lot of freedom"
            },
            {
              percentage: 52,
              name: "Some freedom"
            },
            {
              percentage: 14,
              name: "Limited freedom"
            }
          ]
        },
        {
          id: "4.C.3.b.8",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.b.8",
          name: "Structured versus Unstructured Work",
          description:
            "To what extent is this job structured for the worker, rather than allowing the worker to determine tasks, priorities, and goals?",
          score: {
            scale: "Context",
            important: true,
            value: 79
          },
          response: [
            {
              percentage: 24,
              name: "A lot of freedom"
            },
            {
              percentage: 67,
              name: "Some freedom"
            }
          ]
        },
        {
          id: "4.C.3.d.8",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.d.8",
          name: "Duration of Typical Work Week",
          description: "Number of hours typically worked in one week.",
          score: {
            scale: "Context",
            important: true,
            value: 74
          },
          response: [
            {
              percentage: 48,
              name: "More than 40 hours"
            },
            {
              percentage: 52,
              name: "40 hours"
            }
          ]
        }
      ]
    },
    job_zone: {
      value: 5,
      title: "Job Zone Five: Extensive Preparation Needed",
      education:
        "Most of these occupations require graduate school. For example, they may require a master's degree, and some require a Ph.D., M.D., or J.D. (law degree).",
      related_experience:
        "Extensive skill, knowledge, and experience are needed for these occupations. Many require more than five years of experience. For example, surgeons must complete four years of college and an additional five to seven years of specialized medical training to be able to do their job.",
      job_training:
        "Employees may need some on-the-job training, but most of these occupations assume that the person will already have the required skills, knowledge, work-related experience, and/or training.",
      job_zone_examples:
        "These occupations often involve coordinating, training, supervising, or managing the activities of others to accomplish goals. Very advanced communication and organizational skills are required. Examples include pharmacists, lawyers, astronomers, biologists, clergy, physician assistants, and veterinarians.",
      svp_range: "(8.0 and above)"
    },
    education: {
      level_required: {
        category: [
          {
            name: "Master's degree",
            score: {
              scale: "Percentage of Respondents",
              value: 62
            }
          },
          {
            name: "Bachelor's degree",
            score: {
              scale: "Percentage of Respondents",
              value: 14
            }
          },
          {
            name: "Doctoral degree",
            score: {
              scale: "Percentage of Respondents",
              value: 10
            }
          }
        ]
      }
    },
    interests: {
      element: [
        {
          id: "1.B.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.b",
          name: "Investigative",
          description:
            "Work involves studying and researching non-living objects, living organisms, disease or other forms of impairment, or human behavior. Investigative occupations are often associated with physical, life, medical, or social sciences, and can be found in the fields of humanities, mathematics/statistics, information technology, or health care service.",
          score: {
            scale: "Occupational Interest",
            important: true,
            value: 94
          }
        },
        {
          id: "1.B.1.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.f",
          name: "Conventional",
          description:
            "Work involves following procedures and regulations to organize information or data, typically in a business setting. Conventional occupations are often associated with office work, accounting, mathematics/statistics, information technology, finance, or human resources.",
          score: {
            scale: "Occupational Interest",
            important: true,
            value: 82
          }
        },
        {
          id: "1.B.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.a",
          name: "Realistic",
          description:
            "Work involves designing, building, or repairing of equipment, materials, or structures, engaging in physical activity, or working outdoors. Realistic occupations are often associated with engineering, mechanics and electronics, construction, woodworking, transportation, machine operation, agriculture, animal services, physical or manual labor, athletics, or protective services.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 18
          }
        },
        {
          id: "1.B.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.e",
          name: "Enterprising",
          description:
            "Work involves managing, negotiating, marketing, or selling, typically in a business setting, or leading or advising people in political and legal situations. Enterprising occupations are often associated with business initiatives, sales, marketing/advertising, finance, management/administration, professional advising, public speaking, politics, or law.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 14
          }
        },
        {
          id: "1.B.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.c",
          name: "Artistic",
          description:
            "Work involves creating original visual artwork, performances, written works, food, or music for a variety of media, or applying artistic principles to the design of various objects and materials. Artistic occupations are often associated with visual arts, applied arts and design, performing arts, music, creative writing, media, or culinary art.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 13
          }
        },
        {
          id: "1.B.1.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.d",
          name: "Social",
          description:
            "Work involves helping, teaching, advising, assisting, or providing service to others. Social occupations are often associated with social, health care, personal service, teaching/education, or religious activities.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 12
          }
        }
      ]
    },
    work_styles: {
      element: [
        {
          id: "1.C.7.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.7.b",
          name: "Analytical Thinking",
          description:
            "Job requires analyzing information and using logic to address work-related issues and problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 98
          }
        },
        {
          id: "1.C.5.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.c",
          name: "Integrity",
          description: "Job requires being honest and ethical.",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: "1.C.5.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.b",
          name: "Attention to Detail",
          description:
            "Job requires being careful about detail and thorough in completing work tasks.",
          score: {
            scale: "Importance",
            important: true,
            value: 91
          }
        },
        {
          id: "1.C.5.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.a",
          name: "Dependability",
          description:
            "Job requires being reliable, responsible, and dependable, and fulfilling obligations.",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: "1.C.3.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.3.a",
          name: "Cooperation",
          description:
            "Job requires being pleasant with others on the job and displaying a good-natured, cooperative attitude.",
          score: {
            scale: "Importance",
            important: true,
            value: 81
          }
        },
        {
          id: "1.C.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.c",
          name: "Initiative",
          description:
            "Job requires a willingness to take on responsibilities and challenges.",
          score: {
            scale: "Importance",
            important: true,
            value: 79
          }
        },
        {
          id: "1.C.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.a",
          name: "Achievement/Effort",
          description:
            "Job requires establishing and maintaining personally challenging achievement goals and exerting effort toward mastering tasks.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.C.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.b",
          name: "Persistence",
          description: "Job requires persistence in the face of obstacles.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.C.4.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.4.c",
          name: "Adaptability/Flexibility",
          description:
            "Job requires being open to change (positive or negative) and to considerable variety in the workplace.",
          score: {
            scale: "Importance",
            important: true,
            value: 74
          }
        },
        {
          id: "1.C.4.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.4.b",
          name: "Stress Tolerance",
          description:
            "Job requires accepting criticism and dealing calmly and effectively with high-stress situations.",
          score: {
            scale: "Importance",
            important: true,
            value: 67
          }
        }
      ]
    },
    work_values: {
      element: [
        {
          id: "1.B.2.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.f",
          name: "Independence",
          description:
            "Occupations that satisfy this work value allow employees to work on their own and make decisions. Corresponding needs are Creativity, Responsibility and Autonomy.",
          score: {
            scale: "Extent",
            important: true,
            value: 78
          }
        },
        {
          id: "1.B.2.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.a",
          name: "Achievement",
          description:
            "Occupations that satisfy this work value are results oriented and allow employees to use their strongest abilities, giving them a feeling of accomplishment. Corresponding needs are Ability Utilization and Achievement.",
          score: {
            scale: "Extent",
            important: true,
            value: 72
          }
        },
        {
          id: "1.B.2.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.c",
          name: "Recognition",
          description:
            "Occupations that satisfy this work value offer advancement, potential for leadership, and are often considered prestigious. Corresponding needs are Advancement, Authority, Recognition and Social Status.",
          score: {
            scale: "Extent",
            important: true,
            value: 67
          }
        },
        {
          id: "1.B.2.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.d",
          name: "Relationships",
          description:
            "Occupations that satisfy this work value allow employees to provide service to others and work with co-workers in a friendly non-competitive environment. Corresponding needs are Co-workers, Moral Values and Social Service.",
          score: {
            scale: "Extent",
            important: true,
            value: 61
          }
        },
        {
          id: "1.B.2.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.b",
          name: "Working Conditions",
          description:
            "Occupations that satisfy this work value offer job security and good working conditions. Corresponding needs are Activity, Compensation, Independence, Security, Variety and Working Conditions.",
          score: {
            scale: "Extent",
            important: true,
            value: 61
          }
        },
        {
          id: "1.B.2.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.e",
          name: "Support",
          description:
            "Occupations that satisfy this work value offer supportive management that stands behind employees. Corresponding needs are Company Policies, Supervision: Human Relations and Supervision: Technical.",
          score: {
            scale: "Extent",
            important: false,
            value: 33
          }
        }
      ]
    },
    related_occupations: {
      occupation: [
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-1029.01/",
          code: "19-1029.01",
          title: "Bioinformatics Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2041.01/",
          code: "15-2041.01",
          title: "Biostatisticians",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2051.02/",
          code: "15-2051.02",
          title: "Clinical Data Managers",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-1221.00/",
          code: "15-1221.00",
          title: "Computer and Information Research Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2051.00/",
          code: "15-2051.00",
          title: "Data Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-3011.01/",
          code: "19-3011.01",
          title: "Environmental Economists",
          tags: {
            bright_outlook: false,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/13-2099.01/",
          code: "13-2099.01",
          title: "Financial Quantitative Analysts",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2021.00/",
          code: "15-2021.00",
          title: "Mathematicians",
          tags: {
            bright_outlook: false,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2031.00/",
          code: "15-2031.00",
          title: "Operations Research Analysts",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-3022.00/",
          code: "19-3022.00",
          title: "Survey Researchers",
          tags: {
            bright_outlook: false,
            green: false
          }
        }
      ]
    },
    additional_information: {
      source: [
        {
          url: "https://www.amstat.org/",
          name: "American Statistical Association"
        },
        {
          url: "https://www.actuary.org/",
          name: "American Academy of Actuaries"
        },
        {
          url: "https://www.aera.net/",
          name: "American Educational Research Association"
        },
        {
          url: "https://www.ams.org/",
          name: "American Mathematical Society"
        },
        {
          url: "https://www.ashg.org/",
          name: "American Society of Human Genetics"
        },
        {
          url: "https://www.airweb.org/",
          name: "Association for Institutional Research"
        },
        {
          url: "https://www.diaglobal.org/",
          name: "Drug Information Association"
        },
        {
          url: "https://www.biometricsociety.org/",
          name: "International Biometric Society"
        },
        {
          url: "https://www.ncme.org/",
          name: "National Council on Measurement in Education"
        },
        {
          url: "https://support.sas.com/usergroups/",
          name: "SAS Users Groups"
        }
      ]
    },
    translated: {
      title: "Статистици",
      description:
        "Разработете или приложете математическа или статистическа теория и методи за събиране, организиране, интерпретиране и обобщаване на числени данни, за да предоставите използваема информация. Може да специализира в области като биостатистика, селскостопанска статистика, бизнес статистика или икономическа статистика. Включва математика и статистици по проучвания."
    }
  },
  {
    code: "15-2041.00",
    display: "short",
    occupation: {
      code: "15-2041.00",
      title: "Statisticians",
      tags: {
        bright_outlook: true,
        green: false
      },
      description:
        "Develop or apply mathematical or statistical theory and methods to collect, organize, interpret, and summarize numerical data to provide usable information. May specialize in fields such as biostatistics, agricultural statistics, business statistics, or economic statistics. Includes mathematical and survey statisticians.",
      sample_of_reported_job_titles: {
        title: [
          "Database Analyst",
          "Demographer",
          "Education Research Analyst",
          "Mathematical Statistician",
          "Psychometric Consultant",
          "Quantitative Methodologist",
          "Statistical Analyst",
          "Statistical Consultant",
          "Statistical Reporting Analyst",
          "Statistician"
        ]
      },
      also_see: {
        occupation: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.01/",
            code: "15-2041.01",
            title: "Biostatisticians",
            tags: {
              bright_outlook: true,
              green: false
            }
          }
        ]
      },
      updated: {
        partial: false,
        year: 2024,
        resource_updated: [
          {
            title: "Abilities",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Alternate Titles",
            source: "Multiple sources",
            year: 2024
          },
          {
            title: "Detailed Work Activities",
            source: "Analyst",
            year: 2020
          },
          {
            title: "Education",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Interests",
            source: "Machine Learning",
            year: 2023
          },
          {
            title: "Job Zone",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Knowledge",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Sample of Reported Titles",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Skills",
            source: "Analyst",
            year: 2024
          },
          {
            title: "Tasks",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Technology Skills & Tools",
            source: "Analyst",
            year: 2023
          },
          {
            title: "Work Activities",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Context",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Needs",
            source: "Legacy Analyst"
          },
          {
            title: "Work Styles",
            source: "Occupational Expert",
            year: 2024
          },
          {
            title: "Work Values",
            source: "Analyst",
            year: 2008
          }
        ]
      },
      bright_outlook: {
        description: "This occupation is expected to grow rapidly.",
        category: ["Grow Rapidly"]
      },
      summary_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tasks",
            title: "Tasks"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/technology_skills",
            title: "Technology Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tools_used",
            title: "Tools Used"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/tools_technology",
            title: "Tools &amp; Technology"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/knowledge",
            title: "Knowledge"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/skills",
            title: "Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/abilities",
            title: "Abilities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_activities",
            title: "Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/detailed_work_activities",
            title: "Detailed Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_context",
            title: "Work Context"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/job_zone",
            title: "Job Zone"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/education",
            title: "Education"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/interests",
            title: "Interests"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_styles",
            title: "Work Styles"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/work_values",
            title: "Work Values"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/related_occupations",
            title: "Related Occupations"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/summary/additional_information",
            title: "Sources of Additional Information"
          }
        ]
      },
      details_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tasks",
            title: "Tasks"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/technology_skills",
            title: "Technology Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_used",
            title: "Tools Used"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_technology",
            title: "Tools &amp; Technology"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/knowledge",
            title: "Knowledge"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/skills",
            title: "Skills"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/abilities",
            title: "Abilities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_activities",
            title: "Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/detailed_work_activities",
            title: "Detailed Work Activities"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_context",
            title: "Work Context"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/job_zone",
            title: "Job Zone"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/education",
            title: "Education"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/interests",
            title: "Interests"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_styles",
            title: "Work Styles"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/work_values",
            title: "Work Values"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/related_occupations",
            title: "Related Occupations"
          },
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/additional_information",
            title: "Sources of Additional Information"
          }
        ]
      },
      custom_resources: {
        resource: [
          {
            href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/custom/work_activities_outline",
            title: "Work Activities Outline"
          }
        ]
      }
    },
    tasks: {
      task: [
        {
          id: 8956,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8956",
          statement:
            "Analyze and interpret statistical data to identify significant differences in relationships among sources of information.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: 8958,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8958",
          statement:
            "Evaluate the statistical methods and procedures used to obtain data to ensure validity, applicability, efficiency, and accuracy.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: 8953,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8953",
          statement:
            "Report results of statistical analyses, including information in the form of graphs, charts, and tables.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: 21100,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/21100",
          statement:
            "Determine whether statistical methods are appropriate, based on user needs or research questions of interest.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: 8957,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8957",
          statement:
            "Prepare data for processing by organizing information, checking for inaccuracies, and adjusting and weighting the raw data.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 87
          }
        },
        {
          id: 8966,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8966",
          statement:
            "Develop and test experimental designs, sampling techniques, and analytical methods.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: 8955,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8955",
          statement:
            "Identify relationships and trends in data, as well as any factors that could affect the results of research.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: 20194,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/20194",
          statement:
            "Present statistical and nonstatistical results, using charts, bullets, and graphs, in meetings or conferences to audiences such as clients, peers, and students.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 82
          }
        },
        {
          id: 8961,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8961",
          statement:
            "Design research projects that apply valid scientific techniques, and use information obtained from baselines or historical data to structure uncompromised and efficient analyses.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 82
          }
        },
        {
          id: 8965,
          green: false,
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tasks/8965",
          statement:
            "Adapt statistical methods to solve specific problems in many fields, such as economics, biology, and engineering.",
          category: "Core",
          score: {
            scale: "Importance",
            important: true,
            value: 81
          }
        }
      ]
    },
    technology_skills: {
      see_all: {
        href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/technology_skills?all=1"
      },
      category: [
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232605",
          title: {
            id: 43232605,
            name: "Analytical or scientific software"
          },
          example: [
            {
              hot_technology: "IBM SPSS Statistics",
              name: "IBM SPSS Statistics"
            },
            {
              name: "Minitab"
            },
            {
              hot_technology: "SAS",
              name: "SAS"
            },
            {
              hot_technology: "The MathWorks MATLAB",
              name: "The MathWorks MATLAB"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232106",
          title: {
            id: 43232106,
            name: "Presentation software"
          },
          example: [
            {
              hot_technology: "Microsoft PowerPoint",
              name: "Microsoft PowerPoint"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232405",
          title: {
            id: 43232405,
            name: "Object or component oriented development software"
          },
          example: [
            {
              hot_technology: "C++",
              name: "C++"
            },
            {
              hot_technology: "Python",
              name: "Python"
            },
            {
              hot_technology: "R",
              name: "R"
            },
            {
              name: "Sun Microsystems Java"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232306",
          title: {
            id: 43232306,
            name: "Data base user interface and query software"
          },
          example: [
            {
              hot_technology: "Amazon Redshift",
              name: "Amazon Redshift"
            },
            {
              hot_technology: "IBM DB2",
              name: "IBM DB2"
            },
            {
              hot_technology: "Microsoft SQL Server",
              name: "Microsoft SQL Server"
            },
            {
              hot_technology: "Structured query language SQL",
              name: "Structured query language SQL"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232307",
          title: {
            id: 43232307,
            name: "Data mining software"
          },
          example: [
            {
              name: "Angoss KnowledgeSEEKER"
            },
            {
              name: "NCR Teradata Warehouse Miner"
            },
            {
              name: "SAS Enterprise Miner"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232304",
          title: {
            id: 43232304,
            name: "Data base management system software"
          },
          example: [
            {
              hot_technology: "Apache Hadoop",
              name: "Apache Hadoop"
            },
            {
              name: "Apache Pig"
            },
            {
              hot_technology: "Teradata Database",
              name: "Teradata Database"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232402",
          title: {
            id: 43232402,
            name: "Development environment software"
          },
          example: [
            {
              name: "Common business oriented language COBOL"
            },
            {
              name: "Formula translation/translator FORTRAN"
            },
            {
              hot_technology: "Microsoft Visual Basic",
              name: "Microsoft Visual Basic"
            },
            {
              hot_technology: "Microsoft Visual Basic for Applications VBA",
              name: "Microsoft Visual Basic for Applications VBA"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43233004",
          title: {
            id: 43233004,
            name: "Operating system software"
          },
          example: [
            {
              hot_technology: "Linux",
              name: "Linux"
            },
            {
              hot_technology: "UNIX",
              name: "UNIX"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232314",
          title: {
            id: 43232314,
            name: "Business intelligence and data analysis software"
          },
          example: [
            {
              hot_technology: "Apache Spark",
              name: "Apache Spark"
            },
            {
              name: "Qlik Tech QlikView"
            },
            {
              hot_technology: "Tableau",
              name: "Tableau"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232110",
          title: {
            id: 43232110,
            name: "Spreadsheet software"
          },
          example: [
            {
              hot_technology: "Microsoft Excel",
              name: "Microsoft Excel"
            }
          ]
        }
      ]
    },
    tools_used: {
      category: [
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211503",
          title: {
            id: 43211503,
            name: "Notebook computers"
          },
          example: [
            {
              name: "Laptop computers"
            }
          ]
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211507",
          title: {
            id: 43211507,
            name: "Desktop computers"
          },
          example: []
        },
        {
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211508",
          title: {
            id: 43211508,
            name: "Personal computers"
          },
          example: []
        }
      ]
    },
    tools_technology: {
      tools: {
        category: [
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211503",
            title: {
              id: 43211503,
              name: "Notebook computers"
            },
            example: [
              {
                name: "Laptop computers"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211507",
            title: {
              id: 43211507,
              name: "Desktop computers"
            },
            example: []
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43211508",
            title: {
              id: 43211508,
              name: "Personal computers"
            },
            example: []
          }
        ]
      },
      technology: {
        see_all: {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2041.00/details/tools_technology?all=1"
        },
        category: [
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232605",
            title: {
              id: 43232605,
              name: "Analytical or scientific software"
            },
            example: [
              {
                hot_technology: "IBM SPSS Statistics",
                name: "IBM SPSS Statistics"
              },
              {
                name: "Minitab"
              },
              {
                hot_technology: "SAS",
                name: "SAS"
              },
              {
                hot_technology: "The MathWorks MATLAB",
                name: "The MathWorks MATLAB"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232106",
            title: {
              id: 43232106,
              name: "Presentation software"
            },
            example: [
              {
                hot_technology: "Microsoft PowerPoint",
                name: "Microsoft PowerPoint"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232405",
            title: {
              id: 43232405,
              name: "Object or component oriented development software"
            },
            example: [
              {
                hot_technology: "C++",
                name: "C++"
              },
              {
                hot_technology: "Python",
                name: "Python"
              },
              {
                hot_technology: "R",
                name: "R"
              },
              {
                name: "Sun Microsystems Java"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232306",
            title: {
              id: 43232306,
              name: "Data base user interface and query software"
            },
            example: [
              {
                hot_technology: "Amazon Redshift",
                name: "Amazon Redshift"
              },
              {
                hot_technology: "IBM DB2",
                name: "IBM DB2"
              },
              {
                hot_technology: "Microsoft SQL Server",
                name: "Microsoft SQL Server"
              },
              {
                hot_technology: "Structured query language SQL",
                name: "Structured query language SQL"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232307",
            title: {
              id: 43232307,
              name: "Data mining software"
            },
            example: [
              {
                name: "Angoss KnowledgeSEEKER"
              },
              {
                name: "NCR Teradata Warehouse Miner"
              },
              {
                name: "SAS Enterprise Miner"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232304",
            title: {
              id: 43232304,
              name: "Data base management system software"
            },
            example: [
              {
                hot_technology: "Apache Hadoop",
                name: "Apache Hadoop"
              },
              {
                name: "Apache Pig"
              },
              {
                hot_technology: "Teradata Database",
                name: "Teradata Database"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232402",
            title: {
              id: 43232402,
              name: "Development environment software"
            },
            example: [
              {
                name: "Common business oriented language COBOL"
              },
              {
                name: "Formula translation/translator FORTRAN"
              },
              {
                hot_technology: "Microsoft Visual Basic",
                name: "Microsoft Visual Basic"
              },
              {
                hot_technology: "Microsoft Visual Basic for Applications VBA",
                name: "Microsoft Visual Basic for Applications VBA"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43233004",
            title: {
              id: 43233004,
              name: "Operating system software"
            },
            example: [
              {
                hot_technology: "Linux",
                name: "Linux"
              },
              {
                hot_technology: "UNIX",
                name: "UNIX"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232314",
            title: {
              id: 43232314,
              name: "Business intelligence and data analysis software"
            },
            example: [
              {
                hot_technology: "Apache Spark",
                name: "Apache Spark"
              },
              {
                name: "Qlik Tech QlikView"
              },
              {
                hot_technology: "Tableau",
                name: "Tableau"
              }
            ]
          },
          {
            related:
              "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/tools_technology/43232110",
            title: {
              id: 43232110,
              name: "Spreadsheet software"
            },
            example: [
              {
                hot_technology: "Microsoft Excel",
                name: "Microsoft Excel"
              }
            ]
          }
        ]
      }
    },
    knowledge: {
      element: [
        {
          id: "2.C.4.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.4.a",
          name: "Mathematics",
          description:
            "Knowledge of arithmetic, algebra, geometry, calculus, statistics, and their applications.",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: "2.C.3.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.3.a",
          name: "Computers and Electronics",
          description:
            "Knowledge of circuit boards, processors, chips, electronic equipment, and computer hardware and software, including applications and programming.",
          score: {
            scale: "Importance",
            important: true,
            value: 80
          }
        },
        {
          id: "2.C.7.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.7.a",
          name: "English Language",
          description:
            "Knowledge of the structure and content of the English language including the meaning and spelling of words, rules of composition, and grammar.",
          score: {
            scale: "Importance",
            important: true,
            value: 73
          }
        },
        {
          id: "2.C.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.6",
          name: "Education and Training",
          description:
            "Knowledge of principles and methods for curriculum and training design, teaching and instruction for individuals and groups, and the measurement of training effects.",
          score: {
            scale: "Importance",
            important: false,
            value: 48
          }
        },
        {
          id: "2.C.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.a",
          name: "Administration and Management",
          description:
            "Knowledge of business and management principles involved in strategic planning, resource allocation, human resources modeling, leadership technique, production methods, and coordination of people and resources.",
          score: {
            scale: "Importance",
            important: false,
            value: 45
          }
        },
        {
          id: "2.C.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.e",
          name: "Customer and Personal Service",
          description:
            "Knowledge of principles and processes for providing customer and personal services. This includes customer needs assessment, meeting quality standards for services, and evaluation of customer satisfaction.",
          score: {
            scale: "Importance",
            important: false,
            value: 37
          }
        },
        {
          id: "2.C.4.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.4.d",
          name: "Biology",
          description:
            "Knowledge of plant and animal organisms, their tissues, cells, functions, interdependencies, and interactions with each other and the environment.",
          score: {
            scale: "Importance",
            important: false,
            value: 36
          }
        },
        {
          id: "2.C.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.1.b",
          name: "Administrative",
          description:
            "Knowledge of administrative and office procedures and systems such as word processing, managing files and records, stenography and transcription, designing forms, and workplace terminology.",
          score: {
            scale: "Importance",
            important: false,
            value: 33
          }
        },
        {
          id: "2.C.3.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.3.b",
          name: "Engineering and Technology",
          description:
            "Knowledge of the practical application of engineering science and technology. This includes applying principles, techniques, procedures, and equipment to the design and production of various goods and services.",
          score: {
            scale: "Importance",
            important: false,
            value: 33
          }
        },
        {
          id: "2.C.9.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/knowledge/2.C.9.b",
          name: "Communications and Media",
          description:
            "Knowledge of media production, communication, and dissemination techniques and methods. This includes alternative ways to inform and entertain via written, oral, and visual media.",
          score: {
            scale: "Importance",
            important: false,
            value: 31
          }
        }
      ]
    },
    skills: {
      element: [
        {
          id: "2.A.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.e",
          name: "Mathematics",
          description: "Using mathematics to solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 97
          }
        },
        {
          id: "2.A.2.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.2.a",
          name: "Critical Thinking",
          description:
            "Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "2.A.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.a",
          name: "Reading Comprehension",
          description:
            "Understanding written sentences and paragraphs in work-related documents.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "2.A.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.b",
          name: "Active Listening",
          description:
            "Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.B.2.i",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.B.2.i",
          name: "Complex Problem Solving",
          description:
            "Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.A.1.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.d",
          name: "Speaking",
          description: "Talking to others to convey information effectively.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "2.A.2.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.2.b",
          name: "Active Learning",
          description:
            "Understanding the implications of new information for both current and future problem-solving and decision-making.",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        },
        {
          id: "2.A.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.c",
          name: "Writing",
          description:
            "Communicating effectively in writing as appropriate for the needs of the audience.",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        },
        {
          id: "2.A.1.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.A.1.f",
          name: "Science",
          description: "Using scientific rules and methods to solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 63
          }
        },
        {
          id: "2.B.4.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/skills/2.B.4.e",
          name: "Judgment and Decision Making",
          description:
            "Considering the relative costs and benefits of potential actions to choose the most appropriate one.",
          score: {
            scale: "Importance",
            important: true,
            value: 60
          }
        }
      ]
    },
    abilities: {
      element: [
        {
          id: "1.A.1.c.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.c.1",
          name: "Mathematical Reasoning",
          description:
            "The ability to choose the right mathematical methods or formulas to solve a problem.",
          score: {
            scale: "Importance",
            important: true,
            value: 94
          }
        },
        {
          id: "1.A.1.c.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.c.2",
          name: "Number Facility",
          description:
            "The ability to add, subtract, multiply, or divide quickly and correctly.",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: "1.A.1.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.2",
          name: "Written Comprehension",
          description:
            "The ability to read and understand information and ideas presented in writing.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.A.1.b.5",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.5",
          name: "Inductive Reasoning",
          description:
            "The ability to combine pieces of information to form general rules or conclusions (includes finding a relationship among seemingly unrelated events).",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.4.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.4.a.1",
          name: "Near Vision",
          description:
            "The ability to see details at close range (within a few feet of the observer).",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.1",
          name: "Oral Comprehension",
          description:
            "The ability to listen to and understand information and ideas presented through spoken words and sentences.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.3",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.3",
          name: "Oral Expression",
          description:
            "The ability to communicate information and ideas in speaking so others will understand.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.a.4",
          name: "Written Expression",
          description:
            "The ability to communicate information and ideas in writing so others will understand.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        },
        {
          id: "1.A.1.b.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.4",
          name: "Deductive Reasoning",
          description:
            "The ability to apply general rules to specific problems to produce answers that make sense.",
          score: {
            scale: "Importance",
            important: true,
            value: 72
          }
        },
        {
          id: "1.A.1.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/abilities/1.A.1.b.6",
          name: "Information Ordering",
          description:
            "The ability to arrange things or actions in a certain order or pattern according to a specific rule or set of rules (e.g., patterns of numbers, letters, words, pictures, mathematical operations).",
          score: {
            scale: "Importance",
            important: true,
            value: 69
          }
        }
      ]
    },
    work_activities: {
      element: [
        {
          id: "4.A.2.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.a.4",
          name: "Analyzing Data or Information",
          description:
            "Identifying the underlying principles, reasons, or facts of information by breaking down information or data into separate parts.",
          score: {
            scale: "Importance",
            important: true,
            value: 99
          }
        },
        {
          id: "4.A.3.b.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.3.b.1",
          name: "Working with Computers",
          description:
            "Using computers and computer systems (including hardware and software) to program, write software, set up functions, enter data, or process information.",
          score: {
            scale: "Importance",
            important: true,
            value: 99
          }
        },
        {
          id: "4.A.2.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.a.2",
          name: "Processing Information",
          description:
            "Compiling, coding, categorizing, calculating, tabulating, auditing, or verifying information or data.",
          score: {
            scale: "Importance",
            important: true,
            value: 95
          }
        },
        {
          id: "4.A.4.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.a.1",
          name: "Interpreting the Meaning of Information for Others",
          description:
            "Translating or explaining what information means and how it can be used.",
          score: {
            scale: "Importance",
            important: true,
            value: 93
          }
        },
        {
          id: "4.A.2.b.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.b.1",
          name: "Making Decisions and Solving Problems",
          description:
            "Analyzing information and evaluating results to choose the best solution and solve problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 91
          }
        },
        {
          id: "4.A.1.a.1",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.1.a.1",
          name: "Getting Information",
          description:
            "Observing, receiving, and otherwise obtaining information from all relevant sources.",
          score: {
            scale: "Importance",
            important: true,
            value: 88
          }
        },
        {
          id: "4.A.4.a.2",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.a.2",
          name: "Communicating with Supervisors, Peers, or Subordinates",
          description:
            "Providing information to supervisors, co-workers, and subordinates by telephone, in written form, e-mail, or in person.",
          score: {
            scale: "Importance",
            important: true,
            value: 85
          }
        },
        {
          id: "4.A.2.b.3",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.2.b.3",
          name: "Updating and Using Relevant Knowledge",
          description:
            "Keeping up-to-date technically and applying new knowledge to your job.",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: "4.A.3.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.3.b.6",
          name: "Documenting/Recording Information",
          description:
            "Entering, transcribing, recording, storing, or maintaining information in written or electronic/magnetic form.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "4.A.4.b.6",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_activities/4.A.4.b.6",
          name: "Providing Consultation and Advice to Others",
          description:
            "Providing guidance and expert advice to management or other groups on technical, systems-, or process-related topics.",
          score: {
            scale: "Importance",
            important: true,
            value: 75
          }
        }
      ]
    },
    detailed_work_activities: {
      activity: [
        {
          id: "4.A.2.b.1.I04.D10",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.1.I04.D10",
          name: "Determine appropriate methods for data analysis."
        },
        {
          id: "4.A.2.a.4.I04.D02",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.4.I04.D02",
          name: "Analyze data to identify trends or relationships among variables."
        },
        {
          id: "4.A.2.a.1.I10.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.1.I10.D01",
          name: "Evaluate project designs to determine adequacy or feasibility."
        },
        {
          id: "4.A.3.b.6.I03.D05",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.6.I03.D05",
          name: "Prepare analytical reports."
        },
        {
          id: "4.A.2.a.4.I05.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.4.I05.D01",
          name: "Evaluate technical data to determine effect on designs or plans."
        },
        {
          id: "4.A.2.b.2.I18.D14",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.2.I18.D14",
          name: "Prepare graphics or other visual representations of information."
        },
        {
          id: "4.A.2.a.2.I01.D06",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.a.2.I01.D06",
          name: "Evaluate data quality."
        },
        {
          id: "4.A.3.b.1.I06.D07",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.1.I06.D07",
          name: "Prepare data for analysis."
        },
        {
          id: "4.A.2.b.2.I23.D04",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.2.b.2.I23.D04",
          name: "Design research studies to obtain scientific information."
        },
        {
          id: "4.A.3.b.6.I03.D01",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/detailed_work_activities/4.A.3.b.6.I03.D01",
          name: "Present research results to others."
        }
      ]
    },
    work_context: {
      element: [
        {
          id: "4.C.1.a.2.h",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.h",
          name: "Electronic Mail",
          description: "How often do you use electronic mail in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 100
          },
          response: [
            {
              percentage: 100,
              name: "Every day"
            }
          ]
        },
        {
          id: "4.C.2.d.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.2.d.1.a",
          name: "Spend Time Sitting",
          description: "How much does this job require sitting?",
          score: {
            scale: "Context",
            important: true,
            value: 93
          },
          response: [
            {
              percentage: 71,
              name: "Continually or almost continually"
            },
            {
              percentage: 29,
              name: "More than half the time"
            }
          ]
        },
        {
          id: "4.C.3.b.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.b.4",
          name: "Importance of Being Exact or Accurate",
          description:
            "How important is being very exact or highly accurate in performing this job?",
          score: {
            scale: "Context",
            important: true,
            value: 88
          },
          response: [
            {
              percentage: 67,
              name: "Extremely important"
            },
            {
              percentage: 24,
              name: "Very important"
            }
          ]
        },
        {
          id: "4.C.1.a.2.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.f",
          name: "Telephone",
          description:
            "How often do you have telephone conversations in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 86
          },
          response: [
            {
              percentage: 50,
              name: "Every day"
            },
            {
              percentage: 44,
              name: "Once a week or more but not every day"
            }
          ]
        },
        {
          id: "4.C.1.b.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.b.1.e",
          name: "Work With Work Group or Team",
          description:
            "How important is it to work with others in a group or team in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 86
          },
          response: [
            {
              percentage: 53,
              name: "Extremely important"
            },
            {
              percentage: 37,
              name: "Very important"
            },
            {
              percentage: 11,
              name: "Important"
            }
          ]
        },
        {
          id: "4.C.2.a.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.2.a.1.a",
          name: "Indoors, Environmentally Controlled",
          description:
            "How often does this job require working indoors in environmentally controlled conditions?",
          score: {
            scale: "Context",
            important: true,
            value: 84
          },
          response: [
            {
              percentage: 80,
              name: "Every day"
            },
            {
              percentage: 15,
              name: "Never"
            }
          ]
        },
        {
          id: "4.C.1.a.2.l",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.1.a.2.l",
          name: "Face-to-Face Discussions",
          description:
            "How often do you have to have face-to-face discussions with individuals or teams in this job?",
          score: {
            scale: "Context",
            important: true,
            value: 83
          },
          response: [
            {
              percentage: 39,
              name: "Every day"
            },
            {
              percentage: 56,
              name: "Once a week or more but not every day"
            }
          ]
        },
        {
          id: "4.C.3.a.4",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.a.4",
          name: "Freedom to Make Decisions",
          description:
            "How much decision making freedom, without supervision, does the job offer?",
          score: {
            scale: "Context",
            important: true,
            value: 80
          },
          response: [
            {
              percentage: 33,
              name: "A lot of freedom"
            },
            {
              percentage: 52,
              name: "Some freedom"
            },
            {
              percentage: 14,
              name: "Limited freedom"
            }
          ]
        },
        {
          id: "4.C.3.b.8",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.b.8",
          name: "Structured versus Unstructured Work",
          description:
            "To what extent is this job structured for the worker, rather than allowing the worker to determine tasks, priorities, and goals?",
          score: {
            scale: "Context",
            important: true,
            value: 79
          },
          response: [
            {
              percentage: 24,
              name: "A lot of freedom"
            },
            {
              percentage: 67,
              name: "Some freedom"
            }
          ]
        },
        {
          id: "4.C.3.d.8",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_context/4.C.3.d.8",
          name: "Duration of Typical Work Week",
          description: "Number of hours typically worked in one week.",
          score: {
            scale: "Context",
            important: true,
            value: 74
          },
          response: [
            {
              percentage: 48,
              name: "More than 40 hours"
            },
            {
              percentage: 52,
              name: "40 hours"
            }
          ]
        }
      ]
    },
    job_zone: {
      value: 5,
      title: "Job Zone Five: Extensive Preparation Needed",
      education:
        "Most of these occupations require graduate school. For example, they may require a master's degree, and some require a Ph.D., M.D., or J.D. (law degree).",
      related_experience:
        "Extensive skill, knowledge, and experience are needed for these occupations. Many require more than five years of experience. For example, surgeons must complete four years of college and an additional five to seven years of specialized medical training to be able to do their job.",
      job_training:
        "Employees may need some on-the-job training, but most of these occupations assume that the person will already have the required skills, knowledge, work-related experience, and/or training.",
      job_zone_examples:
        "These occupations often involve coordinating, training, supervising, or managing the activities of others to accomplish goals. Very advanced communication and organizational skills are required. Examples include pharmacists, lawyers, astronomers, biologists, clergy, physician assistants, and veterinarians.",
      svp_range: "(8.0 and above)"
    },
    education: {
      level_required: {
        category: [
          {
            name: "Master's degree",
            score: {
              scale: "Percentage of Respondents",
              value: 62
            }
          },
          {
            name: "Bachelor's degree",
            score: {
              scale: "Percentage of Respondents",
              value: 14
            }
          },
          {
            name: "Doctoral degree",
            score: {
              scale: "Percentage of Respondents",
              value: 10
            }
          }
        ]
      }
    },
    interests: {
      element: [
        {
          id: "1.B.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.b",
          name: "Investigative",
          description:
            "Work involves studying and researching non-living objects, living organisms, disease or other forms of impairment, or human behavior. Investigative occupations are often associated with physical, life, medical, or social sciences, and can be found in the fields of humanities, mathematics/statistics, information technology, or health care service.",
          score: {
            scale: "Occupational Interest",
            important: true,
            value: 94
          }
        },
        {
          id: "1.B.1.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.f",
          name: "Conventional",
          description:
            "Work involves following procedures and regulations to organize information or data, typically in a business setting. Conventional occupations are often associated with office work, accounting, mathematics/statistics, information technology, finance, or human resources.",
          score: {
            scale: "Occupational Interest",
            important: true,
            value: 82
          }
        },
        {
          id: "1.B.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.a",
          name: "Realistic",
          description:
            "Work involves designing, building, or repairing of equipment, materials, or structures, engaging in physical activity, or working outdoors. Realistic occupations are often associated with engineering, mechanics and electronics, construction, woodworking, transportation, machine operation, agriculture, animal services, physical or manual labor, athletics, or protective services.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 18
          }
        },
        {
          id: "1.B.1.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.e",
          name: "Enterprising",
          description:
            "Work involves managing, negotiating, marketing, or selling, typically in a business setting, or leading or advising people in political and legal situations. Enterprising occupations are often associated with business initiatives, sales, marketing/advertising, finance, management/administration, professional advising, public speaking, politics, or law.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 14
          }
        },
        {
          id: "1.B.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.c",
          name: "Artistic",
          description:
            "Work involves creating original visual artwork, performances, written works, food, or music for a variety of media, or applying artistic principles to the design of various objects and materials. Artistic occupations are often associated with visual arts, applied arts and design, performing arts, music, creative writing, media, or culinary art.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 13
          }
        },
        {
          id: "1.B.1.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/interests/1.B.1.d",
          name: "Social",
          description:
            "Work involves helping, teaching, advising, assisting, or providing service to others. Social occupations are often associated with social, health care, personal service, teaching/education, or religious activities.",
          score: {
            scale: "Occupational Interest",
            important: false,
            value: 12
          }
        }
      ]
    },
    work_styles: {
      element: [
        {
          id: "1.C.7.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.7.b",
          name: "Analytical Thinking",
          description:
            "Job requires analyzing information and using logic to address work-related issues and problems.",
          score: {
            scale: "Importance",
            important: true,
            value: 98
          }
        },
        {
          id: "1.C.5.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.c",
          name: "Integrity",
          description: "Job requires being honest and ethical.",
          score: {
            scale: "Importance",
            important: true,
            value: 92
          }
        },
        {
          id: "1.C.5.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.b",
          name: "Attention to Detail",
          description:
            "Job requires being careful about detail and thorough in completing work tasks.",
          score: {
            scale: "Importance",
            important: true,
            value: 91
          }
        },
        {
          id: "1.C.5.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.5.a",
          name: "Dependability",
          description:
            "Job requires being reliable, responsible, and dependable, and fulfilling obligations.",
          score: {
            scale: "Importance",
            important: true,
            value: 83
          }
        },
        {
          id: "1.C.3.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.3.a",
          name: "Cooperation",
          description:
            "Job requires being pleasant with others on the job and displaying a good-natured, cooperative attitude.",
          score: {
            scale: "Importance",
            important: true,
            value: 81
          }
        },
        {
          id: "1.C.1.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.c",
          name: "Initiative",
          description:
            "Job requires a willingness to take on responsibilities and challenges.",
          score: {
            scale: "Importance",
            important: true,
            value: 79
          }
        },
        {
          id: "1.C.1.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.a",
          name: "Achievement/Effort",
          description:
            "Job requires establishing and maintaining personally challenging achievement goals and exerting effort toward mastering tasks.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.C.1.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.1.b",
          name: "Persistence",
          description: "Job requires persistence in the face of obstacles.",
          score: {
            scale: "Importance",
            important: true,
            value: 78
          }
        },
        {
          id: "1.C.4.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.4.c",
          name: "Adaptability/Flexibility",
          description:
            "Job requires being open to change (positive or negative) and to considerable variety in the workplace.",
          score: {
            scale: "Importance",
            important: true,
            value: 74
          }
        },
        {
          id: "1.C.4.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_styles/1.C.4.b",
          name: "Stress Tolerance",
          description:
            "Job requires accepting criticism and dealing calmly and effectively with high-stress situations.",
          score: {
            scale: "Importance",
            important: true,
            value: 67
          }
        }
      ]
    },
    work_values: {
      element: [
        {
          id: "1.B.2.f",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.f",
          name: "Independence",
          description:
            "Occupations that satisfy this work value allow employees to work on their own and make decisions. Corresponding needs are Creativity, Responsibility and Autonomy.",
          score: {
            scale: "Extent",
            important: true,
            value: 78
          }
        },
        {
          id: "1.B.2.a",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.a",
          name: "Achievement",
          description:
            "Occupations that satisfy this work value are results oriented and allow employees to use their strongest abilities, giving them a feeling of accomplishment. Corresponding needs are Ability Utilization and Achievement.",
          score: {
            scale: "Extent",
            important: true,
            value: 72
          }
        },
        {
          id: "1.B.2.c",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.c",
          name: "Recognition",
          description:
            "Occupations that satisfy this work value offer advancement, potential for leadership, and are often considered prestigious. Corresponding needs are Advancement, Authority, Recognition and Social Status.",
          score: {
            scale: "Extent",
            important: true,
            value: 67
          }
        },
        {
          id: "1.B.2.d",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.d",
          name: "Relationships",
          description:
            "Occupations that satisfy this work value allow employees to provide service to others and work with co-workers in a friendly non-competitive environment. Corresponding needs are Co-workers, Moral Values and Social Service.",
          score: {
            scale: "Extent",
            important: true,
            value: 61
          }
        },
        {
          id: "1.B.2.b",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.b",
          name: "Working Conditions",
          description:
            "Occupations that satisfy this work value offer job security and good working conditions. Corresponding needs are Activity, Compensation, Independence, Security, Variety and Working Conditions.",
          score: {
            scale: "Extent",
            important: true,
            value: 61
          }
        },
        {
          id: "1.B.2.e",
          related:
            "https://services.onetcenter.org/ws/online/occupations/15-2041.00/related/work_values/1.B.2.e",
          name: "Support",
          description:
            "Occupations that satisfy this work value offer supportive management that stands behind employees. Corresponding needs are Company Policies, Supervision: Human Relations and Supervision: Technical.",
          score: {
            scale: "Extent",
            important: false,
            value: 33
          }
        }
      ]
    },
    related_occupations: {
      occupation: [
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-1029.01/",
          code: "19-1029.01",
          title: "Bioinformatics Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2041.01/",
          code: "15-2041.01",
          title: "Biostatisticians",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2051.02/",
          code: "15-2051.02",
          title: "Clinical Data Managers",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-1221.00/",
          code: "15-1221.00",
          title: "Computer and Information Research Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2051.00/",
          code: "15-2051.00",
          title: "Data Scientists",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-3011.01/",
          code: "19-3011.01",
          title: "Environmental Economists",
          tags: {
            bright_outlook: false,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/13-2099.01/",
          code: "13-2099.01",
          title: "Financial Quantitative Analysts",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2021.00/",
          code: "15-2021.00",
          title: "Mathematicians",
          tags: {
            bright_outlook: false,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/15-2031.00/",
          code: "15-2031.00",
          title: "Operations Research Analysts",
          tags: {
            bright_outlook: true,
            green: false
          }
        },
        {
          href: "https://services.onetcenter.org/ws/online/occupations/19-3022.00/",
          code: "19-3022.00",
          title: "Survey Researchers",
          tags: {
            bright_outlook: false,
            green: false
          }
        }
      ]
    },
    additional_information: {
      source: [
        {
          url: "https://www.amstat.org/",
          name: "American Statistical Association"
        },
        {
          url: "https://www.actuary.org/",
          name: "American Academy of Actuaries"
        },
        {
          url: "https://www.aera.net/",
          name: "American Educational Research Association"
        },
        {
          url: "https://www.ams.org/",
          name: "American Mathematical Society"
        },
        {
          url: "https://www.ashg.org/",
          name: "American Society of Human Genetics"
        },
        {
          url: "https://www.airweb.org/",
          name: "Association for Institutional Research"
        },
        {
          url: "https://www.diaglobal.org/",
          name: "Drug Information Association"
        },
        {
          url: "https://www.biometricsociety.org/",
          name: "International Biometric Society"
        },
        {
          url: "https://www.ncme.org/",
          name: "National Council on Measurement in Education"
        },
        {
          url: "https://support.sas.com/usergroups/",
          name: "SAS Users Groups"
        }
      ]
    },
    translated: {
      title: "Статистици",
      description:
        "Разработете или приложете математическа или статистическа теория и методи за събиране, организиране, интерпретиране и обобщаване на числени данни, за да предоставите използваема информация. Може да специализира в области като биостатистика, селскостопанска статистика, бизнес статистика или икономическа статистика. Включва математика и статистици по проучвания."
    }
  }
];
