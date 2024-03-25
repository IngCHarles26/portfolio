import './screen.css'
import { logos } from '../../images/images';
import { Html } from "@react-three/drei";

const {vite,react,css,trhee,ts,peru} = logos;

function TechsPort() {

  return (
    <Html
      occlude
      transform
      position={[-9,4,0.01]}
      distanceFactor={2}
      as='div'
      className='techPort'
    >
      <img src={trhee} alt="three-logo" />
      <h1>CarlosCo_Dev</h1>
      <img className='peru' src={peru} alt="peru-logo" />
      <h2>Full Stack Developer</h2>
      <h3>PortFolio</h3>
      <div className='logos-tech'>
        <img src={vite} alt="vite-logo" />
        <img src={react} alt="react-logo" />
        <img src={css} alt="css-logo" />
        <img src={ts} alt="ts-logo" />
      </div>

    </Html>
  );
}

export default TechsPort;

