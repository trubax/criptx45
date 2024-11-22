import { useEffect } from 'react';

export const useNativeBehavior = () => {
  useEffect(() => {
    // Gestione orientamento
    const lockOrientation = async () => {
      try {
        await screen.orientation.lock('portrait');
      } catch (error) {
        console.warn('Orientamento non bloccabile:', error);
      }
    };

    // Gestisci solo lo zoom
    const handleGesture = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleGesture, { passive: false });
    lockOrientation();

    return () => {
      document.removeEventListener('touchstart', handleGesture);
    };
  }, []);
}; 