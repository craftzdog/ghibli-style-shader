import { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { RedFormat, DataTexture } from "three";
import * as SimpleShader from "./SimpleShader";

export const Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >
        <shaderMaterial attach="material" {...SimpleShader} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
