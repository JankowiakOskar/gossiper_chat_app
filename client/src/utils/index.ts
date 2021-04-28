export const sleeper = (ms: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), ms));

export const getItemByName = <T extends { name: string }>(items: T[], name: string): T | undefined =>
  items.find(item => item.name === name);
