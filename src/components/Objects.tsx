import { BikeObj } from "./3dObjects/Bike";
import { DeskObj } from "./3dObjects/Desk";
import { HelmetObj } from "./3dObjects/Helmet";
import { LaptopObj } from "./3dObjects/Laptop";
import { RobotObj } from "./3dObjects/Robot";
import { TrompetObj } from "./3dObjects/Trumpet";

function Objects() {
  return (
    <>
      <BikeObj />
      <DeskObj />
      <RobotObj />
      <HelmetObj />
      <LaptopObj />
      <TrompetObj />
    </>
  );
}

export default Objects;