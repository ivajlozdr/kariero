// Auth token-а на потребителя
export const token =
  localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

// Сегашната дата
export const date = new Date().toISOString();
