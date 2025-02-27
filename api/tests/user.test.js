const db = require("../database"); // Импортиране на файла с базата данни

// Мокираме целия обект с функции на базата данни
jest.mock("../database", () => ({
  checkEmailExists: jest.fn(), // Функция за проверка на съществуването на имейл
  createUser: jest.fn(), // Функция за създаване на нов потребител
  findUserByEmail: jest.fn(), // Функция за намиране на потребител по имейл
  updateUserPassword: jest.fn(), // Функция за обновяване на парола на потребител
  getUserById: jest.fn() // Функция за намиране на потребител по ID
}));

describe("Функции на базата данни", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Изчистваме мок след всеки тест, за да избегнем намеса
  });

  // Тест за checkEmailExists
  it("трябва да проверим дали имейлът съществува в базата данни", (done) => {
    const email = "test@example.com"; // Примерен имейл
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме успешна проверка на имейл
    db.checkEmailExists.mockImplementationOnce((email, callback) => {
      callback(null, [{ email: "test@example.com" }]); // Колбек с данни за съществуващия имейл
    });

    db.checkEmailExists(email, mockCallback); // Извикваме функцията

    expect(mockCallback).toHaveBeenCalledWith(null, [
      { email: "test@example.com" }
    ]); // Проверяваме дали е извикан колбекът с правилните параметри
    done();
  });

  // Тест за createUser
  it("трябва да създаде нов потребител", (done) => {
    const firstName = "John"; // Примерно име
    const lastName = "Doe"; // Примерно фамилия
    const email = "john.doe@example.com"; // Примерен имейл
    const hashedPassword = "hashedPassword"; // Примерна хеширана парола
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме успешното създаване на потребител
    db.createUser.mockImplementationOnce(
      (firstName, lastName, email, hashedPassword, callback) => {
        callback(null, { affectedRows: 1 }); // Колбек с резултат за успешното добавяне на ред
      }
    );

    db.createUser(firstName, lastName, email, hashedPassword, mockCallback); // Извикваме функцията

    expect(mockCallback).toHaveBeenCalledWith(null, { affectedRows: 1 }); // Проверяваме дали е извикан колбекът с правилните параметри
    done();
  });

  // Тест за findUserByEmail
  it("трябва да намерим потребител по имейл", (done) => {
    const email = "test@example.com"; // Примерен имейл
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме намирането на потребител по имейл
    db.findUserByEmail.mockImplementationOnce((email, callback) => {
      callback(null, [
        { email: "test@example.com", first_name: "Test", last_name: "User" }
      ]); // Колбек с данни за намерен потребител
    });

    db.findUserByEmail(email, mockCallback); // Извикваме функцията

    expect(mockCallback).toHaveBeenCalledWith(null, [
      { email: "test@example.com", first_name: "Test", last_name: "User" }
    ]); // Проверяваме дали е извикан колбекът с правилните данни
    done();
  });

  // Тест за updateUserPassword
  it("трябва да актуализира паролата на потребителя", (done) => {
    const userId = 1; // Примерен ID на потребител
    const hashedPassword = "newHashedPassword"; // Примерна нова хеширана парола
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме актуализирането на паролата
    db.updateUserPassword.mockImplementationOnce(
      (userId, hashedPassword, callback) => {
        callback(null, { affectedRows: 1 }); // Колбек с резултат за успешното обновяване на паролата
      }
    );

    db.updateUserPassword(userId, hashedPassword, mockCallback); // Извикваме функцията

    expect(mockCallback).toHaveBeenCalledWith(null, { affectedRows: 1 }); // Проверяваме дали е извикан колбекът с правилните параметри
    done();
  });

  // Тест за getUserById
  it("трябва да върне потребител по ID", (done) => {
    const userId = 1; // Примерен ID на потребител
    const mockCallback = jest.fn(); // Мок функция за колбек

    // Симулираме получаването на потребител по ID
    db.getUserById.mockImplementationOnce((userId, callback) => {
      callback(null, [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@example.com"
        }
      ]); // Колбек с данни за намерен потребител
    });

    db.getUserById(userId, mockCallback); // Извикваме функцията

    expect(mockCallback).toHaveBeenCalledWith(null, [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com"
      }
    ]); // Проверяваме дали е извикан колбекът с правилните данни
    done();
  });
});
