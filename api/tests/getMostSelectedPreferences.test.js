const db = require("../database");

// Мокване на getMostSelectedPreferences
jest.mock("../database", () => ({
  getMostSelectedPreferences: jest.fn()
}));

describe("Тестове на функцията getMostSelectedPreferences", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с резултати, когато запитването е успешно", async () => {
    const callback = jest.fn();
    const limit = 5;
    const column = "work_style";

    // Мокване на успешен резултат за getMostSelectedPreferences
    db.getMostSelectedPreferences.mockImplementation(
      (column, limit, callback) => {
        const result = [
          { preference: "Remote", occurrence_count: 120 },
          { preference: "Hybrid", occurrence_count: 80 }
        ];
        callback(null, result); // Симулира успешен резултат
      }
    );

    // Извикване на mocked getMostSelectedPreferences
    await db.getMostSelectedPreferences(column, limit, callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, [
      { preference: "Remote", occurrence_count: 120 },
      { preference: "Hybrid", occurrence_count: 80 }
    ]);
  });

  it("трябва да извика callback с грешка, ако има проблем със запитването", async () => {
    const callback = jest.fn();
    const limit = 5;
    const column = "work_style";

    // Мокване на грешка в getMostSelectedPreferences
    db.getMostSelectedPreferences.mockImplementation(
      (column, limit, callback) => {
        callback(new Error("Query failed"), null); // Симулира грешка
      }
    );

    // Извикване на mocked getMostSelectedPreferences
    await db.getMostSelectedPreferences(column, limit, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Query failed"
      }),
      null
    );
  });
});
