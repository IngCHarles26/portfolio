import { useGLTF } from '@react-three/drei'

const {PI} = Math;

export function TrompetObj() {
  const { nodes, materials } = useGLTF('/trumpet.glb')
  return (
    <group  dispose={null}
    position={[9.5,3,-4.5]}  
    rotation={[0,PI/2,0]}
    scale={[4,4,4]}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.ringhole.geometry}
        material={materials['Material.002']}
        position={[0.097, -0.016, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['5th'].geometry}
        material={materials['Material.002']}
        position={[0.015, 0.01, -0.019]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['4th'].geometry}
        material={materials['Material.002']}
        position={[0, -0.034, 0.015]}
        rotation={[0, Math.PI / 4, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['3RD'].geometry}
        material={materials['Material.002']}
        position={[-0.035, -0.037, 0.01]}
        rotation={[-Math.PI / 6, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['2ND'].geometry}
        material={materials['Material.002']}
        position={[0.138, -0.037, -0.003]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['1ST'].geometry}
        material={materials['Material.002']}
        position={[0.15, -0.004, 0.019]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.ring.geometry}
        material={materials['Material.002']}
        position={[0.045, -0.006, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.ring_2.geometry}
        material={materials['Material.003']}
        position={[-0.053, -0.009, -0.001]}
        rotation={[1.167, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['1ST2'].geometry}
        material={materials['Material.002']}
        position={[0.176, -0.004, 0.019]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['3RD001'].geometry}
        material={materials['Material.002']}
        position={[-0.085, -0.037, 0.011]}
        rotation={[-Math.PI / 6, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['4th001'].geometry}
        material={materials['Material.002']}
        position={[0, -0.034, 0.015]}
        rotation={[0, Math.PI / 4, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes['2ND001'].geometry}
        material={materials['Material.002']}
        position={[0.138, -0.037, -0.003]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.INBETWEEN12.geometry}
        material={materials['Material.002']}
        position={[0.163, -0.004, 0.019]}
        rotation={[0.07, 0, 0]}
        scale={[1, 0.018, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Object.geometry}
        material={materials['Material.002']}
        position={[0.162, -0.032, 0.017]}
        scale={[0.44, 0.054, 0.44]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.002']}
        position={[-0.129, 0.029, -0.001]}
        rotation={[Math.PI / 2, 0, Math.PI / 6]}
        scale={[1, 0.015, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder007.geometry}
        material={materials['Material.002']}
        position={[0.125, 0.029, -0.001]}
        rotation={[Math.PI / 2, 0, Math.PI / 6]}
        scale={[1, 0.015, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.002']}
        position={[0.097, -0.01, -0.003]}
        scale={[0.413, 0.154, 0.413]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder009.geometry}
        material={materials['Material.002']}
        position={[0.085, -0.044, 0.007]}
        rotation={[-0.325, 0, 0]}
        scale={0.372}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.ring_2001.geometry}
        material={materials['Material.002']}
        position={[0.053, 0.046, 0.021]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder010.geometry}
        material={materials['Material.003']}
        position={[-0.194, 0.029, 0.021]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Plane001.geometry}
        material={materials['Material.002']}
        position={[-0.053, -0.022, 0.006]}
        scale={[0.828, 0.828, 0.495]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Valve_1.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Valve_1001.geometry}
        material={materials['Material.002']}
        position={[0.024, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Valve_1002.geometry}
        material={materials['Material.002']}
        position={[-0.024, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.VALVE_1_BOTTOM_SCREW001.geometry}
        material={materials['Material.003']}
        position={[0.024, 0.004, 0]}
        scale={[1.094, 1, 1.094]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.VALVE_1_TOP_SCREW001.geometry}
        material={materials['Material.003']}
        position={[0.024, -0.004, 0]}
        scale={[1.102, 1, 1.102]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.003']}
        position={[0, 0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.002']}
        position={[0, 0.009, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.003']}
        position={[0.024, 0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.002']}
        position={[0.024, 0.009, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder004.geometry}
        material={materials['Material.003']}
        position={[-0.024, 0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.002']}
        position={[-0.024, 0.009, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.VALVE_1_BOTTOM_SCREW003.geometry}
        material={materials['Material.003']}
        position={[0, 0.004, 0]}
        scale={[1.094, 1, 1.094]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.VALVE_1_BOTTOM_SCREW004.geometry}
        material={materials['Material.003']}
        position={[-0.024, 0.004, 0]}
        scale={[1.094, 1, 1.094]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.VALVE_1_TOP_SCREW003.geometry}
        material={materials['Material.003']}
        position={[0, -0.004, 0]}
        scale={[1.102, 1, 1.102]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.VALVE_1_TOP_SCREW004.geometry}
        material={materials['Material.003']}
        position={[-0.024, -0.004, 0]}
        scale={[1.102, 1, 1.102]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween10.geometry}
        material={materials['Material.003']}
        position={[0, 0.029, 0.013]}
        rotation={[1.552, 0, 0]}
        scale={[1, 0.5, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween2.geometry}
        material={materials['Material.002']}
        position={[-0.011, -0.055, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1.315, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween3.geometry}
        material={materials['Material.002']}
        position={[0.012, -0.055, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1.315, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween4.geometry}
        material={materials['Material.002']}
        position={[0.012, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1.315, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween5.geometry}
        material={materials['Material.002']}
        position={[-0.012, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 1.315, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween1.geometry}
        material={materials['Material.002']}
        position={[-0.069, -0.045, 0.004]}
        rotation={[1.626, 0, Math.PI]}
        scale={[1.191, 2.836, 1.191]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween9.geometry}
        material={materials['Material.002']}
        position={[-0.012, -0.032, -0.002]}
        rotation={[0, -0.402, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween8.geometry}
        material={materials['Material.002']}
        position={[0.012, -0.044, -0.002]}
        rotation={[0, -0.402, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween6.geometry}
        material={materials['Material.002']}
        position={[0.106, -0.036, -0.003]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.24, 1.964, 1.24]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween7.geometry}
        material={materials['Material.002']}
        position={[0.085, -0.042, 0.007]}
        rotation={[-2.019, 0, -Math.PI]}
        scale={[1.139, 1.964, 1.139]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.inbetween11.geometry}
        material={materials['Material.003']}
        position={[0, 0.029, -0.012]}
        rotation={[1.552, 0, 0]}
        scale={[1, 0.5, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.WATER_KEY_BODY.geometry}
        material={materials['Material.002']}
        position={[0.199, -0.033, 0.02]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.722, 0.918, 0.722]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.WATER_KEY_SCREW.geometry}
        material={materials['Material.002']}
        position={[0.199, -0.033, 0.02]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.722, 0.918, 0.722]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.WATER_KEY_BUTTON.geometry}
        material={materials['Material.002']}
        position={[0.199, -0.033, 0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.722, 0.808, 0.722]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.WATER_KEY_BODY001.geometry}
        material={materials['Material.002']}
        position={[0.163, -0.046, -0.003]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.722, 0.918, 0.722]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.WATER_KEY_SCREW001.geometry}
        material={materials['Material.002']}
        position={[0.163, -0.046, -0.003]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.722, 0.918, 0.722]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.WATER_KEY_BUTTON001.geometry}
        material={materials['Material.002']}
        position={[0.163, -0.046, -0.006]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.722, 0.808, 0.722]}
      />
    </group>
  )
}

useGLTF.preload('/trumpet.glb')
