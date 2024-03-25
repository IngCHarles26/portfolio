import { Html } from "@react-three/drei";
import { message } from "../../assets/about";
import { useState } from "react";

const {PI} = Math;


const {es,en} = message;
// let typeMessage = true;

function Message() {
  const [isHovered, setIsHovered] = useState(true);
  const [typeMessage, setTypeMessage] = useState(true);

  return (
    <mesh
      position={[0.6,1,0.1]}
      onPointerMove={(e)=>{e.stopPropagation(); setIsHovered(true)}} 
      onPointerOut={(e)=>{e.stopPropagation();setIsHovered(false)}}
      onClick={(e)=>{if(e.altKey && isHovered) {setTypeMessage(!typeMessage)} }}
    >
      <planeGeometry args={[9,4]} />
      {/* <meshBasicMaterial color={'#267251'} opacity={0.3}/> */}
      <meshPhongMaterial transparent color="red" opacity={0} />
      <Html
        occlude
        transform
        position={[-4.2,1.7,0.1]}
        rotation={[0,0,0]}
        distanceFactor={1}
        as="div"
        className="face-about"
        >
        <p
          style={{opacity: isHovered ? '0.2' : '1'}}
        >
          {
            typeMessage ? en : es
          }
        </p>
      </Html>
    </mesh>
  );
}

export default Message;