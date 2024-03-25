import { Html } from "@react-three/drei";
import { logos } from "../../images/images";
import { useState } from "react";
import { cv } from "../../assets/projects";

const {PI} = Math;

interface Props{
  hover: Boolean
}

function Cv(props:Props) {
  const {hover} = props;

  return (
    <Html
      occlude
      transform
      position={[0.397,-0.02,0.28]}
      rotation={[PI/2,0,-PI/2]}
      distanceFactor={1}
      as='div'
      className='curriculum'
    >
      <img
        onClick={(e)=>{if(e.altKey) window.open(cv, '_blank')}}
        style={{opacity: hover ? '0.1' : '1'}}
        src={logos.cv} alt="cv image" />
    </Html>
  );
}

export default Cv;