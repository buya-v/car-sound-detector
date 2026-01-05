import React from 'react';
import { DollarSign, Wrench } from 'lucide-react';

interface CostEstimatorProps {
  min: number;
  max: number;
  currency: string;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ min, max, currency }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 space-y-4">
      <div className="flex items-center space-x-2 text-brand-accent mb-2">
        <Wrench className="w-5 h-5" />
        <h4 className="font-bold uppercase tracking-wider text-sm">Repair Estimate</h4>
      </div>
      <div className="flex items-baseline space-x-1">
        <span className="text-3xl font-mono font-bold text-white">
          {currency === 'USD' ? '$' : ''}{min}
        </span>
        <span className="text-gray-400">-</span>
        <span className="text-3xl font-mono font-bold text-white">
          {currency === 'USD' ? '$' : ''}{max}
        </span>
      </div>
      <p className="text-xs text-gray-500">
        *Estimates based on local labor rates and OEM part prices via RepairPal API.
      </p>
      <button className="w-full mt-4 bg-brand-primary hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
        <DollarSign className="w-4 h-4" />
        <span>Find Mechanics Nearby</span>
      </button>
    </div>
  );
};