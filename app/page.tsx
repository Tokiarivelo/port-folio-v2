'use client';

import { GameScene } from '@/modules/game-scene/components/GameScene';

export default function Home() {
  return (
    <div className="relative">
      {/* Main Game Scene - Single Screen Experience */}
      <GameScene />
      
      {/* Spacer to allow scrolling and trigger parallax */}
      <div className="h-[400vh]" />
    </div>
  );
}
