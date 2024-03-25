import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import Camera from "./components/Camera";
import User from "./components/User";
import Walls from "./components/Walls";
import { TechBoard } from "./components/TechBoard";
import Objects from "./components/Objects";
import Roof from "./components/Roof";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} color={'white'}/>
        <directionalLight position={[0,10,0]} color={'white'} intensity={1.3} />
        <directionalLight position={[-10,1,6]} color={'yellow'} intensity={0.1} />
        <Camera />
        <Physics>
          <User />
          <Ground />
          <Roof />
          <Walls />
          <TechBoard />
          <Objects />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <div className="instructions">
        <span><b>w a s d</b> to move </span> <br />
        <span><b>alt + click</b> to activate</span> <br />
      </div>
    </>
  );
}

export default App;