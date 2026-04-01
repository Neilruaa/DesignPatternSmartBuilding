import { ISensor } from "./ISensor";
import { ThermalSensorB } from "./ThermalSensorB";

export class ThermalSensorBAdapter implements ISensor {
  public readonly name: string;
  public readonly location: string;
  private readonly sensor: ThermalSensorB;

  constructor(position: string) {
    this.sensor = new ThermalSensorB(position);
    this.location = position;
    this.name = `ThermalSensorB-${position}`;
  }

  /**
   * Adapte l'interface : traduit onDetect() vers triggerHeatSignature()
   * et convertit le JSON en message string.
   */
  onDetect(callback: (message: string) => void): void {
    // On appelle l'API originale du capteur B
    this.sensor.triggerHeatSignature((data) => {
      // On convertit le JSON en un message string compatible
      const message = `[${data.sensor}] Détection ${data.detection} à ${data.date} dans ${this.location}`;
      callback(message);
    });
  }
}
