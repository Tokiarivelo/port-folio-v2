import { useState, useCallback } from 'react';
import * as THREE from 'three';

export interface CameraControls {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  zoom: number;
}

export function useCameraControls(camera: THREE.PerspectiveCamera | null) {
  const [controls, setControls] = useState<CameraControls>({
    position: new THREE.Vector3(0, 0, 5),
    rotation: new THREE.Euler(0, 0, 0),
    zoom: 1,
  });

  const updatePosition = useCallback((x: number, y: number, z: number) => {
    if (!camera) return;
    camera.position.set(x, y, z);
    setControls(prev => ({
      ...prev,
      position: new THREE.Vector3(x, y, z),
    }));
  }, [camera]);

  const updateRotation = useCallback((x: number, y: number, z: number) => {
    if (!camera) return;
    camera.rotation.set(x, y, z);
    setControls(prev => ({
      ...prev,
      rotation: new THREE.Euler(x, y, z),
    }));
  }, [camera]);

  const updateZoom = useCallback((zoom: number) => {
    if (!camera) return;
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
    setControls(prev => ({
      ...prev,
      zoom,
    }));
  }, [camera]);

  const lookAt = useCallback((x: number, y: number, z: number) => {
    if (!camera) return;
    camera.lookAt(x, y, z);
  }, [camera]);

  const reset = useCallback(() => {
    if (!camera) return;
    camera.position.set(0, 0, 5);
    camera.rotation.set(0, 0, 0);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    setControls({
      position: new THREE.Vector3(0, 0, 5),
      rotation: new THREE.Euler(0, 0, 0),
      zoom: 1,
    });
  }, [camera]);

  return {
    controls,
    updatePosition,
    updateRotation,
    updateZoom,
    lookAt,
    reset,
  };
}
