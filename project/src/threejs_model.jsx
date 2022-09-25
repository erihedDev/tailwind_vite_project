import React, { useEffect } from 'react'
import './index.css'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
    const gltf = useLoader(GLTFLoader, './portal2/scene.gltf')
    const pi = Math.PI;
    useEffect(() => {
        gltf.scene.scale.set(6, 6, 6)
        gltf.scene.rotateY((pi / 180) * -90)
    })

    return (
        <primitive object={gltf.scene}/>
    )
}

export default Model