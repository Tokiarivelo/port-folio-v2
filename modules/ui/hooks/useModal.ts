import { useState, useCallback } from 'react';

export interface ModalState {
  isOpen: boolean;
  content: React.ReactNode | null;
  title?: string;
}

export function useModal() {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    content: null,
    title: undefined,
  });

  const open = useCallback((content: React.ReactNode, title?: string) => {
    setState({
      isOpen: true,
      content,
      title,
    });
  }, []);

  const close = useCallback(() => {
    setState({
      isOpen: false,
      content: null,
      title: undefined,
    });
  }, []);

  const toggle = useCallback(() => {
    setState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  }, []);

  return {
    ...state,
    open,
    close,
    toggle,
  };
}
