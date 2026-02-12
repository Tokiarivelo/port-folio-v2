import { useState, useCallback } from 'react';

export type CharacterState = 'idle' | 'walking' | 'running' | 'jumping' | 'waving';

export interface CharacterInteraction {
  currentState: CharacterState;
  isInteracting: boolean;
  interactionType: string | null;
}

export function useCharacterInteraction() {
  const [interaction, setInteraction] = useState<CharacterInteraction>({
    currentState: 'idle',
    isInteracting: false,
    interactionType: null,
  });

  const setState = useCallback((state: CharacterState) => {
    setInteraction(prev => ({
      ...prev,
      currentState: state,
    }));
  }, []);

  const startInteraction = useCallback((type: string) => {
    setInteraction(prev => ({
      ...prev,
      isInteracting: true,
      interactionType: type,
    }));
  }, []);

  const stopInteraction = useCallback(() => {
    setInteraction(prev => ({
      ...prev,
      isInteracting: false,
      interactionType: null,
    }));
  }, []);

  const handleClick = useCallback(() => {
    setState('waving');
    startInteraction('click');
    setTimeout(() => {
      setState('idle');
      stopInteraction();
    }, 2000);
  }, [setState, startInteraction, stopInteraction]);

  const handleHover = useCallback((isHovering: boolean) => {
    if (isHovering) {
      startInteraction('hover');
    } else {
      stopInteraction();
    }
  }, [startInteraction, stopInteraction]);

  return {
    ...interaction,
    setState,
    startInteraction,
    stopInteraction,
    handleClick,
    handleHover,
  };
}
