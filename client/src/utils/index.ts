import { ScrollMode } from 'utils/types/enums';

export const sleeper = (ms: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), ms));

export const getItemById = <T extends { id: string }>(items: T[], id: string): T | undefined => items.find(item => item.id === id);

export const switchDocumentScroll = (mode: ScrollMode): void => {
  const isWindow = window;
  if (isWindow) {
    document.body.style.overflow = `${mode}`;
  }
};
