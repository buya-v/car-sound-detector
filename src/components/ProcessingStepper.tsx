import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import clsx from 'clsx';

export const ProcessingStepper: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    "Applying Noise Isolation (Wiener Filter)...",
    "Extracting Spectral Features (MFCC)...",
    "Matching Audio Signature against Database..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s < 2 ? s + 1 : s));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 w-full max-w-md">
      {steps.map((label, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="relative flex items-center justify-center">
            {step > index ? (
              <CheckCircle2 className="w-6 h-6 text-status-safe" />
            ) : step === index ? (
              <Loader2 className="w-6 h-6 text-brand-accent animate-spin" />
            ) : (
              <div className="w-6 h-6 rounded-full border-2 border-gray-700" />
            )}
            {index !== steps.length - 1 && (
              <div className={clsx(
                "absolute top-6 left-3 w-0.5 h-6",
                step > index ? "bg-status-safe" : "bg-gray-700"
              )} />
            )}
          </div>
          <span className={clsx(
            "text-lg transition-colors duration-300",
            step === index ? "text-white font-medium" : step > index ? "text-gray-400" : "text-gray-600"
          )}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};