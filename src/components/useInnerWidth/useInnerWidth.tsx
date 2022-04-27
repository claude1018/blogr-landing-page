import React, { useEffect, useState } from 'react';

const useInnerWidth = (): number => {
  const [width, setWidth] = useState<number>(0);
  const getDimension = () => {
    const innerWidth: number = window.innerWidth;
    setWidth(innerWidth);
  };
  useEffect(() => {
    getDimension();
    window.addEventListener('resize', getDimension);
    return () => window.removeEventListener('resize', getDimension);
  }, []);
  return width;
};

export default useInnerWidth;
