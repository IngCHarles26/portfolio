import { Html } from "@react-three/drei";
import { back, front, languages } from "../../images/images";

const {PI} = Math;

function Technologies() {
  return (
    <Html
      occlude
      transform
      position={[-1,0.96,-0.98]}
      rotation={[0,-PI/2,0]}
      distanceFactor={1}
      as='div'
      className='technologies'
    >
      <h1>TECH SKILLS</h1>
      <div className="sectionContainer">
        <div className="front-tech">
          <h2>FRONT END</h2>
          <div>
            {
              front.map((el,ix)=>(<img src={el} alt={el+'imgTech'} key={ix+'techImg'}/>))
            }
          </div>
        </div>
        <div className="lan-tech">
          <h2>LANGUAGES</h2>
          <img src={languages[0]} alt="jsLanguage" />
          <div>
            {
              languages.slice(1).map((el,ix)=>(<img key={ix+'frontImg'} alt="front img" src={el} />))
            }
          </div>
        </div>
        <div className="back-tech">
          <h2>BACK END</h2>
          <div>
            {
              back.map((el,ix)=>(<img src={el} alt={el+'imgTech'} key={ix+'techImg'}/>))
            }
          </div>
        </div>
      </div>
    </Html>
  );
}

export default Technologies;