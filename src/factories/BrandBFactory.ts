import { SensorFactory } from "./SensorFactory";
import { ISensor } from "../sensors/ISensor";
import { ThermalSensorBAdapter } from "../sensors/ThermalSensorBAdapter";

export class BrandBFactory implements SensorFactory {
  createThermalSensor(position: string): ISensor {
    return new ThermalSensorBAdapter(position);
  }
}
