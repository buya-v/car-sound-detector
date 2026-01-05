import React from 'react';
import { ProcessingStepper } from '../components/ProcessingStepper';

export const ProcessingView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in zoom-in duration-500">
      <h2 className="text-2xl font-bold text-white mb-8">Analyzing Acoustic Signature</h2>
      <ProcessingStepper />
      <div className="mt-12 p-4 bg-gray-800/50 rounded-lg max-w-sm text-center border border-gray-700">
        <p className="text-sm text-gray-400 italic">
          "Tip: Ensure windows are closed to improve isolation accuracy."
        </p>
      </div>
    </div>
  );
};