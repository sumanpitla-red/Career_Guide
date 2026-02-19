import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <mesh rotation={[0.3, 0.4, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="cyan" wireframe />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <Canvas style={{ position: "fixed", height: "100vh", zIndex: -1 }}>
      <ambientLight />
      <Sphere />
    </Canvas>
  );
}
