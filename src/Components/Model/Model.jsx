import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/akarryon3.glb");
  return <primitive object={scene} {...props} />;
}

export default function Scene() {
  return (
    <div className="w-full h-[1000px]">
      <Canvas orthographic camera={{zoom: 100, position: [-5, 0, 0], near: 0.1, far: 1000}}>
        <ambientLight intensity={8} />
        <directionalLight intensity={50} position={[-7.5, 9, 7.5]} />
        
        <Model scale={1.5} />

      </Canvas>
    </div>
  );
}