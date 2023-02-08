import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Box(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      castShadow
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry castShadow args={[1, 1, 1]} />
      <meshStandardMaterial castShadow color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
};
