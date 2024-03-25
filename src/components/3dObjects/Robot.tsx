import { useGLTF } from '@react-three/drei'

export function RobotObj() {
  const { nodes, materials } = useGLTF('/robot-arm.glb')
  return (
    <group dispose={null}
      position={[8.2,-1,6.5]}
      rotation={[0,0,0]}
      scale={[2.5,2.5,2.5]}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.robot_arm_base.geometry}
        material={materials['Robot arm']}
        position={[-0.05, 0.14, 0]}
        scale={1.442}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.robot_arm.geometry}
        material={materials['Robot arm']}
        position={[-0.05, 0.14, 0]}
        scale={1.442}>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.robot_arm_large.geometry}
          material={materials['Robot arm']}
          position={[0.003, 0.487, 0.141]}
          rotation={[-2.311, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Robot_arm_2.geometry}
            material={materials['Robot arm']}
            position={[0.061, 0.778, 0.033]}
            rotation={[-2.265, 0, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              //@ts-ignore
              geometry={nodes.robot_arm_end.geometry}
              material={materials['Robot arm']}
              position={[0.004, 0.074, -1.212]}
              rotation={[0.046, -0.949, -Math.PI / 2]}>
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.Grabber.geometry}
                material={materials['Robot arm']}
                position={[0.141, 0, 0]}
                rotation={[-0.949, 0, Math.PI / 2]}
                scale={0.694}>
                <mesh
                  castShadow
                  receiveShadow
                  //@ts-ignore
                  geometry={nodes.Grabber_hand_1.geometry}
                  material={materials['Robot arm']}
                  position={[-0.049, -0.037, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  //@ts-ignore
                  geometry={nodes.Grabber_hand_2.geometry}
                  material={materials['Robot arm']}
                  position={[0.051, -0.037, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                />
              </mesh>
            </mesh>
          </mesh>
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('/robot-arm.glb')