# Component and Hook Reference

## Custom Hooks

### Timeline Module

#### `useTimeline(initialItems?: TimelineItem[])`
Manages timeline items and their state.

**Returns:**
- `items: TimelineItem[]` - Array of timeline items
- `activeItem: string | null` - Currently active item ID
- `isAnimating: boolean` - Animation state
- `setActiveItem(id: string | null)` - Set active item
- `addItem(item: TimelineItem)` - Add new item
- `removeItem(id: string)` - Remove item
- `startAnimation()` - Start timeline animation
- `stopAnimation()` - Stop timeline animation

**Example:**
```typescript
const { items, activeItem, setActiveItem } = useTimeline(defaultItems);
```

#### `useTimelineAnimation(options?: TimelineAnimationOptions)`
Provides GSAP animation controls for timeline.

**Returns:**
- `containerRef: RefObject<HTMLDivElement>` - Container reference
- `play()` - Play animation
- `pause()` - Pause animation
- `reverse()` - Reverse animation
- `restart()` - Restart animation

### Character Module

#### `useCharacter()`
Controls Lottie animation playback.

**Returns:**
- `isPlaying: boolean` - Playback state
- `currentAnimation: string | null` - Current animation name
- `speed: number` - Playback speed
- `loop: boolean` - Loop state
- `setAnimation(ref)` - Set animation reference
- `play()` - Play animation
- `pause()` - Pause animation
- `stop()` - Stop animation
- `setSpeed(speed: number)` - Set playback speed
- `setLoop(loop: boolean)` - Set loop state
- `goToFrame(frame: number)` - Jump to frame
- `playSegment(segment: [number, number])` - Play segment

#### `useCharacterInteraction()`
Manages character interaction states.

**Returns:**
- `currentState: CharacterState` - Current state (idle, walking, etc.)
- `isInteracting: boolean` - Interaction state
- `interactionType: string | null` - Type of interaction
- `setState(state)` - Set character state
- `handleClick()` - Handle click interaction
- `handleHover(isHovering: boolean)` - Handle hover interaction

### Scenes Module

#### `useThreeScene(config?: SceneConfig)`
Sets up Three.js scene with camera and renderer.

**Returns:**
- `containerRef: RefObject<HTMLDivElement>` - Container reference
- `scene: THREE.Scene | null` - Scene instance
- `camera: THREE.PerspectiveCamera | null` - Camera instance
- `renderer: THREE.WebGLRenderer | null` - Renderer instance
- `isReady: boolean` - Scene ready state
- `render()` - Render scene
- `addObject(object: THREE.Object3D)` - Add object to scene
- `removeObject(object: THREE.Object3D)` - Remove object from scene

#### `useAnimationLoop(callback, deps)`
Provides animation loop with delta time.

**Parameters:**
- `callback(delta: number, elapsed: number)` - Animation callback
- `deps: any[]` - Dependency array

**Returns:**
- `clock: THREE.Clock` - Clock instance

#### `useCameraControls(camera: THREE.PerspectiveCamera | null)`
Controls camera position and orientation.

**Returns:**
- `controls: CameraControls` - Current camera state
- `updatePosition(x, y, z)` - Update camera position
- `updateRotation(x, y, z)` - Update camera rotation
- `updateZoom(zoom: number)` - Update zoom level
- `lookAt(x, y, z)` - Look at position
- `reset()` - Reset camera to defaults

### Navigation Module

#### `useNavigation(initialSection?: NavigationSection)`
Manages section navigation and menu state.

**Returns:**
- `currentSection: NavigationSection` - Current section
- `isMenuOpen: boolean` - Menu open state
- `history: NavigationSection[]` - Navigation history
- `navigateTo(section)` - Navigate to section
- `goBack()` - Go to previous section
- `toggleMenu()` - Toggle menu
- `closeMenu()` - Close menu
- `openMenu()` - Open menu

#### `useScrollAnimation(options?: ScrollAnimationOptions)`
Provides smooth scroll animations.

**Returns:**
- `scrollTo(target: string | number)` - Scroll to target
- `scrollToTop()` - Scroll to top
- `scrollToBottom()` - Scroll to bottom

### UI Module

#### `useTheme()`
Manages theme state with persistence.

**Returns:**
- `theme: ThemeMode` - Current theme (light, dark, system)
- `resolvedTheme: 'light' | 'dark'` - Resolved theme
- `toggleTheme()` - Toggle between themes
- `setLightTheme()` - Set light theme
- `setDarkTheme()` - Set dark theme
- `setSystemTheme()` - Set system theme

#### `useResponsive()`
Provides responsive breakpoint information.

**Returns:**
- `isMobile: boolean` - Mobile breakpoint (< 768px)
- `isTablet: boolean` - Tablet breakpoint (768-1024px)
- `isDesktop: boolean` - Desktop breakpoint (1024-1536px)
- `isLargeDesktop: boolean` - Large desktop (> 1536px)
- `width: number` - Window width
- `height: number` - Window height

#### `useModal()`
Manages modal state.

**Returns:**
- `isOpen: boolean` - Modal open state
- `content: React.ReactNode | null` - Modal content
- `title?: string` - Modal title
- `open(content, title?)` - Open modal
- `close()` - Close modal
- `toggle()` - Toggle modal

## Components

### Timeline Components

#### `<Timeline className?: string />`
Displays animated timeline with items.

**Props:**
- `className?: string` - Additional CSS classes

### Character Components

#### `<Character {...props} />`
Displays Lottie character animation.

**Props:**
- `animationData?: any` - Lottie animation data
- `className?: string` - Additional CSS classes
- `width?: number` - Animation width (default: 200)
- `height?: number` - Animation height (default: 200)

### Scenes Components

#### `<ThreeScene {...props} />`
Displays Three.js 3D scene.

**Props:**
- `className?: string` - Additional CSS classes
- `backgroundColor?: number` - Background color (default: 0x1a1a2e)

### Navigation Components

#### `<Navigation className?: string />`
Responsive navigation bar.

**Props:**
- `className?: string` - Additional CSS classes

### UI Components

#### `<ThemeToggle className?: string />`
Theme toggle button.

**Props:**
- `className?: string` - Additional CSS classes

#### `<Button {...props} />`
Configurable button component.

**Props:**
- `variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size?: 'default' | 'sm' | 'lg' | 'icon'`
- `className?: string`
- All standard button HTML attributes

#### `<Card {...props} />`
Card container component.

**Subcomponents:**
- `<CardHeader />` - Card header
- `<CardTitle />` - Card title
- `<CardDescription />` - Card description
- `<CardContent />` - Card content
- `<CardFooter />` - Card footer

## Usage Examples

### Creating a Timeline
```typescript
import { Timeline } from '@/modules/timeline/components/Timeline';

function MyPage() {
  return <Timeline />;
}
```

### Using Timeline Hook
```typescript
import { useTimeline } from '@/modules/timeline/hooks/useTimeline';

function MyComponent() {
  const { items, addItem } = useTimeline();
  
  const handleAdd = () => {
    addItem({
      id: '4',
      title: 'New Event',
      date: '2024-01-01',
      description: 'Description',
      category: 'work'
    });
  };
  
  return <button onClick={handleAdd}>Add Item</button>;
}
```

### Creating 3D Scene
```typescript
import { ThreeScene } from '@/modules/scenes/components/ThreeScene';

function MyPage() {
  return <ThreeScene backgroundColor={0x1a1a2e} />;
}
```

### Using Three.js Hook
```typescript
import { useThreeScene } from '@/modules/scenes/hooks/useThreeScene';
import { useAnimationLoop } from '@/modules/scenes/hooks/useAnimationLoop';

function MyScene() {
  const { containerRef, scene, camera, renderer, addObject, render } = useThreeScene();
  
  useEffect(() => {
    if (!scene) return;
    
    // Add objects
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    addObject(cube);
  }, [scene, addObject]);
  
  useAnimationLoop((delta, elapsed) => {
    render();
  }, [render]);
  
  return <div ref={containerRef} style={{ width: '100%', height: '500px' }} />;
}
```

### Theme Management
```typescript
import { useTheme } from '@/modules/ui/hooks/useTheme';

function ThemeSettings() {
  const { theme, setLightTheme, setDarkTheme, setSystemTheme } = useTheme();
  
  return (
    <div>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={setDarkTheme}>Dark</button>
      <button onClick={setSystemTheme}>System</button>
      <p>Current: {theme}</p>
    </div>
  );
}
```

### Responsive Design
```typescript
import { useResponsive } from '@/modules/ui/hooks/useResponsive';

function ResponsiveComponent() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```
