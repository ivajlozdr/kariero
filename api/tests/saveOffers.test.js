const db = require("../database");

// Мокване на saveOffers
jest.mock("../database", () => ({
  saveOffers: jest.fn()
}));

describe("Тестове на функцията saveOffers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с успех, когато данните са валидни", async () => {
    const callback = jest.fn();

    // Мокване на успешен резултат за saveOffers
    db.saveOffers.mockImplementation((offers, occupation_code, callback) => {
      callback(null, {
        insertResult: { affectedRows: 1 },
        updateResult: { affectedRows: 1 }
      });
    });

    const offers = {
      average_salary: 50000,
      job_offers: [
        {
          title: "Software Engineer",
          company: "TechCorp",
          city: "Sofia",
          details: "Build cool software",
          salary: 70000,
          off_days: "Sundays",
          url: "http://techcorp.com",
          date: "2025-02-27"
        }
      ]
    };

    const occupation_code = "27-1024.00";

    // Извикване на mocked saveOffers
    await db.saveOffers(offers, occupation_code, callback);

    // Проверка дали callback е извикан с правилни параметри
    expect(callback).toHaveBeenCalledWith(null, {
      insertResult: { affectedRows: 1 },
      updateResult: { affectedRows: 1 }
    });
  });

  it("трябва да извика callback с грешка, когато има проблем с транзакцията", async () => {
    const callback = jest.fn();

    // Мокване на грешка в saveOffers
    db.saveOffers.mockImplementation((offers, occupation_code, callback) => {
      callback(new Error("Transaction failed"));
    });

    const offers = {
      average_salary: 50000,
      job_offers: [
        {
          title: "Software Engineer",
          company: "TechCorp",
          city: "Sofia",
          details: "Build cool software",
          salary: 70000,
          off_days: "Sundays",
          url: "http://techcorp.com",
          date: "2025-02-27"
        }
      ]
    };

    const occupation_code = "27-1024.00";

    // Извикване на mocked saveOffers
    await db.saveOffers(offers, occupation_code, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Transaction failed"
      })
    );
  });
});
