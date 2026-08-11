"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const VERTICAL_LABELS = [
  "AUTOMOTIVE",
  "FARM EQUIPMENT",
  "FINANCIAL SERVICES",
  "TECHNOLOGY SERVICES",
  "HOSPITALITY",
  "LOGISTICS",
  "RENEWABLE ENERGY",
  "REAL ESTATE",
  "EMERGING BUSINESSES",
];

function createVerticalTexture(title: string, index: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 680;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Dark Ink-800 background
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 680);
    bgGradient.addColorStop(0, "#131315");
    bgGradient.addColorStop(1, "#0B0B0C");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 512, 680);

    // Ember / Gold hairline border
    ctx.strokeStyle = index % 2 === 0 ? "#DC3A2C" : "#C6A15B";
    ctx.lineWidth = 8;
    ctx.strokeRect(12, 12, 488, 656);

    // Top Tag
    ctx.font = "bold 20px monospace";
    ctx.fillStyle = "#8E8C87";
    ctx.fillText(`(0${index + 1}) MAHINDRA VERTICAL`, 40, 60);

    // Giant Title
    ctx.font = "bold 44px sans-serif";
    ctx.fillStyle = "#F2F0EB";

    const words = title.split(" ");
    let y = 300;
    words.forEach((word) => {
      ctx.fillText(word, 40, y);
      y += 52;
    });

    // Bottom Accent Line
    ctx.fillStyle = index % 2 === 0 ? "#DC3A2C" : "#C6A15B";
    ctx.fillRect(40, 580, 120, 6);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface RingPlanesProps {
  scrollProgress: number;
}

function RingPlanes({ scrollProgress }: RingPlanesProps) {
  const groupRef = useRef<THREE.Group>(null);

  const textures = useMemo(() => {
    if (typeof window === "undefined") return [];
    return VERTICAL_LABELS.map((title, i) => createVerticalTexture(title, i));
  }, []);

  // Clean up textures on unmount
  useEffect(() => {
    return () => {
      textures.forEach((t) => t.dispose());
    };
  }, [textures]);

  const radius = 5.5;
  const count = 9;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Constant slow drift + scroll trigger progress
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2 + delta * 0.15;
  });

  const planes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const rotationY = angle;

      return { id: i, position: [x, 0, z] as [number, number, number], rotationY };
    });
  }, [count, radius]);

  if (!textures.length) return null;

  return (
    <group ref={groupRef} rotation={[0.14, 0, 0]}>
      {planes.map((plane, idx) => (
        <mesh
          key={plane.id}
          position={plane.position}
          rotation={[0, plane.rotationY, 0]}
        >
          <planeGeometry args={[2.4, 3.2]} />
          <meshBasicMaterial
            map={textures[idx]}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export function PerformanceScene({
  scrollProgress = 0,
}: {
  scrollProgress?: number;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      frameloop="always"
      className="h-full w-full"
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RingPlanes scrollProgress={scrollProgress} />
    </Canvas>
  );
}
