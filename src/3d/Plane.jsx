import React from "react";
import { DoubleSide } from "three";

export default function Plane(props) {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color={"#233249"} side={DoubleSide} />
    </mesh>
  );
}
