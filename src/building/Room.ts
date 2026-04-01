import { ISensor } from "../sensors/ISensor";
import { INotifier } from "../notifications/INotifier";

export class Room implements Iterable<ISensor> {
  private readonly sensors: ISensor[] = [];
  private readonly notifiers: INotifier[] = [];

  constructor(public readonly name: string) { }

  // ─── Gestion des capteurs ─────────────────────────────

  /** Ajoute un capteur à la pièce */
  addSensor(sensor: ISensor): void {
    this.sensors.push(sensor);
    console.log(`  ➕ Capteur "${sensor.name}" ajouté à la pièce "${this.name}"`);
  }

  /** Retourne le nombre de capteurs */
  get sensorCount(): number {
    return this.sensors.length;
  }

  // ─── Pattern OBSERVER (Subject) ───────────────────────

  /** Ajoute un notifier (observer) à la pièce */
  addNotifier(notifier: INotifier): void {
    this.notifiers.push(notifier);
    console.log(`  🔔 Notifier "${notifier.name}" ajouté à la pièce "${this.name}"`);
  }

  /** Retire un notifier (observer) de la pièce */
  removeNotifier(notifier: INotifier): void {
    const index = this.notifiers.indexOf(notifier);
    if (index !== -1) {
      this.notifiers.splice(index, 1);
      console.log(`  🔕 Notifier "${notifier.name}" retiré de la pièce "${this.name}"`);
    }
  }

  private notifyAll(message: string): void {
    for (const notifier of this.notifiers) {
      notifier.notify(message);
    }
  }

  activateAllSensors(): void {
    console.log(`\n🏠 Activation des capteurs de la pièce "${this.name}"...`);
    for (const sensor of this) {
      sensor.onDetect((message: string) => {
        // Quand un capteur détecte → on notifie tous les observers
        this.notifyAll(message);
      });
    }
  }

  [Symbol.iterator](): Iterator<ISensor> {
    let index = 0;
    const sensors = this.sensors;

    return {
      next(): IteratorResult<ISensor> {
        if (index < sensors.length) {
          return { value: sensors[index++], done: false };
        } else {
          return { value: undefined as any, done: true };
        }
      },
    };
  }
}
