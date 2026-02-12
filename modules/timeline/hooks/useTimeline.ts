import { useState, useEffect, useCallback } from 'react';

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'education' | 'work' | 'project';
}

export interface TimelineState {
  items: TimelineItem[];
  activeItem: string | null;
  isAnimating: boolean;
}

export function useTimeline(initialItems: TimelineItem[] = []) {
  const [state, setState] = useState<TimelineState>({
    items: initialItems,
    activeItem: null,
    isAnimating: false,
  });

  const setActiveItem = useCallback((id: string | null) => {
    setState(prev => ({
      ...prev,
      activeItem: id,
    }));
  }, []);

  const addItem = useCallback((item: TimelineItem) => {
    setState(prev => ({
      ...prev,
      items: [...prev.items, item].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    }));
  }, []);

  const removeItem = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id),
      activeItem: prev.activeItem === id ? null : prev.activeItem,
    }));
  }, []);

  const startAnimation = useCallback(() => {
    setState(prev => ({ ...prev, isAnimating: true }));
  }, []);

  const stopAnimation = useCallback(() => {
    setState(prev => ({ ...prev, isAnimating: false }));
  }, []);

  return {
    ...state,
    setActiveItem,
    addItem,
    removeItem,
    startAnimation,
    stopAnimation,
  };
}
