import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { OrbitControls, Plane, useTexture } from '@react-three/drei'
import './Hero.css';
import textureImage from '/src/assets/models/metal.jpg';
import * as THREE from 'three';

function Scene() {

  const obj = useLoader(OBJLoader, 'src/assets/models/P2.2.obj')
  // console.log(obj.children[0].material);

  const texture = useTexture(textureImage);
  // console.log(texture);

  console.log(obj.children[0]);
  var mesh_pong_mat = new THREE.MeshPhongMaterial({
    // map: texture,
    // displacementMap: texture,
    // aoMap: texture,
    // roughnessMap: texture,
    // metalnessMap: texture,
    // normalMap: texture,
    // alphaMap: texture
  });
  obj.children[0].material = mesh_pong_mat;

  obj.position.x = 20;
  obj.position.y = 10;

  return(
    <primitive object={obj}>
    </primitive>
  )  
}

export default function Hero() {
  return (
    <div id="canvas-container">
      <Canvas camera={{fov: 40, position: [70,80,-100]}}>
        <Scene/>
        {/* <OrbitControls/> */}
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[20, 20, 5]} />
      </Canvas>
    </div>
  )
}

// const root = createRoot(document.getElementById('root'));
// root.render(<Hero />);