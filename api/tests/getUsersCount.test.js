const db = require("../database");

// Мокираме целия обект с функции на базата данни
jest.mock("../database", () => ({
  query: jest.fn(), // Мокваме query функцията за заявки към базата данни
  getUsersCount: jest.fn() // Мокваме getUsersCount функцията
}));

// Тест за функцията getUsersCount
describe("getUsersCount", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Изчистваме мок след всеки тест
  });

  it("Трябва да запази препоръка за филм/сериал в базата данни", () => {
    // Мокираме db.query за да симулираме резултат
    db.query.mockImplementationOnce((query, callback) => {
      callback(null, [{ user_count: 5 }]); // Симулираме резултат
    });

    // Действие: Извикваме функцията с тестови данни
    db.getUsersCount((err, result) => {
      // Проверка: Уверяваме се, че callback е извикан правилно
      expect(err).toBeNull(); // Няма грешка
      expect(mockCallback).toHaveBeenCalledWith(null, [{ user_count: 5 }]); // user_count трябва да е 5
      done(); // Извикваме done, за да покажем, че тестът е завършен
    });
  });
});
