import { extend, Object3DNode, useFrame } from '@react-three/fiber';
import * as React from 'react';
import { Color, Material, MeshPhongMaterial, Vector3 } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import Montserrat from '../../fonts/MontserratExtraBold.json';
import NexaBold from '../../fonts/NexaBold.json';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
        }
    }
}

const font = new FontLoader().parse(NexaBold);

export interface ITextMeshProps {
    text: string;
}

const material = new MeshPhongMaterial({
    color: "Lime",    // red (can also use a CSS color string here)
    flatShading: true,
  });

export function TextMesh (props: ITextMeshProps) {
    extend({TextGeometry});
    return (
        <mesh material={material} position={[-8,-1,0]}>
            <textGeometry args={[props.text, {font, size:2, height: 1}]}/>
        </mesh>
    );
}
