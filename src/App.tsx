import React from 'react';
import { createRoot } from 'react-dom/client';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
