import React, { Suspense, useRef, useState, useEffect } from 'react'
import { AnimationMixer } from "three"
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Vinay3D from '../assets/models/vinay3d.glb';

function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" transparent opacity={0.5} />
        </mesh>
    )
}

function Asset({ scale = 1.0, ...props }) {
    const group = useRef();
    const { scene, animations } = useLoader(GLTFLoader, Vinay3D);
    const [mixer] = useState(() => new AnimationMixer(scene));

    useEffect(() => {
        void mixer.clipAction(animations[1], group.current).play()
    }, [animations, mixer]);

    useFrame((states, delta) => {
        mixer.update(delta * 0.5)
        const s = 35;
        group.current.scale.x = s;
        group.current.scale.y = s;
        group.current.scale.z = s;
    });

    return (
        <primitive {...props} object={scene} rotation={[0.1, -0.3, 0]} position={[0, -20,]} ref={group} />
    );
}
function Model() {

    return (
        <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[300, 300, 400]} />
            <Suspense fallback={<Box />}><Asset /></Suspense>
        </Canvas>

    );
}

export default Model;