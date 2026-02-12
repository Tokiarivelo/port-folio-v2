# Interactive Portfolio

A modular, scalable interactive portfolio built with Next.js, featuring Three.js WebGL scenes, GSAP animations, and Lottie character animations.

## 🚀 Features

- **Modular Architecture**: Organized by feature modules (timeline, character, scenes, UI, navigation)
- **Strict Separation of Concerns**: Business logic isolated in reusable custom hooks
- **Three.js Integration**: Interactive 3D scenes with WebGL rendering
- **GSAP Animations**: Smooth timeline and scroll animations
- **Lottie Characters**: Animated character with interaction support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Support**: Dark, light, and system theme modes
- **TypeScript**: Full type safety across the codebase
- **shadcn/ui**: Beautiful, accessible UI components

## 📁 Project Structure

```
/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
│
├── modules/                  # Feature modules
│   ├── timeline/
│   │   ├── hooks/           # Timeline business logic
│   │   │   ├── useTimeline.ts
│   │   │   └── useTimelineAnimation.ts
│   │   └── components/      # Timeline UI components
│   │       └── Timeline.tsx
│   │
│   ├── character/
│   │   ├── hooks/           # Character animation logic
│   │   │   ├── useCharacter.ts
│   │   │   └── useCharacterInteraction.ts
│   │   └── components/      # Character UI components
│   │       └── Character.tsx
│   │
│   ├── scenes/
│   │   ├── hooks/           # Three.js scene logic
│   │   │   ├── useThreeScene.ts
│   │   │   ├── useAnimationLoop.ts
│   │   │   └── useCameraControls.ts
│   │   └── components/      # 3D scene components
│   │       └── ThreeScene.tsx
│   │
│   ├── navigation/
│   │   ├── hooks/           # Navigation logic
│   │   │   ├── useNavigation.ts
│   │   │   └── useScrollAnimation.ts
│   │   └── components/      # Navigation UI
│   │       └── Navigation.tsx
│   │
│   └── ui/
│       ├── hooks/           # UI state management
│       │   ├── useTheme.ts
│       │   ├── useResponsive.ts
│       │   └── useModal.ts
│       └── components/      # UI components
│           └── ThemeToggle.tsx
│
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
│
├── lib/
│   └── utils.ts             # Utility functions
│
└── public/
    └── animations/          # Lottie animation files
```

## 🏗️ Architecture Principles

### 1. Separation of Concerns
- **No business logic in components**: All state management and business logic is extracted into custom hooks
- **Components are presentational**: They only handle rendering and user interactions
- **Hooks are reusable**: Each hook can be used independently across the application

### 2. Module Organization
Each module is self-contained with:
- `hooks/` - Business logic and state management
- `components/` - Presentational components
- Clear, single responsibility

### 3. Custom Hooks Pattern

```typescript
// Example: useTimeline hook
export function useTimeline(initialItems) {
  const [state, setState] = useState({...});
  
  const addItem = useCallback((item) => {
    // Business logic here
  }, []);
  
  return { ...state, addItem };
}
```

Components consume hooks:
```typescript
export function Timeline() {
  const { items, addItem } = useTimeline();
  // Only rendering logic here
}
```

## 🎨 Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js
- **Animations**: GSAP, Lottie
- **Icons**: Lucide React

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tokiarivelo/port-folio-v2.git
cd port-folio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Modules

### Timeline Module
- Manages timeline events with GSAP animations
- Custom hooks: `useTimeline`, `useTimelineAnimation`
- Supports filtering and active item selection

### Character Module
- Lottie-based character animations
- Custom hooks: `useCharacter`, `useCharacterInteraction`
- Supports playback control and interaction states

### Scenes Module
- Three.js WebGL rendering
- Custom hooks: `useThreeScene`, `useAnimationLoop`, `useCameraControls`
- Manages 3D objects, camera, and rendering

### Navigation Module
- Section-based navigation with smooth scrolling
- Custom hooks: `useNavigation`, `useScrollAnimation`
- Responsive mobile menu

### UI Module
- Theme management (dark/light/system)
- Responsive breakpoint detection
- Modal management
- Custom hooks: `useTheme`, `useResponsive`, `useModal`

## 🎨 Customization

### Adding New Timeline Items

```typescript
const { addItem } = useTimeline();

addItem({
  id: '4',
  title: 'New Event',
  date: '2024-01-01',
  description: 'Event description',
  category: 'work'
});
```

### Using Custom Lottie Animations

```typescript
import animationData from './my-animation.json';

<Character animationData={animationData} />
```

### Extending Three.js Scenes

```typescript
const { scene, addObject } = useThreeScene();

// Add custom 3D objects
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry, material);
addObject(sphere);
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1536px
- Large Desktop: > 1536px

Use the `useResponsive` hook to access breakpoint information:
```typescript
const { isMobile, isTablet, isDesktop } = useResponsive();
```

## 🧪 Code Quality

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript is configured with strict mode for maximum type safety.

## 📄 License

ISC

## 🤝 Contributing

Contributions are welcome! Please follow the established architecture patterns:
1. Keep business logic in hooks
2. Keep components presentational
3. Maintain module structure
4. Use TypeScript
5. Follow Tailwind CSS conventions

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ using Next.js, Three.js, GSAP, and Lottie
