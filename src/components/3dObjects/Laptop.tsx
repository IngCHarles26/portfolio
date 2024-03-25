import { useGLTF } from '@react-three/drei'
import Cv from '../screen/Cv';
import { useState } from 'react';

const {PI} = Math;
const linkCv = 'https://docs.google.com/document/d/19ANMRxSwI_qqS2ZHB_Nt2mtbKhPrPSihQ8pMjf2L0cs/edit';

export function LaptopObj() {
const [isHovered, setIsHovered] = useState(false);

  const { nodes, materials } = useGLTF('/Laptop.glb')
  return (
    <group  dispose={null}
      position={[8.7,1.2,0.5]}  
      rotation={[0,PI,0]}
      scale={[1.5,1.5,1.5]}
      onPointerMove={(e)=>{e.stopPropagation(); setIsHovered(true)}} 
      onPointerOut={(e)=>{e.stopPropagation();setIsHovered(false)}}
      onClick={(e)=>{if(e.altKey) {isHovered && window.open(linkCv, '_blank')}}}
    >
      <group position={[0, 0.01, 0]}>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Cube001.geometry}
          material={materials.LaptopBody}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Cube001_1.geometry}
          material={materials.Laptop_TouchPad}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Cube001_2.geometry}
          material={materials.LaptopLight}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Cube001_3.geometry}
          material={materials.LaptopButtons}
        />
      </group>
      <group position={[-0.258, 0.016, 0]} rotation={[0, 0, 1.727]}>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Cube003.geometry}
          material={materials.LaptopBody}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Cube003_1.geometry}
          material={materials.LaptopScreen}
        >
          <Cv hover={isHovered}/>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.LaptopConnecter.geometry}
        material={materials.LaptopBody}
        position={[-0.257, 0.018, -0.169]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.004, 0.013, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.LaptopConnecter001.geometry}
        material={materials.LaptopBody}
        position={[-0.257, 0.018, 0.149]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.004, 0.013, 0.004]}
      />
    </group>
  )
}

useGLTF.preload('/Laptop.glb')