import { ISensor } from "../sensors/ISensor";

export interface SensorFactory {
  /** Crée un capteur de type caméra */
  createCamera?(location: string): ISensor;

  /** Crée un capteur de type température */
  createTemperatureSensor?(location: string, threshold: number): ISensor;

  /** Crée un capteur de type thermique */
  createThermalSensor?(position: string): ISensor;
}
