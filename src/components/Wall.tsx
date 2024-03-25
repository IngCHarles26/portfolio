import { usePlane } from "@react-three/cannon";
import { wallProps } from "../assets/ambientSize";
import { textures } from "../images/textures";

function Wall(props:wallProps) {
  const {position,rotation,size,content} = props;

  usePlane(()=>({
    rotation,
    position,
  }))

  return ( 
    <mesh rotation={rotation} position={position}>
      <planeGeometry attach={'geometry'} args={[size[0],size[1]]} />
      <meshStandardMaterial attach={'material'} map={textures.glass}/>
      {content}
    </mesh>
  );
}

export default Wall;