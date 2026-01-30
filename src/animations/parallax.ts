import { useEffect, useRef } from 'react';
import { gsap } from './gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './prefs';

export interface ParallaxOptions {
  speed?: number; // 0.5 = half speed, 2 = double speed
  direction?: 'vertical' | 'horizontal';
  scrub?: boolean | number;
  start?: string;
  end?: string;
  disabled?: boolean;
}

/**
 * Hook to create parallax effect on an element
 * Returns a ref to attach to the element
 */
export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
) {
  const elementRef = useRef<T>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const {
    speed = 0.5,
    direction = 'vertical',
    scrub = true,
    start = 'top bottom',
    end = 'bottom top',
    disabled = false,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled || prefersReducedMotion()) return;

    const isVertical = direction === 'vertical';
    const movement = 100 * (1 - speed);

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      onUpdate: (self) => {
        const progress = self.progress;
        const offset = movement * (progress - 0.5);
        
        gsap.set(element, {
          [isVertical ? 'y' : 'x']: offset,
          force3D: true,
        });
      },
    });

    return () => {
      scrollTriggerRef.current?.kill();
    };
  }, [speed, direction, scrub, start, end, disabled]);

  return elementRef;
}

/**
 * Create multiple parallax layers with different speeds
 */
export function useParallaxLayers(speeds: number[]) {
  return speeds.map(speed => useParallax({ speed }));
}

/**
 * Simple scroll-based transform hook
 */
export function useScrollTransform<T extends HTMLElement>(
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
  } = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion()) return;

    const tween = gsap.fromTo(element, from, {
      ...to,
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top bottom',
        end: options.end || 'bottom top',
        scrub: options.scrub !== undefined ? options.scrub : true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [from, to, options]);

  return elementRef;
}

