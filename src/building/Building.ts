import { Room } from "./Room";

export class Building {
  private readonly rooms: Room[] = [];

  constructor(public readonly name: string) { }

  /** Ajoute une pièce au bâtiment */
  addRoom(room: Room): void {
    this.rooms.push(room);
    console.log(`🏢 Pièce "${room.name}" ajoutée au bâtiment "${this.name}"`);
  }

  /** Active tous les capteurs de toutes les pièces */
  activateAllSensors(): void {
    console.log(`\n${"═".repeat(60)}`);
    console.log(`🏢 ACTIVATION DU SYSTÈME DE SURVEILLANCE : ${this.name}`);
    console.log(`${"═".repeat(60)}`);
    for (const room of this.rooms) {
      room.activateAllSensors();
    }
    console.log(`\n${"═".repeat(60)}`);
    console.log(`✅ Tous les capteurs ont été activés.`);
    console.log(`${"═".repeat(60)}`);
  }

  /** Retourne la liste des pièces */
  getRooms(): ReadonlyArray<Room> {
    return this.rooms;
  }
}
