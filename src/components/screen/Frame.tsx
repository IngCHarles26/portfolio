import { Html, useGLTF } from '@react-three/drei'
import { infoProjects } from '../../assets/projects';
import { useState } from 'react';

const {PI} = Math;

export function Frame(props:infoProjects) {
  const [isHovered, setIsHovered] = useState(false);

  const {position,project,image} = props;
  const { nodes, materials } = useGLTF('/frame.glb')
  return (
    <group  
      dispose={null}
      rotation={[PI/6,0,0]}
      position={position}
      onPointerMove={(e)=>{e.stopPropagation(); setIsHovered(true)}} 
      onPointerOut={(e)=>{e.stopPropagation();setIsHovered(false)}}
      onClick={(e)=>{if(e.altKey) {isHovered && window.open(project, '_blank')}}}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Plane001.geometry}
        material={materials['Material.002']}
        position={[0, 1.074, 0.043]}
        rotation={[Math.PI / 3, 0, 0]}
        scale={[0.896, 0.935, 1.113]}
      >


        <Html
          occlude
          transform
          position={[-0.96,0.02,-0.95]}
          rotation={[-PI/2,0,0]}
          distanceFactor={1}
          as="div"
          className="face-project"
          style={{opacity: isHovered ? '0.5' : '1'}}
        >
          <img src={image} alt="project-img" />

        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Plane.geometry}
        material={materials['Brazilian wood - Angelim Pedra']}
        position={[0, 1.025, -0.043]}
        rotation={[Math.PI / 3, 0, 0]}
        scale={[0.958, 1, 1.19]}
      />
    </group>
  )
}

useGLTF.preload('/frame.glb')