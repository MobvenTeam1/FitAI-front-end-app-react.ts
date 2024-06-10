export const getLocalStorage = (value: string) => {
  return localStorage.getItem(value) || "";
};
