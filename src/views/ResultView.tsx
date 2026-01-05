import React from 'react';
import { DiagnosisResult } from '../types';
import { SeverityCard } from '../components/SeverityCard';
import { CostEstimator } from '../components/CostEstimator';
import { ArrowLeft, Share2, Save } from 'lucide-react';

interface ResultViewProps {
  result: DiagnosisResult;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  return (
    <div className="max-w-2xl mx-auto pb-12 animate-in slide-in-from-right duration-500">
      <button 
        onClick={onReset}
        className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        New Recording
      </button>

      <SeverityCard 
        severity={result.severity}
        title={result.primaryIssue}
        confidence={result.confidence}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
           <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
             <h4 className="text-gray-400 text-xs uppercase tracking-widest mb-4">Analysis Details</h4>
             <p className="text-gray-300 leading-relaxed mb-4">
               {result.description}
             </p>
             <div className="space-y-2">
               <p className="text-sm font-semibold text-gray-500">Possible Alternatives:</p>
               <ul className="list-disc list-inside text-sm text-gray-400">
                 {result.alternatives.map((alt, i) => (
                   <li key={i}>{alt}</li>
                 ))}
               </ul>
             </div>
           </div>
        </div>

        <div className="space-y-6">
          <CostEstimator 
            min={result.estimate.min}
            max={result.estimate.max}
            currency={result.estimate.currency}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors">
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};