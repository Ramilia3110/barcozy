import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

const Scene = () => {
  return (
    <div className="canvas-container">
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        {/* Ambient and directional light for better lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.7} />

        {/* Load the model */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* Optional: Orbit controls for better model interaction */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
