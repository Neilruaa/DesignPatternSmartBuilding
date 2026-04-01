import { ISensor } from "./ISensor";

export class TemperatureSensorA implements ISensor {
  public readonly name: string;
  public readonly location: string;
  private readonly threshold: number;

  constructor(location: string, threshold: number) {
    this.location = location;
    this.threshold = threshold;
    this.name = `TemperatureSensorA-${location}`;
  }

  /**
   * Simule une détection de température au-dessus du seuil
   * et appelle le callback avec un message d'alerte descriptif.
   */
  onDetect(callback: (message: string) => void): void {
    // Simule une température aléatoire au-dessus du threshold pour la démo
    const simulatedTemp = this.threshold + Math.round(Math.random() * 10);
    const message = `[${this.name}] Température de ${simulatedTemp}°C détectée dans ${this.location} (seuil: ${this.threshold}°C)`;
    callback(message);
  }
}
