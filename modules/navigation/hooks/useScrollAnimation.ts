import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface ScrollAnimationOptions {
  duration?: number;
  ease?: string;
  offset?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { duration = 1, ease = 'power2.inOut', offset = 0 } = options;

  const scrollTo = (target: string | number) => {
    let scrollTarget: number;

    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (!element) return;
      scrollTarget = element.getBoundingClientRect().top + window.pageYOffset + offset;
    } else {
      scrollTarget = target + offset;
    }

    gsap.to(window, {
      scrollTo: scrollTarget,
      duration,
      ease,
    });
  };

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration,
      ease,
    });
  };

  const scrollToBottom = () => {
    gsap.to(window, {
      scrollTo: document.body.scrollHeight,
      duration,
      ease,
    });
  };

  return {
    scrollTo,
    scrollToTop,
    scrollToBottom,
  };
}
