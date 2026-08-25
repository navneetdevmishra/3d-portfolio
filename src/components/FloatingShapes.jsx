import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Trail } from '@react-three/drei';
import * as THREE from 'three';

function Planet({ radius, distance, speed, color, timeOffset }) {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + timeOffset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * distance;
      ref.current.position.z = Math.sin(t) * distance;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Orbit Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[distance - 0.02, distance + 0.02, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      
      {/* Planet */}
      <Trail width={1} color={color} length={10} decay={1}>
        <Sphere ref={ref} args={[radius, 32, 32]}>
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.7} />
        </Sphere>
      </Trail>
    </group>
  );
}

export default function FloatingShapes({ theme }) {
  const systemRef = useRef();

  useFrame((state) => {
    // Gentle tilt and interactive mouse movement for the whole system
    if (systemRef.current) {
      const targetX = (state.mouse.x * 1);
      const targetY = (state.mouse.y * 1);
      
      systemRef.current.rotation.x = THREE.MathUtils.lerp(systemRef.current.rotation.x, targetY * 0.2 + 0.2, 0.05);
      systemRef.current.rotation.y = THREE.MathUtils.lerp(systemRef.current.rotation.y, targetX * 0.2, 0.05);
    }
  });

  const sunColor = theme === 'light' ? '#f59e0b' : '#fbbf24'; // Amber/Yellow
  const sunEmissive = theme === 'light' ? '#d97706' : '#f59e0b';

  return (
    <group ref={systemRef} position={[-3, 0, -5]} scale={1.2}>
      {/* Sun */}
      <Sphere args={[1.2, 64, 64]}>
        <meshStandardMaterial 
          color={sunColor} 
          emissive={sunEmissive} 
          emissiveIntensity={2} 
          toneMapped={false} 
        />
        <pointLight intensity={2} color={sunColor} distance={20} />
      </Sphere>

      {/* Planets */}
      <Planet radius={0.2} distance={2.5} speed={0.8} color="#94a3b8" timeOffset={0} />
      <Planet radius={0.3} distance={4.0} speed={0.5} color="#fb923c" timeOffset={Math.PI / 2} />
      <Planet radius={0.4} distance={6.0} speed={0.3} color="#38bdf8" timeOffset={Math.PI} />
      <Planet radius={0.25} distance={8.0} speed={0.2} color="#ef4444" timeOffset={Math.PI * 1.5} />
      
      {/* Floating particles/asteroids around the system */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 20, 
            (Math.random() - 0.5) * 2, 
            (Math.random() - 0.5) * 20
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}
