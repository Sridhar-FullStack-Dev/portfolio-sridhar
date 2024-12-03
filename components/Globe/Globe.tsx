import { OrbitControls } from "@react-three/drei";
import type { MeshProps } from "@react-three/fiber";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { Euler, TextureLoader } from "three";

export default function Globe() {
  const scene = useRef(null);
  const mesh = useRef<MeshProps>(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/Globe/color.jpg",
    "/Globe/normal.png",
    "/Globe/occlusion.jpg",
  ]);

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <OrbitControls
        enableRotate={true}
        enableDamping={true}
        enableZoom={false}
        enablePan={false}
      />
      <motion.mesh ref={mesh} scale={3} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
      <GlobeMesh mesh={mesh} />
    </Canvas>
  );
}

interface GlobeMeshProps {
  mesh: React.RefObject<MeshProps>;
}

function GlobeMesh({ mesh }: GlobeMeshProps) {
  useFrame(() => {
    if (mesh.current && mesh.current.rotation) {
      (mesh.current.rotation as Euler).y += 0.001;
    }
  });

  return null;
}
