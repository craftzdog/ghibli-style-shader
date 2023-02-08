import { useGLTF } from "@react-three/drei";
import { Trees } from "./Trees";

export function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Trees />
    </>
  );
}
