import { useEffect, useState } from "react";
import { keyDownHandler, keyUpHandler } from "../utils/utilFuncs";

export default function useKeyControls() {
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false
  });

  useEffect(() => {
    document.addEventListener("keyup", (e) =>
      keyUpHandler(e.code, setControls)
    );

    document.addEventListener("keydown", (e) =>
      keyDownHandler(e.code, setControls)
    );
  }, []);

  return { ...controls };
}
