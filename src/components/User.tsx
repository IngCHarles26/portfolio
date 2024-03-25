import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeybaord } from "../hooks/useKeyboard";
import { initialUserPos } from "../assets/ambientSize";

const [velocity,forceJump] = [6,4]

function User() {
  //@ts-ignore
  const {moveBackward,moveForward,moveLeft,moveRight,jump} = useKeybaord();

  const {camera} = useThree();
  const [_,api] = useSphere(()=>({
    mass:1,
    type:'Dynamic',
    position: initialUserPos,
    args: [3]
  }));


  const pos = useRef([0,5,0]);
  const vel = useRef([0,0,0]);

  useEffect(()=>{
    api.position.subscribe(p => {pos.current = p})
  },[api.position])
  useEffect(()=>{
    api.velocity.subscribe(p => {vel.current = p})
  },[api.velocity])

  useFrame(()=>{
    camera.position.copy(
      new Vector3(
        pos.current[0],
        pos.current[1],
        pos.current[2],
      )
    )
    
    const direction = new Vector3();
    const Zvector = new Vector3(0,0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0));//
    const Xvector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0) ,0,0);//

    direction
      .subVectors(Zvector,Xvector)
      .normalize()
      .multiplyScalar(velocity)
      .applyEuler(camera.rotation)
      
    api.velocity.set(
      direction.x,
      jump && Math.abs(vel.current[1]) < 0.01 ? forceJump :vel.current[1],
      direction.z
    )

  })

  return (
    <mesh/>
  );
}

export default User;