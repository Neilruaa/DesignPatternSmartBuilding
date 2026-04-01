export interface INotifier {
  /** Nom du notifier (pour identification) */
  readonly name: string;

  /**
   * Envoie une notification avec le message donné.
   * @param message - Le message d'alerte à notifier
   */
  notify(message: string): void;
}
