import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerGSAP } from './animations/gsap';

// Register GSAP and ScrollTrigger
try {
  registerGSAP();
} catch (error) {
  console.warn('GSAP registration failed, continuing without advanced animations:', error);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
