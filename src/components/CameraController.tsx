import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as React from "react";
import { useThree } from "@react-three/fiber";

export interface ICameraControllerProps {}

export function CameraController(props: ICameraControllerProps) {
    const { camera, gl } = useThree();
    camera.position.set(0,0,20)
    React.useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
}
