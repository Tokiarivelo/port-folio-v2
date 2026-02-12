'use client';

import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useThreeScene } from '../hooks/useThreeScene';
import { useAnimationLoop } from '../hooks/useAnimationLoop';
import { useCameraControls } from '../hooks/useCameraControls';
import { cn } from '@/lib/utils';

interface ThreeSceneProps {
  className?: string;
  backgroundColor?: number;
}

export function ThreeScene({ className, backgroundColor = 0x1a1a2e }: ThreeSceneProps) {
  const { containerRef, scene, camera, renderer, isReady, addObject, render } = useThreeScene({
    backgroundColor,
    antialias: true,
  });

  const { updatePosition } = useCameraControls(camera);

  // Create and add objects to the scene
  useEffect(() => {
    if (!isReady || !scene) return;

    // Create a rotating cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x4a90e2,
      shininess: 100,
    });
    const cube = new THREE.Mesh(geometry, material);
    addObject(cube);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    addObject(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    addObject(directionalLight);

    // Store cube reference for animation
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [isReady, scene, addObject]);

  // Animation loop
  useAnimationLoop((delta, elapsed) => {
    if (!scene || !camera || !renderer) return;

    // Rotate the cube
    scene.children.forEach(child => {
      if (child instanceof THREE.Mesh) {
        child.rotation.x += delta * 0.5;
        child.rotation.y += delta * 0.3;
      }
    });

    // Animate camera
    const radius = 5;
    const cameraX = Math.sin(elapsed * 0.2) * radius;
    const cameraZ = Math.cos(elapsed * 0.2) * radius;
    camera.position.x = cameraX;
    camera.position.z = cameraZ;
    camera.lookAt(0, 0, 0);

    render();
  }, [scene, camera, renderer, render]);

  return (
    <div 
      ref={containerRef} 
      className={cn('w-full h-[500px] rounded-lg overflow-hidden', className)}
    />
  );
}
