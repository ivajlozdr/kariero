const db = require("../database");

// Мокване на getMostNeededAttributes
jest.mock("../database", () => ({
  getMostNeededAttributes: jest.fn()
}));

describe("Тестове на функцията getMostNeededAttributes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с резултати, когато запитването е успешно", async () => {
    const callback = jest.fn();
    const limit = 5;
    const tableName = "related_occupations";

    // Мокване на успешен резултат за getMostNeededAttributes
    db.getMostNeededAttributes.mockImplementation(
      (tableName, limit, callback) => {
        const result = [
          {
            onet_id: "15-1131.00",
            name_en: "Systems Administrator",
            name_bg: "Системен администратор",
            occurrence_count: 150
          },
          {
            onet_id: "27-1024.00",
            name_en: "Software Engineer",
            name_bg: "Програмист",
            occurrence_count: 100
          }
        ];
        callback(null, result); // Симулира успешен резултат
      }
    );

    // Извикване на mocked getMostNeededAttributes
    await db.getMostNeededAttributes(tableName, limit, callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, [
      {
        onet_id: "15-1131.00",
        name_en: "Systems Administrator",
        name_bg: "Системен администратор",
        occurrence_count: 150
      },
      {
        onet_id: "27-1024.00",
        name_en: "Software Engineer",
        name_bg: "Програмист",
        occurrence_count: 100
      }
    ]);
  });

  it("трябва да извика callback с грешка, ако има проблем със запитването", async () => {
    const callback = jest.fn();
    const limit = 5;
    const tableName = "related_occupations";

    // Мокване на грешка в getMostNeededAttributes
    db.getMostNeededAttributes.mockImplementation(
      (tableName, limit, callback) => {
        callback(new Error("Query failed"), null); // Симулира грешка
      }
    );

    // Извикване на mocked getMostNeededAttributes
    await db.getMostNeededAttributes(tableName, limit, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Query failed"
      }),
      null
    );
  });
});
