import React, { useEffect, useState } from 'react';

export const Waveform: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [bars, setBars] = useState<number[]>(new Array(30).fill(10));

  useEffect(() => {
    if (!isActive) {
      setBars(new Array(30).fill(10));
      return;
    }

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 80 + 10));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="flex items-center justify-center space-x-1 h-32 w-full max-w-md mx-auto overflow-hidden">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-2 bg-brand-accent rounded-full transition-all duration-100 ease-in-out opacity-80"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
};