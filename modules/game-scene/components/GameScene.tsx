'use client';

import { useMemo } from 'react';
import { useParallaxScroll } from '../hooks/useParallaxScroll';
import { useSceneTransition } from '../hooks/useSceneTransition';
import { Character } from '@/modules/character/components/Character';

export function GameScene() {
  const { scrollProgress, getLayerTransform } = useParallaxScroll();
  const { colors, moonOpacity, starOpacity } = useSceneTransition(scrollProgress);

  // Generate stars once
  const stars = useMemo(() => Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 200,
    y: Math.random() * 60,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5,
  })), []);

  // Generate tree configurations once
  const backgroundTrees = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    position: i * 12,
    height: Math.random() * 100 + 150,
  })), []);

  const midgroundTrees = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    position: i * 14,
    height: Math.random() * 120 + 180,
  })), []);

  const foregroundTrees = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
    id: i,
    position: i * 18,
    height: Math.random() * 150 + 200,
  })), []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sky Background with Gradient */}
      <div 
        className="fixed inset-0 transition-colors duration-1000"
        style={{
          background: `linear-gradient(to bottom, ${colors.sky} 0%, ${colors.horizon} 50%, ${colors.foreground} 100%)`,
        }}
      />

      {/* Stars Layer */}
      <div 
        className="fixed inset-0 transition-opacity duration-1000"
        style={{ opacity: starOpacity }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div 
        className="fixed transition-opacity duration-1000"
        style={{
          top: '10%',
          right: '15%',
          opacity: moonOpacity,
        }}
      >
        <div className="relative">
          {/* Moon glow */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
              transform: 'translate(-25%, -25%) scale(1.5)',
            }}
          />
          {/* Moon body */}
          <div 
            className="relative rounded-full"
            style={{
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle at 30% 30%, #fefefe 0%, #e0e0e0 100%)',
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            }}
          />
        </div>
      </div>

      {/* Distant Mountains - Slowest parallax */}
      <div 
        className="absolute bottom-0 left-0 w-[300%] h-full pointer-events-none"
        style={{ transform: getLayerTransform(0.2) }}
      >
        <svg 
          className="absolute bottom-0 w-full h-3/5" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,400 L0,200 Q200,150 400,180 T800,160 T1200,200 L1200,400 Z"
            fill={colors.horizon}
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Mid Mountains */}
      <div 
        className="absolute bottom-0 left-0 w-[250%] h-full pointer-events-none"
        style={{ transform: getLayerTransform(0.4) }}
      >
        <svg 
          className="absolute bottom-0 w-full h-2/5" 
          viewBox="0 0 1200 300" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 L0,150 Q150,100 300,120 T600,110 T900,140 T1200,120 L1200,300 Z"
            fill={colors.foreground}
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Background Trees */}
      <div 
        className="absolute bottom-0 left-0 w-[250%] h-full pointer-events-none"
        style={{ transform: getLayerTransform(0.5) }}
      >
        {backgroundTrees.map((tree) => (
          <div
            key={tree.id}
            className="absolute bottom-0"
            style={{
              left: `${tree.position}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <Tree 
              height={tree.height}
              color={colors.foreground}
              opacity={0.3}
            />
          </div>
        ))}
      </div>

      {/* Midground Trees */}
      <div 
        className="absolute bottom-0 left-0 w-[200%] h-full pointer-events-none"
        style={{ transform: getLayerTransform(0.7) }}
      >
        {midgroundTrees.map((tree) => (
          <div
            key={tree.id}
            className="absolute bottom-0"
            style={{
              left: `${tree.position}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <Tree 
              height={tree.height}
              color={colors.foreground}
              opacity={0.5}
            />
          </div>
        ))}
      </div>

      {/* Terrain - Ground Layer */}
      <div 
        className="absolute bottom-0 left-0 w-[200%] h-full pointer-events-none"
        style={{ transform: getLayerTransform(0.85) }}
      >
        <svg 
          className="absolute bottom-0 w-full h-1/4" 
          viewBox="0 0 1200 200" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 L0,100 Q200,80 400,90 T800,95 T1200,85 L1200,200 Z"
            fill={colors.foreground}
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Foreground Trees */}
      <div 
        className="absolute bottom-0 left-0 w-[180%] h-full pointer-events-none"
        style={{ transform: getLayerTransform(0.9) }}
      >
        {foregroundTrees.map((tree) => (
          <div
            key={tree.id}
            className="absolute bottom-0"
            style={{
              left: `${tree.position}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <Tree 
              height={tree.height}
              color={colors.foreground}
              opacity={0.8}
            />
          </div>
        ))}
      </div>

      {/* Character - Positioned on terrain */}
      <div 
        className="fixed z-50 transition-all duration-300"
        style={{
          left: '20%',
          bottom: '18%',
          transform: `scale(${0.8 + scrollProgress * 0.2})`,
        }}
      >
        <Character width={120} height={120} />
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <div className="text-sm font-medium">Scroll to explore</div>
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/60 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="text-xs">{Math.round(scrollProgress * 100)}%</div>
        </div>
      </div>
    </div>
  );
}

function Tree({ height, color, opacity }: { height: number; color: string; opacity: number }) {
  return (
    <svg 
      width={height * 0.4} 
      height={height} 
      viewBox="0 0 40 100" 
      fill="none"
      style={{ opacity }}
    >
      {/* Trunk */}
      <rect x="16" y="70" width="8" height="30" fill={color} />
      {/* Foliage - Pine tree shape */}
      <path
        d="M20,0 L5,35 L10,35 L0,60 L8,60 L0,75 L40,75 L32,60 L40,60 L30,35 L35,35 Z"
        fill={color}
      />
    </svg>
  );
}
