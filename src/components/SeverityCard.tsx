import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Severity } from '../types';
import clsx from 'clsx';

interface SeverityCardProps {
  severity: Severity;
  title: string;
  confidence: number;
}

export const SeverityCard: React.FC<SeverityCardProps> = ({ severity, title, confidence }) => {
  const config = {
    green: { color: 'bg-status-safe', icon: CheckCircle, text: 'Safe to Drive' },
    yellow: { color: 'bg-status-warn', icon: AlertTriangle, text: 'Schedule Service' },
    red: { color: 'bg-status-danger', icon: XCircle, text: 'Do Not Drive' },
  };

  const { color, icon: Icon, text } = config[severity];

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl mb-6 animate-in slide-in-from-bottom-4 duration-700">
      <div className={clsx("p-6 flex items-center justify-between", color)}>
        <div className="flex items-center space-x-3 text-white">
          <Icon className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider">{text}</h2>
            <p className="text-white/90 text-sm font-medium">Confidence: {confidence}%</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 border-x border-b border-gray-700 rounded-b-2xl">
        <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-1">Detected Issue</h3>
        <p className="text-3xl font-display font-bold text-white">{title}</p>
      </div>
    </div>
  );
};