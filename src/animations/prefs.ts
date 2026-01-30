import { useState, useEffect } from 'react';

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
}

/**
 * React hook for reduced motion preference
 * Updates when user changes system settings
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Fallback for older browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return reducedMotion;
}
/**
 * Get animation duration based on motion preference
 */
export function getAnimDuration(duration: number): number {
  return prefersReducedMotion() ? 0.01 : duration;
}

/**
 * Get animation config object that respects motion preferences
 */
export function getAnimConfig<T extends Record<string, any>>(
  config: T,
  reducedConfig?: Partial<T>
): T {
  if (prefersReducedMotion() && reducedConfig) {
    return { ...config, ...reducedConfig };
  }
  return config;
}


