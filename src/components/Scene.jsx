import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars, Sparkles, OrbitControls } from '@react-three/drei';
import FloatingShapes from './FloatingShapes';

export default function Scene({ theme }) {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={[theme === 'light' ? '#f8f9fa' : '#050505']} />
        
        {/* Lighting */}
        <ambientLight intensity={theme === 'light' ? 0.5 : 0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color={theme === 'light' ? '#ffffff' : '#8b5cf6'} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
        
        {/* Floating Geometry (Now Solar System) */}
        <FloatingShapes theme={theme} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#8b5cf6" />
        
        {/* Environment setup for reflections */}
        <Environment preset="city" />
        
        {/* Allows subtle movement with mouse, but disabled zooming */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2 + 0.2} minPolarAngle={Math.PI / 2 - 0.2} />
      </Canvas>
    </div>
  );
}
