// src/components/Preloader.tsx
import { useEffect, useState, CSSProperties } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Complete loading only when both text and loader are done
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        window.scrollTo(0, 0);
      }, 800);
    }, 3500); // Reduced from 2500ms to 2000ms to match progress

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  // Main container styles
  const preloaderStyles: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#121110',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: fadeOut ? 0 : 1,
    pointerEvents: fadeOut ? 'none' : 'all',
  };

  // Text container
  const textContainerStyles: CSSProperties = {
    display: 'flex',
    gap: 'clamp(0.3rem, 1.5vw, 1rem)',
    alignItems: 'center',
    marginBottom: '1.5rem',
    textTransform: 'none',
  };

  // Individual character styles
  const getCharStyle = (index: number): CSSProperties => {
    const charProgress = Math.min(100, Math.max(0, (progress - (index * 15)) * 1.5));
    const isVisible = charProgress > 0;
    
    return {
      display: 'inline-block',
      color: `color-mix(in srgb, #4A4A4A ${100 - charProgress}%, #D1B38E ${charProgress}%)`,
      fontSize: 'clamp(3rem, 12vw, 8rem)',
      fontFamily: 'font-neue, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
      transition: 'all 0.3s ease',
      transform: `translateY(${isVisible ? '0' : '10px'}) scale(${1 + (charProgress * 0.003)})`,
      opacity: isVisible ? 1 : 0,
      textShadow: charProgress > 50 ? `0 0 ${charProgress * 0.3}px rgba(209, 179, 142, ${charProgress * 0.005})` : 'none',
      filter: `grayscale(${100 - charProgress}%) brightness(${100 + (charProgress * 0.5)}%)`,
    };
  };

  // Loading bar container
  const loadingBarContainerStyles: CSSProperties = {
    width: 'clamp(200px, 50vw, 400px)',
    height: '3px',
    backgroundColor: 'rgba(74, 74, 74, 0.3)',
    borderRadius: '2px',
    overflow: 'hidden',
    margin: '0 auto',
  };

  // Loading bar progress
  const loadingBarStyles: CSSProperties = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#D1B38E',
    borderRadius: '2px',
    transition: 'width 0.1s linear',
    boxShadow: '0 0 10px rgba(209, 179, 142, 0.5)',
  };

  if (!loading) return null;

  return (
    <div style={preloaderStyles}>
      <div style={{ textAlign: 'center' as const }}>
        {/* Lowercase "muses" text */}
        <div style={textContainerStyles}>
          {'muses'.split('').map((char, index) => (
            <span key={index} style={getCharStyle(index)}>
              {char}
            </span>
          ))}
        </div>
        
        {/* Loading bar */}
        <div style={loadingBarContainerStyles}>
          <div style={loadingBarStyles} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;