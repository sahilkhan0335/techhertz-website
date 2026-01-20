"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const directional = new THREE.DirectionalLight(0x93c5fd, 1.4);
    directional.position.set(5, 8, 5);
    const point = new THREE.PointLight(0xa855f7, 0.8);
    point.position.set(-6, -4, -6);
    scene.add(ambient, directional, point);

    const knotGeometry = new THREE.TorusKnotGeometry(1.25, 0.45, 180, 24);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.75,
    });
    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    scene.add(knot);

    const group = new THREE.Group();
    const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);
    const sphereMaterials: THREE.Material[] = [];
    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * Math.PI * 2;
      const material = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.25,
      });
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(Math.cos(angle) * 3.2, Math.sin(angle) * 1.2, Math.sin(angle) * 2.8);
      const scale = 0.18 + i * 0.02;
      sphere.scale.setScalar(scale);
      group.add(sphere);
      spheres.push(sphere);
      sphereMaterials.push(material);
    }
    scene.add(group);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      knot.rotation.x = elapsed * 0.15;
      knot.rotation.y = elapsed * 0.2;
      group.rotation.y = elapsed * 0.25;
      group.rotation.x = elapsed * 0.12;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      renderer.dispose();
      knotGeometry.dispose();
      knotMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterials.forEach((material) => material.dispose());
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
}
