export const token =
  localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
export const date = new Date().toISOString();
