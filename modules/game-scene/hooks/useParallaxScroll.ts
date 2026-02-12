'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export interface ParallaxLayer {
  id: string;
  speed: number; // 0-1, where 1 is fastest
  zIndex: number;
}

export function useParallaxScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  const updateScroll = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    setScrollProgress(Math.min(Math.max(progress, 0), 1));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll(); // Initial update

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateScroll]);

  const getLayerTransform = useCallback((speed: number) => {
    const translateX = scrollProgress * 100 * speed;
    return `translateX(-${translateX}%)`;
  }, [scrollProgress]);

  return {
    scrollProgress,
    isScrolling,
    getLayerTransform,
  };
}
