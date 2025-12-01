import { useEffect, useRef, useState } from 'react';

export function useSmartHeader(heroEl: HTMLElement | null, threshold = 0.4) {
  const [heroInView, setHeroInView] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrollingUp(y < lastY.current);
          setAtTop(y <= 0);
          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!heroEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.intersectionRatio >= threshold),
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );
    obs.observe(heroEl);
    return () => obs.disconnect();
  }, [heroEl, threshold]);

  return { heroInView, isScrollingUp, atTop };
}

