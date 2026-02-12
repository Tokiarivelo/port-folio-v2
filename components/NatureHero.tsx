'use client';

export function NatureHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#004d40] via-[#00796b] to-[#4db6ac]">
      {/* Cloud layers */}
      <div className="absolute top-0 left-0 w-full h-1/3 opacity-30">
        <svg className="absolute top-10 left-10" width="200" height="60" viewBox="0 0 200 60">
          <ellipse cx="50" cy="30" rx="50" ry="30" fill="#003d33" opacity="0.4" />
          <ellipse cx="100" cy="25" rx="60" ry="25" fill="#003d33" opacity="0.5" />
          <ellipse cx="150" cy="35" rx="50" ry="25" fill="#003d33" opacity="0.3" />
        </svg>
        <svg className="absolute top-20 right-20" width="250" height="80" viewBox="0 0 250 80">
          <ellipse cx="60" cy="40" rx="60" ry="35" fill="#003d33" opacity="0.3" />
          <ellipse cx="130" cy="35" rx="70" ry="30" fill="#003d33" opacity="0.4" />
          <ellipse cx="190" cy="45" rx="60" ry="30" fill="#003d33" opacity="0.35" />
        </svg>
      </div>

      {/* Glowing Moon */}
      <div className="absolute left-[10%] md:left-[15%] top-[15%] md:top-[20%]">
        {/* Outer glow */}
        <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#7dd3c0] opacity-30 blur-3xl"></div>
        {/* Middle glow */}
        <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#a5f3e0] opacity-40 blur-2xl animate-pulse"></div>
        {/* Moon */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-radial from-[#c8faf0] to-[#7dd3c0] shadow-2xl"></div>
      </div>

      {/* Hill/Ground silhouette */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 400" className="w-full h-auto">
          <path 
            d="M0,200 Q360,100 720,180 T1440,150 L1440,400 L0,400 Z" 
            fill="#003d33" 
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Small character on the hill */}
      <div className="absolute bottom-[25%] left-[12%] md:left-[15%] z-20">
        <svg width="40" height="60" viewBox="0 0 40 60">
          {/* Simple character silhouette */}
          <rect x="15" y="20" width="10" height="15" fill="#c62828" rx="2" />
          <circle cx="20" cy="15" r="8" fill="#c62828" />
          <rect x="12" y="35" width="6" height="15" fill="#c62828" rx="2" />
          <rect x="22" y="35" width="6" height="15" fill="#c62828" rx="2" />
        </svg>
      </div>

      {/* Person reading under tree - right side */}
      <div className="absolute bottom-[15%] right-[20%] md:right-[25%] z-10">
        <svg width="180" height="200" viewBox="0 0 180 200">
          {/* Person silhouette sitting and reading */}
          <g opacity="0.6" fill="#00332b">
            {/* Head */}
            <circle cx="80" cy="60" r="20" />
            {/* Body */}
            <ellipse cx="80" cy="95" rx="18" ry="25" />
            {/* Legs (sitting position) */}
            <rect x="50" y="110" width="15" height="40" rx="7" transform="rotate(-20 57 130)" />
            <rect x="75" y="115" width="15" height="35" rx="7" transform="rotate(10 82 132)" />
            {/* Book */}
            <rect x="65" y="75" width="25" height="18" rx="2" fill="#004d40" />
          </g>
        </svg>
      </div>

      {/* Tropical plant on right - front layer */}
      <div className="absolute bottom-0 right-0 z-30">
        <svg width="400" height="600" viewBox="0 0 400 600" className="w-[250px] md:w-[400px] h-auto">
          {/* Large monstera leaf */}
          <g opacity="0.85">
            <ellipse cx="200" cy="300" rx="120" ry="180" fill="#002b24" transform="rotate(25 200 300)" />
            <ellipse cx="250" cy="280" rx="100" ry="160" fill="#003d33" transform="rotate(15 250 280)" />
          </g>
          {/* Banana leaves */}
          <g opacity="0.9">
            <ellipse cx="280" cy="200" rx="80" ry="140" fill="#00332b" transform="rotate(-20 280 200)" />
            <ellipse cx="180" cy="180" rx="70" ry="130" fill="#003d33" transform="rotate(30 180 180)" />
          </g>
          {/* Stems */}
          <rect x="195" y="400" width="10" height="200" fill="#002b24" opacity="0.7" />
          <rect x="275" y="350" width="8" height="250" fill="#002b24" opacity="0.6" />
        </svg>
      </div>

      {/* Additional tropical plant on right - back layer */}
      <div className="absolute top-[10%] right-[5%] z-5">
        <svg width="300" height="400" viewBox="0 0 300 400" className="w-[200px] md:w-[300px] h-auto">
          <g opacity="0.4">
            {/* Palm-like leaves */}
            <ellipse cx="150" cy="150" rx="100" ry="140" fill="#00332b" transform="rotate(10 150 150)" />
            <ellipse cx="200" cy="130" rx="90" ry="130" fill="#003d33" transform="rotate(-15 200 130)" />
            <ellipse cx="120" cy="140" rx="85" ry="120" fill="#002b24" transform="rotate(25 120 140)" />
          </g>
        </svg>
      </div>

      {/* Plant on left side near character */}
      <div className="absolute bottom-[20%] left-[25%] md:left-[28%] z-15">
        <svg width="80" height="120" viewBox="0 0 80 120">
          <g opacity="0.7" fill="#003d33">
            <ellipse cx="40" cy="40" rx="25" ry="35" transform="rotate(-30 40 40)" />
            <ellipse cx="45" cy="60" rx="20" ry="30" transform="rotate(20 45 60)" />
            <rect x="38" y="70" width="4" height="50" />
          </g>
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative z-40 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to
              <br />
              <span className="text-[#c8faf0]">My Journey</span>
            </h1>
            <p className="text-xl text-[#a5f3e0] leading-relaxed">
              Exploring creativity, technology, and nature-inspired design
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-[#7dd3c0] text-[#004d40] rounded-lg font-semibold hover:bg-[#a5f3e0] transition-all shadow-lg hover:shadow-xl">
                Explore Work
              </button>
              <button className="px-8 py-3 border-2 border-[#7dd3c0] text-[#c8faf0] rounded-lg font-semibold hover:bg-[#7dd3c0]/10 transition-all">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
