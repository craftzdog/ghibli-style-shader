export function Ground() {
  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -3.05, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[100, 100, 1, 1]} />
      <shadowMaterial opacity={0.4} />
    </mesh>
  );
}
