import * as React from "react";
import { TestMesh } from "./components/meshes/TestMesh";
import { TextMesh } from "./components/meshes/TextMesh";
import { MyCanvas } from "./components/MyCanvas";
import {CameraController} from './components/CameraController';
export interface IAppProps {}

export function App(props: IAppProps) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-lime-900 via-emerald-800 to-black">
      <MyCanvas>
        <CameraController/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <TextMesh text="EIJI_ENSING"/>
      </MyCanvas>
    </div>
  );
}
