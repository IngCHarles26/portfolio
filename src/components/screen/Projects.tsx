import { Html } from "@react-three/drei";
import { projectsList } from "../../assets/projects";
import { Frame } from "./Frame";

function Projects() {


  return (
    <>
      <Html
        as="div"
        occlude
        transform
        // position={[-0.96,0.02,-0.95]}
        // rotation={[-PI/2,0,0]}
        position={[0,3,0.1]}
        rotation={[0,0,0]}
        distanceFactor={3}
        className="title-projects"
      >
        <h1>PROJECTS</h1>
      </Html>
      {
        projectsList.map((el,ix)=>(
          <Frame 
            key={'frame_'+ix} 
            position={el.position} 
            project={el.project}
            image={el.image}  
          />
        ))
      }
    </>
  );
}

export default Projects;