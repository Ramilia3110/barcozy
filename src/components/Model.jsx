import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model() {
  const group = useRef();

  // Load the GLTF model and its animations
  const { scene, animations } = useGLTF("/assets/fizzy.glb");

  // Hook for controlling animations
  const { actions } = useAnimations(animations, group);

  // Start the first animation (if available)
  React.useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation
    }
  }, [actions]);

  return (
    <group ref={group} position={[0, -1, 0]} scale={[0.032, 0.032, 0.032]}>
      {/* Render the 3D model with its materials */}
      <primitive object={scene} />
    </group>
  );
}

// Preload the model to enhance performance
useGLTF.preload("/assets/fizzy.glb");
