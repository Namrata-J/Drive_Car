export function keyUpHandler(str, setControls) {
  switch (str) {
    case "ArrowUp":
      setControls((controls) => ({ ...controls, forward: false }));
      break;
    case "ArrowDown":
      setControls((controls) => ({ ...controls, backward: false }));
      break;
    case "ArrowLeft":
      setControls((controls) => ({ ...controls, left: false }));
      break;
    case "ArrowRight":
      setControls((controls) => ({ ...controls, right: false }));
      break;
    case "ShiftLeft":
    case "ShiftRight":
      setControls((controls) => ({ ...controls, shift: false }));
      break;
    default:
      break;
  }
}

export function keyDownHandler(str, setControls) {
  switch (str) {
    case "ArrowUp":
      setControls((controls) => ({ ...controls, forward: true }));
      break;
    case "ArrowDown":
      setControls((controls) => ({ ...controls, backward: true }));
      break;
    case "ArrowLeft":
      setControls((controls) => ({ ...controls, left: true }));
      break;
    case "ArrowRight":
      setControls((controls) => ({ ...controls, right: true }));
      break;
    case "ShiftLeft":
    case "ShiftRight":
      setControls((controls) => ({ ...controls, shift: true }));
      break;
    default:
      break;
  }
}
