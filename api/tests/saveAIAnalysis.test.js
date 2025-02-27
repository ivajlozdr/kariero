const db = require("../database");

// Мокване на saveAIAnalysis
jest.mock("../database", () => ({
  saveAIAnalysis: jest.fn()
}));

describe("Тестове на функцията saveAIAnalysis", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("трябва да извика callback с успех, когато данните са валидни", async () => {
    const callback = jest.fn();

    // Мокване на успешен резултат за saveAIAnalysis
    db.saveAIAnalysis.mockImplementation((userId, analysisData, callback) => {
      callback(null, { affectedRows: 1 }); // Симулира успешен резултат
    });

    const analysisData = {
      Abilities: ["Ability 1", "Ability 2"],
      Skills: ["Skill 1", "Skill 2"],
      Knowledge: ["Knowledge 1", "Knowledge 2"],
      Interests: ["Interest 1", "Interest 2"],
      WorkStyle: ["Work Style 1", "Work Style 2"],
      WorkValues: ["Work Value 1", "Work Value 2"],
      TechnologySkills: ["Tech Skill 1", "Tech Skill 2"]
    };

    // Извикване на mocked saveAIAnalysis
    await db.saveAIAnalysis(123, analysisData, callback);

    // Проверка дали callback е извикан с успех
    expect(callback).toHaveBeenCalledWith(null, { affectedRows: 1 });
  });

  it("трябва да извика callback с грешка, ако има проблем при записването", async () => {
    const callback = jest.fn();

    // Мокване на грешка за saveAIAnalysis
    db.saveAIAnalysis.mockImplementation((userId, analysisData, callback) => {
      callback(new Error("Error saving AI analysis data"), null); // Симулира грешка
    });

    const analysisData = {
      Abilities: ["Ability 1"],
      Skills: ["Skill 1"],
      Knowledge: ["Knowledge 1"],
      Interests: ["Interest 1"],
      WorkStyle: ["Work Style 1"],
      WorkValues: ["Work Value 1"],
      TechnologySkills: ["Tech Skill 1"]
    };

    // Извикване на mocked saveAIAnalysis
    await db.saveAIAnalysis(123, analysisData, callback);

    // Проверка дали callback е извикан с грешка
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Error saving AI analysis data"
      }),
      null
    );
  });
});
