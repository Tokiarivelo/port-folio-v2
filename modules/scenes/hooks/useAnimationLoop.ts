import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface AnimationLoopCallback {
  (delta: number, elapsed: number): void;
}

export function useAnimationLoop(callback: AnimationLoopCallback, deps: any[] = []) {
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const delta = clockRef.current.getDelta();
        const elapsed = clockRef.current.getElapsedTime();
        callback(delta, elapsed);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    clockRef.current.start();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      clockRef.current.stop();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return clockRef.current;
}
