export const saveItemInLS = <T>(key: string, item: T): void => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getItemFromLS = (key: string): unknown | null => {
  const retrivedItem = localStorage.getItem(key);
  if (retrivedItem !== null) return JSON.parse(retrivedItem);
  return null;
};
export {};
