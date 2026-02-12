import { useState, useCallback } from 'react';

export type NavigationSection = 'home' | 'about' | 'projects' | 'timeline' | 'contact';

export interface NavigationState {
  currentSection: NavigationSection;
  isMenuOpen: boolean;
  history: NavigationSection[];
}

export function useNavigation(initialSection: NavigationSection = 'home') {
  const [state, setState] = useState<NavigationState>({
    currentSection: initialSection,
    isMenuOpen: false,
    history: [initialSection],
  });

  const navigateTo = useCallback((section: NavigationSection) => {
    setState(prev => ({
      ...prev,
      currentSection: section,
      history: [...prev.history, section],
      isMenuOpen: false,
    }));
  }, []);

  const goBack = useCallback(() => {
    setState(prev => {
      if (prev.history.length <= 1) return prev;
      
      const newHistory = [...prev.history];
      newHistory.pop();
      const previousSection = newHistory[newHistory.length - 1];
      
      return {
        ...prev,
        currentSection: previousSection,
        history: newHistory,
      };
    });
  }, []);

  const toggleMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMenuOpen: !prev.isMenuOpen,
    }));
  }, []);

  const closeMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMenuOpen: false,
    }));
  }, []);

  const openMenu = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMenuOpen: true,
    }));
  }, []);

  return {
    ...state,
    navigateTo,
    goBack,
    toggleMenu,
    closeMenu,
    openMenu,
  };
}
