import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface TimelineAnimationOptions {
  duration?: number;
  stagger?: number;
  ease?: string;
}

export function useTimelineAnimation(
  options: TimelineAnimationOptions = {}
) {
  const { duration = 0.6, stagger = 0.1, ease = 'power2.out' } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    timelineRef.current = gsap.timeline({ paused: true });
    
    const items = containerRef.current.querySelectorAll('.timeline-item');
    
    timelineRef.current.from(items, {
      opacity: 0,
      y: 50,
      duration,
      stagger,
      ease,
    });

    return () => {
      timelineRef.current?.kill();
    };
  }, [duration, stagger, ease]);

  const play = () => {
    timelineRef.current?.play();
  };

  const pause = () => {
    timelineRef.current?.pause();
  };

  const reverse = () => {
    timelineRef.current?.reverse();
  };

  const restart = () => {
    timelineRef.current?.restart();
  };

  return {
    containerRef,
    play,
    pause,
    reverse,
    restart,
  };
}
