import React from 'react';
import { Activity, Settings, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-brand-primary shadow-lg">
      <div className="flex items-center space-x-2">
        <Activity className="w-6 h-6 text-brand-accent" />
        <h1 className="text-xl font-display font-bold tracking-tight text-white">CarSound<span className="text-brand-accent">Detector</span></h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-300 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 bg-gray-700 rounded-full text-gray-300 hover:text-white transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};