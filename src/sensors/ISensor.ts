export interface ISensor {
  /** Nom du capteur (ex: "CameraA-Hall", "ThermalB-Room3") */
  readonly name: string;

  /** Emplacement du capteur (nom ou id de la pièce) */
  readonly location: string;

  /**
   * Enregistre un callback qui sera appelé quand le capteur
   * détecte quelque chose.
   * @param callback - Fonction recevant un message d'alerte (string)
   */
  onDetect(callback: (message: string) => void): void;
}
