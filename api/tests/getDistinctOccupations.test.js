const db = require("../database");

// Мокване на getDistinctOccupations
jest.mock("../database", () => ({
  getDistinctOccupations: jest.fn()
}));

describe("Тестове на функцията getDistinctOccupations", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с резултати, когато запитването е успешно", async () => {
    const callback = jest.fn();

    // Мокване на успешен резултат за getDistinctOccupations
    db.getDistinctOccupations.mockImplementation((callback) => {
      const result = [
        {
          code: "27-1024.00",
          title_bg: "Програмист",
          title_en: "Software Engineer",
          description: "Develops software applications.",
          bright_outlook: true,
          education: "Bachelor's Degree"
        }
      ];
      callback(null, result); // Симулира успешен резултат
    });

    // Извикване на mocked getDistinctOccupations
    await db.getDistinctOccupations(callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, [
      {
        code: "27-1024.00",
        title_bg: "Програмист",
        title_en: "Software Engineer",
        description: "Develops software applications.",
        bright_outlook: true,
        education: "Bachelor's Degree"
      }
    ]);
  });

  it("трябва да извика callback с грешка, ако има проблем със запитването", async () => {
    const callback = jest.fn();

    // Мокване на грешка в getDistinctOccupations
    db.getDistinctOccupations.mockImplementation((callback) => {
      callback(new Error("Query failed"), null); // Симулира грешка
    });

    // Извикване на mocked getDistinctOccupations
    await db.getDistinctOccupations(callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Query failed"
      }),
      null
    );
  });
});
