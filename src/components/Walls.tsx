import { walls } from "../assets/ambientSize";
import Wall from "./Wall";
import Message from "./screen/Message";
import Projects from "./screen/Projects";
import TechsPort from "./screen/TechsPort";

const contents = [
  //left
  <Projects /> ,
  //back
  ,
  //front
  <TechsPort />,
  //right
  <Message />,
]

function Walls() {

  return ( 
    <>
    {
      walls.map((el,ix)=>
        <Wall
          key={'wall_'+ix}
          position={el.position}
          rotation={el.rotation}
          size={el.size}
          color={el.color}
          content={contents[ix]}
        />)
    }
    </>
  );
}

export default Walls;