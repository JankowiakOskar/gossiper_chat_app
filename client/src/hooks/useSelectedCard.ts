import { useState, useRef } from 'react';
import { getItemById } from 'utils/index';

const useSelectedCard = <T extends { id: string }>(cardItems: T[]) => {
  const [selectedCardId, setSelectedCardId] = useState('');

  const selectedCardRef = useRef<HTMLDivElement>(null);

  const removeSelectedCard = () => setSelectedCardId('');

  const selectedCard = selectedCardId ? getItemById(cardItems, selectedCardId) : undefined;

  return { selectedCard, setSelectedCardId, selectedCardRef, removeSelectedCard };
};

export default useSelectedCard;
