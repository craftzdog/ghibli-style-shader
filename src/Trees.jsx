import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color } from "three";

export function Trees(props) {
  const { nodes, materials } = useGLTF("/trees.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >
        <meshToonMaterial color="#234549" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/trees.glb");
