import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Trees(props) {
  const { nodes, materials } = useGLTF("/trees.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        material={materials["Stylized Foliage"]}
        position={[0.33, -0.05, -0.68]}
      />
    </group>
  );
}

useGLTF.preload("/trees.glb");
