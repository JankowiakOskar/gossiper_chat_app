import { useEffect } from 'react';

const useOutsideClick = (ref: React.RefObject<HTMLElement>, cb: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      if (e instanceof MouseEvent) {
        const leftMouseClick = e.buttons === 1;
        if (leftMouseClick) cb();
      } else {
        cb();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, cb]);
};

export default useOutsideClick;
