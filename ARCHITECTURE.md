# Architecture Documentation

## Overview

This is a modular, scalable interactive portfolio built with strict separation of concerns. The architecture ensures that **no business logic resides in components** - all logic is extracted into reusable custom hooks.

## Core Principles

### 1. Separation of Concerns
- **Components**: Pure presentational layer (UI rendering only)
- **Hooks**: Business logic, state management, and side effects
- **Clear boundaries**: Each module is self-contained

### 2. Module Structure

Each feature module follows this pattern:
```
module/
├── hooks/          # Business logic and state management
│   ├── use[Module].ts
│   └── use[Module]Animation.ts
└── components/     # Presentational components
    └── [Module].tsx
```

### 3. Hook-First Architecture

All components consume hooks for their functionality:
```typescript
// ❌ WRONG: Business logic in component
function Timeline() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  return <div>...</div>;
}

// ✅ CORRECT: Business logic in hook
function Timeline() {
  const { items, addItem } = useTimeline();
  return <div>...</div>;
}
```

## Module Breakdown

### Timeline Module
**Location**: `modules/timeline/`

**Hooks**:
- `useTimeline`: Manages timeline items, active selection, and CRUD operations
- `useTimelineAnimation`: Handles GSAP animations for timeline items

**Component**:
- `Timeline`: Renders timeline items with animations

**Features**:
- Add/remove timeline items
- Active item selection
- GSAP stagger animations
- Sorting by date

### Character Module
**Location**: `modules/character/`

**Hooks**:
- `useCharacter`: Controls Lottie animation playback (play, pause, stop, speed, segments)
- `useCharacterInteraction`: Manages character states and user interactions

**Component**:
- `Character`: Displays Lottie animations with interaction support

**Features**:
- Lottie animation support
- Interactive states (idle, walking, waving, etc.)
- Click and hover interactions
- Custom animation data support

### Scenes Module
**Location**: `modules/scenes/`

**Hooks**:
- `useThreeScene`: Sets up Three.js scene, camera, renderer, and window resize handling
- `useAnimationLoop`: Provides RAF (RequestAnimationFrame) loop with delta time
- `useCameraControls`: Controls camera position, rotation, zoom, and lookAt

**Component**:
- `ThreeScene`: Renders 3D WebGL scene with rotating cube

**Features**:
- Three.js WebGL rendering
- Automatic resize handling
- Animation loop with delta time
- Camera controls
- Lighting system

### Navigation Module
**Location**: `modules/navigation/`

**Hooks**:
- `useNavigation`: Section navigation, menu state, and history tracking
- `useScrollAnimation`: Smooth scroll animations using GSAP

**Component**:
- `Navigation`: Responsive navigation bar with mobile menu

**Features**:
- Section-based navigation
- Mobile responsive menu
- Navigation history
- Smooth scroll (when GSAP ScrollTo plugin is added)

### UI Module
**Location**: `modules/ui/`

**Hooks**:
- `useTheme`: Theme management (light, dark, system) with localStorage persistence
- `useResponsive`: Breakpoint detection and window dimensions
- `useModal`: Modal state management

**Components**:
- `ThemeToggle`: Theme switcher button

**Features**:
- Theme persistence
- System theme detection
- Responsive breakpoint hooks
- Modal management

## Shared UI Components

**Location**: `components/ui/`

Based on shadcn/ui patterns:
- `Button`: Configurable button with variants
- `Card`: Card container with header, content, footer sections

## Type Safety

All modules are fully typed with TypeScript:
- Interface definitions for all state objects
- Type-safe hook return values
- Strict mode enabled

## Extensibility

### Adding a New Module

1. Create module structure:
```bash
mkdir -p modules/my-module/{hooks,components}
```

2. Create custom hook with business logic:
```typescript
// modules/my-module/hooks/useMyModule.ts
export function useMyModule() {
  const [state, setState] = useState(...);
  
  const doSomething = useCallback(() => {
    // Business logic here
  }, []);
  
  return { state, doSomething };
}
```

3. Create presentational component:
```typescript
// modules/my-module/components/MyModule.tsx
export function MyModule() {
  const { state, doSomething } = useMyModule();
  return <div>...</div>;
}
```

### Adding Animation Libraries

**GSAP**: Already integrated in timeline and navigation modules
**Three.js**: Already integrated in scenes module
**Lottie**: Already integrated in character module
**Spine**: Can be added following the same pattern as Lottie

## Performance Considerations

1. **useCallback**: All hook functions use `useCallback` for memoization
2. **Animation Cleanup**: All animations properly cleanup on unmount
3. **RAF Management**: Single animation loop per scene
4. **CSS Variables**: Theme colors use CSS variables for instant switching

## Testing Strategy

Each hook can be tested independently:
```typescript
import { renderHook, act } from '@testing-library/react';
import { useTimeline } from './useTimeline';

test('adds timeline item', () => {
  const { result } = renderHook(() => useTimeline());
  
  act(() => {
    result.current.addItem({
      id: '1',
      title: 'Test',
      date: '2024-01-01',
      description: 'Test item',
      category: 'work'
    });
  });
  
  expect(result.current.items).toHaveLength(1);
});
```

## Best Practices

1. **Never put business logic in components**: Always extract to hooks
2. **Single Responsibility**: Each hook should handle one concern
3. **Type Everything**: Use TypeScript for all modules
4. **Clean Dependencies**: Always cleanup effects and animations
5. **Memoization**: Use `useCallback` and `useMemo` appropriately
6. **Consistent Naming**: Use "use" prefix for hooks, PascalCase for components

## Future Enhancements

- [ ] Add Spine animation support
- [ ] Implement ScrollTrigger for scroll animations
- [ ] Add more Three.js scenes
- [ ] Create animation state machine for complex character animations
- [ ] Add unit tests for all hooks
- [ ] Add E2E tests for user flows
- [ ] Implement loading states and error boundaries
- [ ] Add accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Performance monitoring and optimization
