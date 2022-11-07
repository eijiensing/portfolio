import * as React from 'react';
import { Canvas } from '@react-three/fiber'

export interface IMyCanvasProps {
  children?: JSX.Element | JSX.Element[];
}

export function MyCanvas (props: IMyCanvasProps) {
  return (
    <Canvas>
      {props.children}
    </Canvas>
  );
}
