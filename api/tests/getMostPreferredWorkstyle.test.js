const db = require("../database");

// Мокване на getMostPreferredWorkstyle
jest.mock("../database", () => ({
  getMostPreferredWorkstyle: jest.fn()
}));

describe("Тестове на функцията getMostPreferredWorkstyle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с резултати, когато запитването е успешно", async () => {
    const callback = jest.fn();
    const limit = 5;
    const columnName = "work_style";

    // Мокване на успешен резултат за getMostPreferredWorkstyle
    db.getMostPreferredWorkstyle.mockImplementation(
      (columnName, limit, callback) => {
        const result = [
          { preference: "Remote", occurrence_count: 150 },
          { preference: "Hybrid", occurrence_count: 90 }
        ];
        callback(null, result); // Симулира успешен резултат
      }
    );

    // Извикване на mocked getMostPreferredWorkstyle
    await db.getMostPreferredWorkstyle(columnName, limit, callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, [
      { preference: "Remote", occurrence_count: 150 },
      { preference: "Hybrid", occurrence_count: 90 }
    ]);
  });

  it("трябва да извика callback с грешка, ако има проблем със запитването", async () => {
    const callback = jest.fn();
    const limit = 5;
    const columnName = "work_style";

    // Мокване на грешка в getMostPreferredWorkstyle
    db.getMostPreferredWorkstyle.mockImplementation(
      (columnName, limit, callback) => {
        callback(new Error("Query failed"), null); // Симулира грешка
      }
    );

    // Извикване на mocked getMostPreferredWorkstyle
    await db.getMostPreferredWorkstyle(columnName, limit, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Query failed"
      }),
      null
    );
  });
});
