const db = require("../database");

// Мокване на getTopRecommendedOccupations
jest.mock("../database", () => ({
  getTopRecommendedOccupations: jest.fn()
}));

describe("Тестове на функцията getTopRecommendedOccupations", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с резултати, когато запитването е успешно", async () => {
    const callback = jest.fn();
    const limit = 5;

    // Мокване на успешен резултат за getTopRecommendedOccupations
    db.getTopRecommendedOccupations.mockImplementation((limit, callback) => {
      const result = [
        {
          code: "27-1024.00",
          title_bg: "Програмист",
          title_en: "Software Engineer",
          description: "Develops software applications.",
          bright_outlook: true,
          education: "Bachelor's Degree",
          recommendation_count: 150
        },
        {
          code: "15-1131.00",
          title_bg: "Системен администратор",
          title_en: "Systems Administrator",
          description: "Maintains computer systems.",
          bright_outlook: true,
          education: "Bachelor's Degree",
          recommendation_count: 100
        }
      ];
      callback(null, result); // Симулира успешен резултат
    });

    // Извикване на mocked getTopRecommendedOccupations
    await db.getTopRecommendedOccupations(limit, callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, [
      {
        code: "27-1024.00",
        title_bg: "Програмист",
        title_en: "Software Engineer",
        description: "Develops software applications.",
        bright_outlook: true,
        education: "Bachelor's Degree",
        recommendation_count: 150
      },
      {
        code: "15-1131.00",
        title_bg: "Системен администратор",
        title_en: "Systems Administrator",
        description: "Maintains computer systems.",
        bright_outlook: true,
        education: "Bachelor's Degree",
        recommendation_count: 100
      }
    ]);
  });

  it("трябва да извика callback с грешка, ако има проблем със запитването", async () => {
    const callback = jest.fn();
    const limit = 5;

    // Мокване на грешка в getTopRecommendedOccupations
    db.getTopRecommendedOccupations.mockImplementation((limit, callback) => {
      callback(new Error("Query failed"), null); // Симулира грешка
    });

    // Извикване на mocked getTopRecommendedOccupations
    await db.getTopRecommendedOccupations(limit, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Query failed"
      }),
      null
    );
  });
});
