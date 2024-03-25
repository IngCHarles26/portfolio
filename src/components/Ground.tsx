import { usePlane } from "@react-three/cannon";
import { ground } from "../assets/ambientSize";

function Ground() {
  const {rotation,positionPlane,positionTexture,size,texture} = ground;
  
  usePlane(()=>({
    rotation,
    position:positionPlane,
  }))


  return (
    <mesh rotation={rotation} position={positionTexture}>
      <planeGeometry attach={'geometry'} args={[size[0],size[1]]}/>
      <meshStandardMaterial attach={'material'} map={texture}/>
    </mesh>
  );
}

export default Ground;