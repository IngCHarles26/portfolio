import { roof } from "../assets/ambientSize";

function Roof() {
  const {rotation,positionTexture,size,texture} = roof;

  return (
    <mesh rotation={rotation} position={positionTexture}>
      <planeGeometry attach={'geometry'} args={[size[0],size[1]]}/>
      <meshStandardMaterial attach={'material'} map={texture} opacity={0.75} transparent/>
    </mesh>
  );
}

export default Roof;