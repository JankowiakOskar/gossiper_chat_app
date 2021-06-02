import { useState, useRef } from 'react';

const useSelectedCard = () => {
  const [selectedCard, setSelectedCard] = useState('');

  const selectedCardRef = useRef<HTMLDivElement>(null);

  const removeSelectedCard = () => setSelectedCard('');

  const selectCard = (name: string) => setSelectedCard(name);

  return { selectedCard, selectedCardRef, selectCard, removeSelectedCard };
};

export default useSelectedCard;
