import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTheme } from '../hooks/useTheme.jsx';

/**
 * Card3D: Interactive 3D tilt card component.
 * Lifts, rotates, and shines in response to mouse movement on desktop.
 * Tones down on tablet; switches to a subtle touch elevation on mobile.
 */
export default function Card3D({
  children,
  className = '',
  style = {},
  maxTilt = 8,
  lift = 10,
  scale = 1.02,
  glare = true,
  onClick,
  as: Component = 'div',
  ...rest
}) {
  const cardRef = useRef(null);
  const rafId = useRef(null);
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice = () => {
    return (
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    );
  };

  const isTablet = () => {
    return (
      typeof window !== 'undefined' &&
      window.innerWidth >= 640 &&
      window.innerWidth < 1024
    );
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice()) return;
      if (!cardRef.current) return;

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const effectiveTilt = isTablet() ? maxTilt * 0.5 : maxTilt;
        const rotateX = ((y - centerY) / centerY) * -effectiveTilt;
        const rotateY = ((x - centerX) / centerX) * effectiveTilt;

        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
          2
        )}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) translateY(-${lift}px) scale3d(${scale}, ${scale}, 1)`;
        cardRef.current.style.setProperty('--mouse-x', `${glareX.toFixed(1)}%`);
        cardRef.current.style.setProperty('--mouse-y', `${glareY.toFixed(1)}%`);
      });
    },
    [maxTilt, lift, scale]
  );

  const handleMouseEnter = () => {
    if (isTouchDevice()) return;
    setIsHovered(true);
    if (cardRef.current) {
      cardRef.current.style.transition =
        'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease';
    }
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transition =
        'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease';
      cardRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    }
  };

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`theme-card relative rounded-2xl will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...rest}
    >
      {/* Dynamic Lighting Glare Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: isDark
              ? 'radial-gradient(circle 320px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 215, 122, 0.18), transparent 70%)'
              : 'radial-gradient(circle 320px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(169, 214, 229, 0.45), transparent 70%)',
            zIndex: 2,
          }}
        />
      )}

      {/* Card Content */}
      <div
        className="relative z-[3] h-full w-full flex flex-col justify-between"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </Component>
  );
}
