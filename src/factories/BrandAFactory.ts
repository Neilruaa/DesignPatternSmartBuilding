import { SensorFactory } from "./SensorFactory";
import { ISensor } from "../sensors/ISensor";
import { CameraA } from "../sensors/CameraA";
import { TemperatureSensorA } from "../sensors/TemperatureSensorA";

export class BrandAFactory implements SensorFactory {
  createCamera(location: string): ISensor {
    return new CameraA(location);
  }

  createTemperatureSensor(location: string, threshold: number): ISensor {
    return new TemperatureSensorA(location, threshold);
  }
}
