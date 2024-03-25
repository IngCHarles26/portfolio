import { useGLTF } from '@react-three/drei'

const {PI} = Math;


export function BikeObj() {
  const { nodes, materials } = useGLTF('/bicycle.glb')
  return (
    <group dispose={null}
      position={[8.8,-1.1,-4.5]}  
      rotation={[PI/12,PI/3,-PI/10]}
      scale={[0.7,0.7,0.7]}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Bicycle.geometry}
        material={materials['Материал.008']}
        rotation={[-Math.PI, 1.064, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Gear.geometry}
          material={materials['Материал.011']}
          position={[-0.145, 1.422, -2.129]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.174}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Gear002.geometry}
          material={materials.железо}
          position={[-0.131, 1.126, -0.489]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.316, 0.111, 0.316]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Vert001.geometry}
          material={materials['Материал.008']}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Vert002.geometry}
          material={materials['Материал.029']}
          position={[0, 3.407, 0.977]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Vert003.geometry}
          material={materials.железо}
          position={[0, 3.407, 0.977]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Vert004.geometry}
          material={materials.железо}
          position={[0, 3.494, -1.131]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Vert005.geometry}
          material={materials.провод}
          position={[0.396, 3.899, 1.649]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Vert006.geometry}
          material={materials.провод}
          position={[0.068, 2.775, 1.283]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность.geometry}
          material={materials.железо}
          position={[0.082, 1.416, 1.79]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.347}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность001.geometry}
          material={materials.железо}
          position={[-0.087, 1.416, 1.79]}
          rotation={[-2.889, 0.017, -1.564]}
          scale={[-1.176, -1.01, -1.176]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность002.geometry}
          material={materials.железо}
          position={[0.082, 1.416, -2.135]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.347}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность003.geometry}
          material={materials.железо}
          position={[-0.069, 1.416, -2.135]}
          rotation={[-2.889, 0.017, -1.564]}
          scale={[-1.176, -0.961, -1.176]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность004.geometry}
          material={materials.железо}
          position={[-0.121, 1.126, -0.489]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.424}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность005.geometry}
          material={materials.железо}
          position={[-0.123, 1.421, -2.132]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.25}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность007.geometry}
          material={materials['Материал.015']}
          position={[-0.103, 1.126, -0.489]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.461}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность008.geometry}
          material={materials['Материал.006']}
          position={[0.082, 1.416, 1.79]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.347}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Окружность009.geometry}
          material={materials['Материал.006']}
          position={[0.082, 1.416, -2.135]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.347}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость.geometry}
          material={materials['Материал.025']}
          position={[-0.03, 3.704, -1.08]}
          scale={0.51}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость001.geometry}
          material={materials.провод}
          position={[0.399, 3.667, 1.617]}
          rotation={[0.726, 0, 0]}
          scale={[0.029, 0.091, 0.067]}
        />
        <group
          position={[-0.287, 1.783, -0.384]}
          rotation={[0.175, 0, Math.PI]}
          scale={[-0.175, -0.113, -0.113]}>
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Плоскость001_1.geometry}
            material={materials.железо}
          />
          <mesh
            castShadow
            receiveShadow
            //@ts-ignore
            geometry={nodes.Плоскость001_2.geometry}
            material={materials['Материал.014']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость003.geometry}
          material={materials['Материал.015']}
          position={[0, 2.775, 1.217]}
          rotation={[-0.351, 0, 0]}
          scale={0.039}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость004.geometry}
          material={materials['Материал.015']}
          position={[0.003, 2.71, -1.537]}
          rotation={[0.445, 0, 0]}
          scale={[0.046, 0.052, 0.069]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость005.geometry}
          material={materials.железо}
          position={[0.003, 2.701, -1.543]}
          rotation={[0.402, 0, 0]}
          scale={0.019}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость006.geometry}
          material={materials['Материал.002']}
          position={[0, 0.871, 1.962]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.081, 0.081, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость007.geometry}
          material={materials['Материал.002']}
          position={[0.035, 1.739, -1.34]}
          rotation={[-0.784, 0.061, -1.721]}
          scale={[0.081, 0.081, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость008.geometry}
          material={materials['Материал.004']}
          position={[0.003, 2.799, -1.519]}
          rotation={[-0.874, 0.344, 2.959]}
          scale={[0.081, 0.081, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Плоскость009.geometry}
          material={materials['Материал.003']}
          position={[0.002, 3.283, 1.102]}
          rotation={[-1.633, 0.318, 3.015]}
          scale={[0.068, 0.068, 0.109]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Цилиндр.geometry}
          material={materials.железо}
          position={[0.082, 1.416, 1.79]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.135}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Цилиндр001.geometry}
          material={materials.железо}
          position={[0.082, 1.416, -2.135]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.135}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Цилиндр002.geometry}
          material={materials['Материал.015']}
          position={[0, 0.312, 2.08]}
          rotation={[-0.237, -0.05, 0.011]}
          scale={[-0.008, -0.056, -0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Цилиндр003.geometry}
          material={materials['Материал.015']}
          position={[-0.003, 2.308, -2.844]}
          rotation={[2.499, -0.05, 0.011]}
          scale={[-0.008, -0.056, -0.008]}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Цилиндр004.geometry}
          material={materials.железо}
          position={[-0.086, 1.416, -2.135]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
          scale={-0.133}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.Цилиндр005.geometry}
          material={materials.железо}
          position={[0.4, 3.864, 1.674]}
          rotation={[-0.645, 0, 0]}
          scale={[-0.019, -0.041, -0.019]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/bicycle.glb')