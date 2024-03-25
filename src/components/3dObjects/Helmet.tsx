import { useGLTF } from '@react-three/drei'

const {PI} = Math;

export function HelmetObj() {
  const { nodes, materials } = useGLTF('/helmet.glb')
  return (
    <group dispose={null}
      position={[10,2,4]}
      rotation={[0,PI,-PI/2]}
      scale={[0.5,0.5,0.5]}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Hard_Hat.geometry}
        material={materials['Material.001']}
        position={[0, 0.5, 0]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.908, 1, 0.836]}
      />
    </group>
  )
}

useGLTF.preload('/helmet.glb')
