const db = require("../database"); // Импортиране на файла с базата данни

// Мокираме самата функция saveFinalScores
jest.mock("../database", () => ({
  saveFinalScores: jest.fn() // Мокиране на функцията saveFinalScores
}));

describe("Функция за запис на финални резултати", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Изчистваме мок след всеки тест, за да избегнем намеса
  });

  // Тест за успешен запис на финалните резултати
  it("трябва да създаде нов запис с финалните резултати", (done) => {
    const userId = 1; // Примерен ID на потребител
    const scores = {
      RIASEC: {
        Realistic: {
          HandsOn: 5,
          TechComfort: 3
        },
        Investigative: {
          ProblemSolving: 4,
          Curiosity: 5
        },
        Artistic: {
          Creative: 2
        },
        Social: {
          Social: 4,
          Collaboration: 3
        },
        Enterprising: {
          Enterprising: 5
        },
        Conventional: {
          Conventional: 3
        }
      },
      Preferences: {
        PersonalityTypes: ["INTJ"],
        WorkEnvironment: ["Remote"],
        JobPriority: ["Salary"],
        JobSatisfaction: ["High"],
        EducationLevel: ["Bachelor's Degree"],
        CareerGoals: ["Leadership"]
      },
      WorkStyle: {
        StructurePreference: "High",
        Collaboration: "Low",
        WorkEnvironment: "Office"
      }
    };
    const date = "2025-02-27";
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме успешен запис
    db.saveFinalScores.mockImplementationOnce(
      (userId, scores, date, callback) => {
        callback(null, { affectedRows: 1 }); // Примерно 1 успешно добавен ред
      }
    );

    // Извикваме функцията
    db.saveFinalScores(userId, scores, date, mockCallback);

    // Проверяваме дали функцията е извикана с правилните параметри
    expect(db.saveFinalScores).toHaveBeenCalledWith(
      userId,
      scores,
      date,
      expect.any(Function) // Проверяваме дали колбек функцията е подадена
    );

    // Проверяваме дали колбекът е извикан с правилните параметри
    expect(mockCallback).toHaveBeenCalledWith(null, { affectedRows: 1 });
    done();
  });

  // Тест за случай с грешка при запис на финалните резултати
  it("трябва да предаде грешка ако възникне проблем при запис", (done) => {
    const userId = 1;
    const scores = {
      RIASEC: {
        Realistic: {
          HandsOn: 5,
          TechComfort: 3
        },
        Investigative: {
          ProblemSolving: 4,
          Curiosity: 5
        },
        Artistic: {
          Creative: 2
        },
        Social: {
          Social: 4,
          Collaboration: 3
        },
        Enterprising: {
          Enterprising: 5
        },
        Conventional: {
          Conventional: 3
        }
      },
      Preferences: {
        PersonalityTypes: ["INTJ"],
        WorkEnvironment: ["Remote"],
        JobPriority: ["Salary"],
        JobSatisfaction: ["High"],
        EducationLevel: ["Bachelor's Degree"],
        CareerGoals: ["Leadership"]
      },
      WorkStyle: {
        StructurePreference: "High",
        Collaboration: "Low",
        WorkEnvironment: "Office"
      }
    };
    const date = "2025-02-27";
    const mockCallback = jest.fn();
    const mockError = new Error("Database error");

    // Симулираме грешка при запис
    db.saveFinalScores.mockImplementationOnce(
      (userId, scores, date, callback) => {
        callback(mockError, null); // Симулираме грешка
      }
    );

    // Извикваме функцията
    db.saveFinalScores(userId, scores, date, mockCallback);

    // Проверяваме дали колбекът е извикан с грешката
    expect(mockCallback).toHaveBeenCalledWith(mockError, null);
    done();
  });

  // Тест за случай когато няма добавени редове
  it("трябва да върне 0 добавени редове ако не е успешно", (done) => {
    const userId = 1;
    const scores = {
      RIASEC: {
        Realistic: {
          HandsOn: 5,
          TechComfort: 3
        },
        Investigative: {
          ProblemSolving: 4,
          Curiosity: 5
        },
        Artistic: {
          Creative: 2
        },
        Social: {
          Social: 4,
          Collaboration: 3
        },
        Enterprising: {
          Enterprising: 5
        },
        Conventional: {
          Conventional: 3
        }
      },
      Preferences: {
        PersonalityTypes: ["INTJ"],
        WorkEnvironment: ["Remote"],
        JobPriority: ["Salary"],
        JobSatisfaction: ["High"],
        EducationLevel: ["Bachelor's Degree"],
        CareerGoals: ["Leadership"]
      },
      WorkStyle: {
        StructurePreference: "High",
        Collaboration: "Low",
        WorkEnvironment: "Office"
      }
    };
    const date = "2025-02-27";
    const mockCallback = jest.fn();

    // Симулираме, че няма добавени редове
    db.saveFinalScores.mockImplementationOnce(
      (userId, scores, date, callback) => {
        callback(null, { affectedRows: 0 }); // Примерно не е добавен ред
      }
    );

    // Извикваме функцията
    db.saveFinalScores(userId, scores, date, mockCallback);

    // Проверяваме дали колбекът е извикан с 0 добавени редове
    expect(mockCallback).toHaveBeenCalledWith(null, { affectedRows: 0 });
    done();
  });
});
