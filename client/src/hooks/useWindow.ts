import { useState, useEffect } from 'react';

const useWindow = () => {
  const getWindowDismensions = () => ({ width: window.innerWidth, height: window.innerHeight });
  const [windowSize, setWindowSize] = useState(getWindowDismensions());

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getWindowDismensions();
      setWindowSize({ width, height });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowWidth: windowSize.width,
    windowHeight: windowSize.height,
  };
};

export default useWindow;
