import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useStorage } from "../hooks/useStorage";
import { useEffect } from "react";

function Camera() {
  const {camera,gl} = useThree();

  //@ts-ignore
  const newPos = useStorage((st:ReturnType<typeof useStorage>)=>st.position);

  useEffect(()=>{
    // console.log(newPos)
  },[newPos])


  return (
    <PointerLockControls args={[camera,gl.domElement]} />
  );
}

export default Camera;