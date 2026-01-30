import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../animations/prefs';

// Lazy load animejs to avoid build issues
const loadAnime = async () => {
  try {
    const { animate } = await import('animejs');
    return animate;
  } catch {
    return null;
  }
};

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  trigger?: boolean;
}

export const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  trigger = true,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger || hasAnimated.current || prefersReducedMotion()) {
      setCount(end);
      return;
    }

    hasAnimated.current = true;

    // Load and use animejs
    loadAnime().then((anime) => {
      if (!anime) {
        setCount(end);
        return;
      }

      try {
        const obj = { value: 0 };
        anime(obj, {
          value: end,
          duration,
          ease: 'outExpo',
          onUpdate: () => {
            setCount(Math.round(obj.value));
          },
        });
      } catch (error) {
        console.warn('AnimatedCounter animation failed:', error);
        setCount(end);
      }
    }).catch(() => {
      setCount(end);
    });
  }, [end, duration, trigger]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const AnimatedNumber = ({
  value,
  decimals = 0,
  duration = 1500,
  className = '',
}: AnimatedNumberProps) => {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCurrent(value);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    try {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;

              loadAnime().then((anime) => {
                if (!anime) {
                  setCurrent(value);
                  return;
                }

                try {
                  const obj = { n: 0 };
                  anime(obj, {
                    n: value,
                    duration,
                    ease: 'outQuad',
                    onUpdate: () => {
                      setCurrent(obj.n);
                    },
                  });
                } catch (error) {
                  console.warn('AnimatedNumber animation failed:', error);
                  setCurrent(value);
                }
              }).catch(() => {
                setCurrent(value);
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      observerRef.current.observe(element);
    } catch (error) {
      console.warn('IntersectionObserver setup failed:', error);
      setCurrent(value);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {current.toFixed(decimals)}
    </span>
  );
};

