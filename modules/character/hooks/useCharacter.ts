import { useState, useCallback, useRef } from 'react';
import type { AnimationItem } from 'lottie-web';

export interface CharacterState {
  isPlaying: boolean;
  currentAnimation: string | null;
  speed: number;
  loop: boolean;
}

export function useCharacter() {
  const [state, setState] = useState<CharacterState>({
    isPlaying: false,
    currentAnimation: null,
    speed: 1,
    loop: true,
  });

  const animationRef = useRef<AnimationItem | null>(null);

  const setAnimation = useCallback((lottieRef: AnimationItem | null) => {
    animationRef.current = lottieRef;
  }, []);

  const play = useCallback(() => {
    animationRef.current?.play();
    setState(prev => ({ ...prev, isPlaying: true }));
  }, []);

  const pause = useCallback(() => {
    animationRef.current?.pause();
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const stop = useCallback(() => {
    animationRef.current?.stop();
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const setSpeed = useCallback((speed: number) => {
    animationRef.current?.setSpeed(speed);
    setState(prev => ({ ...prev, speed }));
  }, []);

  const setLoop = useCallback((loop: boolean) => {
    if (animationRef.current) {
      animationRef.current.loop = loop;
      setState(prev => ({ ...prev, loop }));
    }
  }, []);

  const goToFrame = useCallback((frame: number, isFrame = true) => {
    animationRef.current?.goToAndStop(frame, isFrame);
  }, []);

  const playSegment = useCallback((segment: [number, number], forceFlag = false) => {
    animationRef.current?.playSegments(segment, forceFlag);
    setState(prev => ({ ...prev, isPlaying: true }));
  }, []);

  return {
    ...state,
    setAnimation,
    play,
    pause,
    stop,
    setSpeed,
    setLoop,
    goToFrame,
    playSegment,
  };
}
