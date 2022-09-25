import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import TopContent from './top_content'
import SocialMedia from './social_media'
import AboutMe from './about_me'

import ThreejsModel from './threejs_model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='flex flex-col items-center'>
    <Header/>
    <TopContent/>
    <AboutMe/>
    <Canvas className='canvas'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5}></ambientLight>
      <directionalLight position={[-2, 5, 2]} intensity={1}></directionalLight>
      <ThreejsModel/>
    </Canvas>
  </div>
  
)
