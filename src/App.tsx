import { useState } from 'react';
import { Header } from './components/Header';
import { DashboardView } from './views/DashboardView';
import { ProcessingView } from './views/ProcessingView';
import { ResultView } from './views/ResultView';
import { AppState, Origin } from './types';
import { analyzeAudio } from './utils/mockApi';

function App() {
  const [state, setState] = useState<AppState>({
    view: 'dashboard',
    selectedOrigin: 'engine',
    diagnosis: null,
    audioUrl: null
  });

  const handleRecordComplete = async (origin: Origin) => {
    setState(prev => ({ ...prev, view: 'processing', selectedOrigin: origin }));
    
    try {
      const result = await analyzeAudio(origin);
      setState(prev => ({
        ...prev,
        view: 'result',
        diagnosis: result
      }));
    } catch (error) {
      console.error("Analysis failed", error);
      // In a real app, handle error state here
      setState(prev => ({ ...prev, view: 'dashboard' }));
    }
  };

  const handleReset = () => {
    setState({
      view: 'dashboard',
      selectedOrigin: 'engine',
      diagnosis: null,
      audioUrl: null
    });
  };

  return (
    <div className="min-h-screen bg-brand-dark font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        {state.view === 'dashboard' && (
          <DashboardView onRecordComplete={handleRecordComplete} />
        )}

        {state.view === 'processing' && (
          <ProcessingView />
        )}

        {state.view === 'result' && state.diagnosis && (
          <ResultView result={state.diagnosis} onReset={handleReset} />
        )}
      </main>
      
      <footer className="py-6 text-center text-gray-600 text-sm">
        <p>© 2024 Car Sound Detector AI. v1.0.0</p>
      </footer>
    </div>
  );
}

export default App;