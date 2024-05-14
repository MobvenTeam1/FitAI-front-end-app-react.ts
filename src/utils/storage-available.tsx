export function localStorageAvailable(): boolean {
  try {
    const key = "__some_random_key_you_are_not_going_to_use__";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function localStorageGetItem(
  key: string,
  defaultValue: string = ""
): string | null {
  const storageAvailable = localStorageAvailable();

  let value: string | null = null;

  if (storageAvailable) {
    value = localStorage.getItem(key) || defaultValue;
  }

  return value;
}
