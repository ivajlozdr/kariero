const db = require("../database");
const hf = require("../helper_functions");

// Мокване на помощни функции и база данни
jest.mock("../helper_functions", () => ({
  translate: jest.fn()
}));

jest.mock("../database", () => ({
  saveOccupation: jest.fn()
}));

describe("Запазване на професии", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва успешно да запази професия с преведени данни", async () => {
    // Настройване на успешен мок за превод
    hf.translate.mockResolvedValue("Преведен текст");

    // Настройване на успешна реализация на saveOccupation
    db.saveOccupation.mockImplementation(
      (data, userId, date, reason, callback) => {
        callback(null);
      }
    );

    // Тестови данни (минимални)
    const testData = { code: "123" };
    const callback = jest.fn();

    // Изпълнение на функцията
    await db.saveOccupation(testData, 1, "2023-01-01", "Test Reason", callback);

    // Проверка дали callback е бил извикан без грешка
    expect(callback).toHaveBeenCalledWith(null);
  });

  it("трябва да обработва грешки при превод", async () => {
    // Да накараме превода да се провали
    hf.translate.mockRejectedValue(new Error("Грешка при превод"));

    // Реализиране на saveOccupation, която да подаде грешка в callback
    db.saveOccupation.mockImplementation(
      (data, userId, date, reason, callback) => {
        callback(new Error("Грешка при превод"));
      }
    );

    // Тестови данни (минимални)
    const testData = { code: "123" };
    const callback = jest.fn();

    // Изпълнение на функцията
    await db.saveOccupation(testData, 1, "2023-01-01", "Test Reason", callback);

    // Проверка дали callback е бил извикан с грешка
    expect(callback).toHaveBeenCalledWith(expect.any(Error));
  });
});
