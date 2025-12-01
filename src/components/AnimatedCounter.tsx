import { useState } from 'react';

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
  return (
    <span className={className}>
      {prefix}
      {end}
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
  return (
    <span className={className}>
      {value.toFixed(decimals)}
    </span>
  );
};

