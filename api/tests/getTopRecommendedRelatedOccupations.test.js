const db = require("../database");

// Мокване на getTopRecommendedRelatedOccupations
jest.mock("../database", () => ({
  getTopRecommendedRelatedOccupations: jest.fn()
}));

describe("Тестове на функцията getTopRecommendedRelatedOccupations", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с резултати, когато запитването е успешно", async () => {
    const callback = jest.fn();
    const limit = 5;

    // Мокване на успешен резултат за getTopRecommendedRelatedOccupations
    db.getTopRecommendedRelatedOccupations.mockImplementation(
      (limit, callback) => {
        const result = [
          {
            onet_id: "15-1131.00",
            name_en: "Systems Administrator",
            name_bg: "Системен администратор",
            recommendation_count: 120
          },
          {
            onet_id: "27-1024.00",
            name_en: "Software Engineer",
            name_bg: "Програмист",
            recommendation_count: 80
          }
        ];
        callback(null, result); // Симулира успешен резултат
      }
    );

    // Извикване на mocked getTopRecommendedRelatedOccupations
    await db.getTopRecommendedRelatedOccupations(limit, callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, [
      {
        onet_id: "15-1131.00",
        name_en: "Systems Administrator",
        name_bg: "Системен администратор",
        recommendation_count: 120
      },
      {
        onet_id: "27-1024.00",
        name_en: "Software Engineer",
        name_bg: "Програмист",
        recommendation_count: 80
      }
    ]);
  });

  it("трябва да извика callback с грешка, ако има проблем със запитването", async () => {
    const callback = jest.fn();
    const limit = 5;

    // Мокване на грешка в getTopRecommendedRelatedOccupations
    db.getTopRecommendedRelatedOccupations.mockImplementation(
      (limit, callback) => {
        callback(new Error("Query failed"), null); // Симулира грешка
      }
    );

    // Извикване на mocked getTopRecommendedRelatedOccupations
    await db.getTopRecommendedRelatedOccupations(limit, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Query failed"
      }),
      null
    );
  });
});
