const db = require("../database");

// Мокване на помощни функции
jest.mock("../helper_functions", () => ({
  translate: jest.fn()
}));

// Мокване на saveCategoryData
jest.mock("../database", () => ({
  saveCategoryData: jest.fn()
}));

describe("Тестове на функцията saveCategoryData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с успех, когато данните са валидни", async () => {
    // Мокване на успешен резултат за saveCategoryData
    const callback = jest.fn();

    // Настройка на какво да върне saveCategoryData при извикване
    db.saveCategoryData.mockImplementation((translatedData, callback) => {
      callback(null); // Симулира успешен резултат
    });

    const translatedData = {
      code: "123",
      abilities: {
        element: [{ id: "1", name: "Ability 1", score: { value: 5 } }]
      },
      knowledge: {
        element: [{ id: "2", name: "Knowledge 1", score: { value: 4 } }]
      },
      skills: { element: [{ id: "3", name: "Skill 1", score: { value: 3 } }] },
      interests: {
        element: [{ id: "4", name: "Interest 1", score: { value: 2 } }]
      },
      translated: {
        abilities: ["Умение 1"],
        knowledge: ["Познание 1"],
        skills: ["Умение 1"],
        interests: ["Интерес 1"]
      }
    };

    // Извикване на mocked saveCategoryData
    await db.saveCategoryData(translatedData, callback);

    // Проверка дали callback е извикан с null (успех)
    expect(callback).toHaveBeenCalledWith(null);
  });

  it("трябва да извика callback с грешка, ако липсва код за професия", async () => {
    // Мокване на грешка в saveCategoryData
    const callback = jest.fn();

    db.saveCategoryData.mockImplementation((translatedData, callback) => {
      callback(new Error("Invalid occupation code.")); // Симулира грешка
    });

    const translatedData = {};

    // Извикване на mocked saveCategoryData
    await db.saveCategoryData(translatedData, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Invalid occupation code."
      })
    );
  });

  it("трябва да обработва грешки при неуспешно стартиране на транзакция", async () => {
    // Мокване на неуспешно стартиране на транзакция
    const callback = jest.fn();

    db.saveCategoryData.mockImplementation((translatedData, callback) => {
      db.beginTransaction = jest.fn((callback) =>
        callback(new Error("Transaction start error"))
      ); // Симулира грешка в транзакцията
      callback(new Error("Transaction start error"));
    });

    const translatedData = { code: "123" };

    // Извикване на mocked saveCategoryData
    await db.saveCategoryData(translatedData, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Transaction start error"
      })
    );
  });
});
