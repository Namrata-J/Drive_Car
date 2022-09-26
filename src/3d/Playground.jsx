import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Plane from "./Plane";
import { Car } from "./Car";

export default function Playground() {
  return (
    <Canvas>
      <Car rotation={[0, -Math.PI, 0]} />
      <Plane position={[0, 0, 0]} />
      <Stars />
      <OrbitControls />
      <ambientLight color={"#ffffff"} intensity={0.5} />
      <directionalLight intensity={1.5} position={[1, 0.3, 3]} />
    </Canvas>
  );
}
