import { useState, useEffect, useCallback } from 'react';

export interface BreakpointValues {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  width: number;
  height: number;
}

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  largeDesktop: 1536,
};

export function useResponsive() {
  const [values, setValues] = useState<BreakpointValues>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    width: 0,
    height: 0,
  });

  const updateValues = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setValues({
      isMobile: width < breakpoints.mobile,
      isTablet: width >= breakpoints.mobile && width < breakpoints.desktop,
      isDesktop: width >= breakpoints.desktop && width < breakpoints.largeDesktop,
      isLargeDesktop: width >= breakpoints.largeDesktop,
      width,
      height,
    });
  }, []);

  useEffect(() => {
    updateValues();
    window.addEventListener('resize', updateValues);
    return () => window.removeEventListener('resize', updateValues);
  }, [updateValues]);

  return values;
}
