import { useGLTF } from '@react-three/drei'

const {PI} = Math;

export function DeskObj() {
  const { nodes, materials } = useGLTF('/PC-desk.glb')
  return (
    <group dispose={null}
      position={[8.5,-1,0.5]}
      rotation={[0,-PI/2,0]}
      scale={[2.5,2.5,2.5]}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.PC_desk_bake.geometry}
        material={materials.Pc_desk}
      />
    </group>
  )
}

useGLTF.preload('/PC-desk.glb')