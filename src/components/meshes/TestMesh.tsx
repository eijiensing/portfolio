import { useFrame } from '@react-three/fiber';
import * as React from 'react';

export interface ITestMeshProps {
}

export function TestMesh (props: ITestMeshProps) {
  const ref = React.useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01, ref.current.rotation.z += 0.01))
  return (
    <mesh
        ref={ref}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
}
