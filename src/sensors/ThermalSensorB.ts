/** Format JSON retourné par le capteur B */
export interface ThermalData {
  sensor: string;
  detection: string;
  date: string;
}

export class ThermalSensorB {
  public readonly position: string;

  constructor(position: string) {
    this.position = position;
  }

  /**
   * Déclenche une détection de signature thermique.
   */
  triggerHeatSignature(process: (data: ThermalData) => void): void {
    const data: ThermalData = {
      sensor: `ThermalSensorB-${this.position}`,
      detection: "thermal",
      date: new Date().toISOString(),
    };
    process(data);
  }
}
