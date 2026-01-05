import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { OriginSelector } from '../components/OriginSelector';
import { Waveform } from '../components/Waveform';
import { Origin } from '../types';
import clsx from 'clsx';

interface DashboardViewProps {
  onRecordComplete: (origin: Origin) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onRecordComplete }) => {
  const [origin, setOrigin] = useState<Origin>('engine');
  const [isRecording, setIsRecording] = useState(false);

  const handleToggleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      onRecordComplete(origin);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-8 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Select Source</h2>
        <p className="text-gray-400">Where is the sound coming from?</p>
      </div>
      
      <OriginSelector selected={origin} onSelect={setOrigin} />

      <div className="relative w-full max-w-md flex flex-col items-center space-y-8">
        <div className="h-32 w-full flex items-center justify-center">
           {isRecording ? (
             <Waveform isActive={true} />
           ) : (
             <div className="text-gray-600 font-mono text-sm">Ready to record...</div>
           )}
        </div>

        <button
          onClick={handleToggleRecord}
          className={clsx(
            "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl",
            isRecording 
              ? "bg-red-500 hover:bg-red-600 scale-110 shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              : "bg-brand-accent hover:bg-blue-500 hover:scale-105"
          )}
        >
          {isRecording ? (
             <MicOff className="w-10 h-10 text-white" />
          ) : (
             <Mic className="w-10 h-10 text-white" />
          )}
        </button>
        
        <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">
          {isRecording ? "Recording... Tap to Stop" : "Tap to Analyze"}
        </p>
      </div>
    </div>
  );
};