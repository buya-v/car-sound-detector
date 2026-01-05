import React from 'react';
import { Disc, CarFront, Cog } from 'lucide-react';
import { Origin } from '../types';
import clsx from 'clsx';

interface OriginSelectorProps {
  selected: Origin | null;
  onSelect: (origin: Origin) => void;
}

export const OriginSelector: React.FC<OriginSelectorProps> = ({ selected, onSelect }) => {
  const options: { id: Origin; label: string; Icon: React.ElementType }[] = [
    { id: 'engine', label: 'Engine Bay', Icon: Cog },
    { id: 'wheels', label: 'Wheels/Brakes', Icon: Disc },
    { id: 'undercarriage', label: 'Undercarriage', Icon: CarFront },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
      {options.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={clsx(
            "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-300",
            selected === id
              ? "border-brand-accent bg-brand-accent/10 text-brand-accent shadow-[0_0_20px_rgba(52,152,219,0.3)]"
              : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-500 hover:bg-gray-750"
          )}
          aria-pressed={selected === id}
        >
          <Icon className="w-10 h-10 mb-3" />
          <span className="font-medium text-lg">{label}</span>
        </button>
      ))}
    </div>
  );
};