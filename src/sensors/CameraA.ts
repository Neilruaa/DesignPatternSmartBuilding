import { ISensor } from "./ISensor";

export class CameraA implements ISensor {
  public readonly name: string;
  public readonly location: string;

  constructor(location: string) {
    this.location = location;
    this.name = `CameraA-${location}`;
  }

  /**
   * Simule une détection de mouvement et appelle le callback
   * avec un message d'alerte descriptif.
   */
  onDetect(callback: (message: string) => void): void {
    const message = `[${this.name}] Mouvement détecté dans ${this.location}`;
    callback(message);
  }
}
