'use client';

import { useMemo } from 'react';

export interface ScenePhase {
  name: string;
  start: number;
  end: number;
  colors: {
    sky: string;
    horizon: string;
    foreground: string;
  };
  moonOpacity: number;
  starOpacity: number;
}

export function useSceneTransition(scrollProgress: number) {
  const phases: ScenePhase[] = useMemo(() => [
    {
      name: 'night',
      start: 0,
      end: 0.3,
      colors: {
        sky: '#0a1f1a',
        horizon: '#1a3a2e',
        foreground: '#0d2818',
      },
      moonOpacity: 1,
      starOpacity: 1,
    },
    {
      name: 'dawn',
      start: 0.3,
      end: 0.6,
      colors: {
        sky: '#2a4a3e',
        horizon: '#3a5a4e',
        foreground: '#1d3828',
      },
      moonOpacity: 0.5,
      starOpacity: 0.3,
    },
    {
      name: 'day',
      start: 0.6,
      end: 1,
      colors: {
        sky: '#4a6a5e',
        horizon: '#5a7a6e',
        foreground: '#2d4838',
      },
      moonOpacity: 0,
      starOpacity: 0,
    },
  ], []);

  const currentPhase = useMemo(() => {
    return phases.find(phase => 
      scrollProgress >= phase.start && scrollProgress <= phase.end
    ) || phases[0];
  }, [phases, scrollProgress]);

  const nextPhase = useMemo(() => {
    const currentIndex = phases.findIndex(p => p.name === currentPhase.name);
    return phases[currentIndex + 1] || currentPhase;
  }, [phases, currentPhase]);

  const interpolateColor = (color1: string, color2: string, factor: number): string => {
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);
    
    const r1 = (c1 >> 16) & 0xff;
    const g1 = (c1 >> 8) & 0xff;
    const b1 = c1 & 0xff;
    
    const r2 = (c2 >> 16) & 0xff;
    const g2 = (c2 >> 8) & 0xff;
    const b2 = c2 & 0xff;
    
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
  };

  const transitionProgress = useMemo(() => {
    if (scrollProgress < currentPhase.start) return 0;
    if (scrollProgress > currentPhase.end) return 1;
    
    const phaseRange = currentPhase.end - currentPhase.start;
    if (phaseRange === 0) return 0;
    
    return (scrollProgress - currentPhase.start) / phaseRange;
  }, [scrollProgress, currentPhase]);

  const currentColors = useMemo(() => {
    if (transitionProgress >= 1 || currentPhase.name === nextPhase.name) {
      return currentPhase.colors;
    }

    return {
      sky: interpolateColor(currentPhase.colors.sky, nextPhase.colors.sky, transitionProgress),
      horizon: interpolateColor(currentPhase.colors.horizon, nextPhase.colors.horizon, transitionProgress),
      foreground: interpolateColor(currentPhase.colors.foreground, nextPhase.colors.foreground, transitionProgress),
    };
  }, [currentPhase, nextPhase, transitionProgress]);

  const moonOpacity = useMemo(() => {
    if (transitionProgress >= 1 || currentPhase.name === nextPhase.name) {
      return currentPhase.moonOpacity;
    }
    return currentPhase.moonOpacity + (nextPhase.moonOpacity - currentPhase.moonOpacity) * transitionProgress;
  }, [currentPhase, nextPhase, transitionProgress]);

  const starOpacity = useMemo(() => {
    if (transitionProgress >= 1 || currentPhase.name === nextPhase.name) {
      return currentPhase.starOpacity;
    }
    return currentPhase.starOpacity + (nextPhase.starOpacity - currentPhase.starOpacity) * transitionProgress;
  }, [currentPhase, nextPhase, transitionProgress]);

  return {
    currentPhase: currentPhase.name,
    colors: currentColors,
    moonOpacity,
    starOpacity,
    transitionProgress,
  };
}
