export type Origin = 'engine' | 'wheels' | 'undercarriage';

export type Severity = 'green' | 'yellow' | 'red';

export interface DiagnosisResult {
  id: string;
  timestamp: string;
  origin: Origin;
  primaryIssue: string;
  confidence: number;
  severity: Severity;
  alternatives: string[];
  estimate: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
}

export interface AppState {
  view: 'dashboard' | 'recording' | 'processing' | 'result';
  selectedOrigin: Origin | null;
  diagnosis: DiagnosisResult | null;
  audioUrl: string | null;
}