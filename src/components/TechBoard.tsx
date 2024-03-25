import { useGLTF } from '@react-three/drei'
import Technologies from './screen/Technologies';

const {PI} = Math;


export function TechBoard() {
  const { nodes, materials } = useGLTF('/BlackBoard.glb')
  return (
    <group dispose={null}>
      <group 
        rotation={[0,-PI/2,0]}
        position={[0,4,9.95]}
        scale={[0.05, 3, 7]}
        >

        <mesh castShadow receiveShadow
          //@ts-ignore
          geometry={nodes.Kostka018.geometry}
          material={materials['Wood.001']}
        />

        <mesh castShadow receiveShadow
          //@ts-ignore
          geometry={nodes.Kostka018_1.geometry}
          material={materials.Board}
        >
          
          <Technologies />

        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/BlackBoard.glb')
