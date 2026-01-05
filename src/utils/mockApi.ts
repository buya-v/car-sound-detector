import { DiagnosisResult, Origin } from '../types';

const MOCK_ISSUES: Record<Origin, Array<Partial<DiagnosisResult>>> = {
  engine: [
    {
      primaryIssue: "Rod Knock",
      severity: "red",
      description: "Severe internal engine failure detected. Immediate attention required.",
      estimate: { min: 2500, max: 4500, currency: "USD" },
      alternatives: ["Piston Slap", "Valve Lifter Noise"]
    },
    {
      primaryIssue: "Serpentine Belt Slippage",
      severity: "yellow",
      description: "Worn or loose accessory belt detected.",
      estimate: { min: 150, max: 300, currency: "USD" },
      alternatives: ["Idler Pulley Failure", "Tensioner Failure"]
    }
  ],
  wheels: [
    {
      primaryIssue: "Worn Brake Pads",
      severity: "yellow",
      description: "Metal-on-metal grinding signature identified.",
      estimate: { min: 200, max: 400, currency: "USD" },
      alternatives: ["Rotor Warping", "Dust Shield Contact"]
    }
  ],
  undercarriage: [
    {
      primaryIssue: "Exhaust Leak",
      severity: "yellow",
      description: "Audible exhaust gas escaping before muffler.",
      estimate: { min: 100, max: 500, currency: "USD" },
      alternatives: ["Catalytic Converter Rattle", "Heat Shield Rattle"]
    }
  ]
};

export const analyzeAudio = async (origin: Origin): Promise<DiagnosisResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const options = MOCK_ISSUES[origin];
      // Simple random selection for demo purposes
      const selection = options[Math.floor(Math.random() * options.length)];
      
      resolve({
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        origin,
        confidence: Math.floor(Math.random() * (99 - 75) + 75),
        primaryIssue: selection.primaryIssue!,
        severity: selection.severity as 'green' | 'yellow' | 'red',
        description: selection.description!,
        estimate: selection.estimate!,
        alternatives: selection.alternatives!,
      });
    }, 2000); // Simulate network/processing latency
  });
};