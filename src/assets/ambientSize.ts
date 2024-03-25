import { Triplet } from "@react-three/cannon";
import { textures } from "../images/textures";
import { Texture } from "three";

export interface wallProps{
  position?: Triplet,
  rotation: Triplet,
  size: [number,number],
  texture?: Texture,
  color?: string,
  positionTexture?: Triplet,
  positionPlane?: Triplet,
  content?: JSX.Element,
}

const {PI} = Math;
const size1 = 20;
const heighChar = 0;

const PI2 = PI/2;
const size2 = size1/2;
const size4 = size1/4;

const zGround = -size1 / 20;
const zSize = size4 + zGround;

export const initialUserPos:Triplet = [0,3-zGround,0]

export const ground:wallProps = {
  positionTexture: [ 0      , zGround      , 0    ],
  positionPlane: [ 0      , zGround+heighChar     , 0    ],
  rotation: [-PI2    , 0       , 0    ],
  size:     [ size1  , size1   ],
  texture:  textures.grass,
}

export const roof:wallProps = {
  positionTexture: [ 0      , size2-1     , 0    ],
  positionPlane: [ 0      , size2     , 0    ],
  rotation: [PI2    , 0       , 0    ],
  size:     [ size1  , size1   ],
  texture:  textures.wood,
}

export const walls:wallProps[] = [
  // LEFT
  {
    position: [-size2    , zSize    , 0    ],
    rotation: [ 0        , PI2        , 0    ],
    size:     [ size1    , size2      ],
    color:    'red'
  },
  // BACK
  {
    position: [ 0    , zSize    , size2    ],
    rotation: [ 0        ,  PI       , 0    ],
    size:     [ size1    , size2      ],
    color:    'yellow'
  },
  // FRONT
  {
    position: [ 0    , zSize   , -size2    ],
    rotation: [ 0        , 2*PI       , 0    ],
    size:     [ size1    , size2      ],
    color:    'pink'
  },
  // RIGHT
  {
    position: [ size2    , zSize    , 0 ],
    rotation: [ 0        , -PI/2        , 0      ],
    size:     [ size1    , size2      ],
    color:    'blue'
  },

]

