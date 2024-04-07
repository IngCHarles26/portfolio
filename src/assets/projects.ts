import { Triplet } from "@react-three/cannon"
import { projects } from "../images/images";

const posz = -0.5;
const posy = 2;
const posx = 2;

export interface infoProjects{
  position: Triplet,
  project: string,
  image?: string,
}



export const projectsList:infoProjects[] = [
  {
    position: [posx,-posy,posz],
    project: 'https://rick-morty-sepia-zeta.vercel.app',
    image: projects[0]
  },
  {
    position: [-posx,-posy,posz],
    project: 'https://mines-weeper-omega.vercel.app',
    image: projects[1]
  },
]

export const cv = 'https://docs.google.com/document/d/19ANMRxSwI_qqS2ZHB_Nt2mtbKhPrPSihQ8pMjf2L0cs/edit';