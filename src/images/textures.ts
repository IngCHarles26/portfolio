import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import { images } from "./images";

const grass = new TextureLoader().load(images.grass);
grass.wrapS = RepeatWrapping;
grass.wrapT = RepeatWrapping;
grass.magFilter = NearestFilter;
grass.repeat.set(2,2)

const glass = new TextureLoader().load(images.glass);
glass.wrapS = RepeatWrapping;
glass.wrapT = RepeatWrapping;
glass.magFilter = NearestFilter;
glass.repeat.set(2,2)

const wood = new TextureLoader().load(images.wood);
wood.wrapS = RepeatWrapping;
wood.wrapT = RepeatWrapping;
wood.magFilter = NearestFilter;
// wood.repeat.set(50,50)


export const textures = {
  grass,glass,wood
}