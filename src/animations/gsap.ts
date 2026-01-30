import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Register GSAP plugins globally
 * Call this once in main.tsx before rendering
 */
export function registerGSAP(): void {
  gsap.registerPlugin(ScrollTrigger);
  
  // Configure defaults for better performance
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });
  
  // Set default ScrollTrigger configs
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

/**
 * Cleanup all GSAP animations and ScrollTriggers
 * Useful for route changes or component unmounts
 */
export function cleanupGSAP(): void {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.globalTimeline.clear();
}

export { gsap, ScrollTrigger };
