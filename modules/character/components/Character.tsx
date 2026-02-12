'use client';

import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import { useCharacterInteraction } from '../hooks/useCharacterInteraction';
import { cn } from '@/lib/utils';

interface CharacterProps {
  animationData?: any;
  className?: string;
  width?: number;
  height?: number;
}

// Default simple animation data (a circle that pulses)
const defaultAnimationData = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Circle",
  ddd: 0,
  assets: [],
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Shape",
    sr: 1,
    ks: {
      o: { a: 0, k: 100 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [100, 100, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          { t: 0, s: [100, 100, 100] },
          { t: 30, s: [120, 120, 100] },
          { t: 60, s: [100, 100, 100] }
        ]
      }
    },
    shapes: [{
      ty: "el",
      p: { a: 0, k: [0, 0] },
      s: { a: 0, k: [50, 50] }
    }, {
      ty: "fl",
      c: { a: 0, k: [0.2, 0.6, 1, 1] }
    }]
  }]
};

export function Character({ 
  animationData = defaultAnimationData, 
  className,
  width = 200,
  height = 200 
}: CharacterProps) {
  const lottieRef = useRef(null);
  const { currentState, handleClick, handleHover } = useCharacterInteraction();

  return (
    <div 
      className={cn('relative cursor-pointer select-none', className)}
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        lottieRef={lottieRef}
        style={{ width, height }}
      />
      <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-[var(--color-muted-foreground)]">
        State: {currentState}
      </div>
    </div>
  );
}
