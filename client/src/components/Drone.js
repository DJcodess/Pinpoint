import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./dronefinal.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.8} />
    </>
  );
};

export default function Drone3D() {
  return (
    <div className="relative w-full h-full">
      <Canvas className="w-full">
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
