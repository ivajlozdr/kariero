const db = require("../database"); // Импортиране на файла с базата данни

// Мокираме самата функция saveUserResponses
jest.mock("../database", () => ({
  saveUserResponses: jest.fn() // Мокиране на функцията saveUserResponses
}));

describe("Функция за съхранение на отговори от потребител", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Изчистваме мок след всеки тест
  });

  // Тест за успешен случай на запазване на отговори
  it("трябва да съхрани отговорите успешно", (done) => {
    const userId = 1; // Примерен ID на потребител
    const userResponses = [
      { answer: "Отговор 1" },
      { answer: "Отговор 2" },
      { answer: "Отговор 3" }
    ];
    const date = "2025-02-27";
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме успешно съхранение на отговори
    db.saveUserResponses.mockImplementationOnce(
      (userId, userResponses, date, callback) => {
        callback(null, { affectedRows: 1 }); // Примерно 1 успешно добавен ред
      }
    );

    // Извикваме функцията
    db.saveUserResponses(userId, userResponses, date, mockCallback);

    // Проверяваме дали функцията е извикана с правилните аргументи
    expect(db.saveUserResponses).toHaveBeenCalledWith(
      userId,
      userResponses,
      date,
      mockCallback
    );

    // Проверяваме дали колбекът е извикан с правилните параметри
    expect(mockCallback).toHaveBeenCalledWith(null, { affectedRows: 1 });
    done();
  });

  // Тест за случай с грешка при съхранение на отговорите
  it("трябва да предаде грешка, ако възникне проблем", (done) => {
    const userId = 1;
    const userResponses = [{ answer: "Отговор 1" }, { answer: "Отговор 2" }];
    const date = "2025-02-27";
    const mockCallback = jest.fn();
    const mockError = new Error("Database error");

    // Симулираме грешка при съхранение
    db.saveUserResponses.mockImplementationOnce(
      (userId, userResponses, date, callback) => {
        callback(mockError, null); // Мокирана грешка
      }
    );

    // Извикваме функцията
    db.saveUserResponses(userId, userResponses, date, mockCallback);

    // Проверяваме дали колбекът е извикан с грешката
    expect(mockCallback).toHaveBeenCalledWith(mockError, null);
    done();
  });

  // Тест за случай когато няма добавени редове
  it("трябва да върне 0 добавени редове, ако няма успех", (done) => {
    const userId = 1;
    const userResponses = [{ answer: "Отговор 1" }, { answer: "Отговор 2" }];
    const date = "2025-02-27";
    const mockCallback = jest.fn();

    // Симулираме неуспешно добавяне на ред
    db.saveUserResponses.mockImplementationOnce(
      (userId, userResponses, date, callback) => {
        callback(null, { affectedRows: 0 }); // Няма добавени редове
      }
    );

    // Извикваме функцията
    db.saveUserResponses(userId, userResponses, date, mockCallback);

    // Проверяваме дали колбекът е извикан с правилните параметри
    expect(mockCallback).toHaveBeenCalledWith(null, { affectedRows: 0 });
    done();
  });
});
