import { Building } from "./building/Building";
import { Room } from "./building/Room";

// Factories (Abstract Factory pattern)
import { BrandAFactory } from "./factories/BrandAFactory";
import { BrandBFactory } from "./factories/BrandBFactory";

// Notifications (Observer pattern)
import { EmailNotifier } from "./notifications/EmailNotifier";
import { LogNotifier } from "./notifications/LogNotifier";
import { DiscordNotifier } from "./notifications/DiscordNotifier";

// ─── Création des factories ─────────────────────────────
console.log("🏭 Création des factories...\n");

const factoryA = new BrandAFactory();
const factoryB = new BrandBFactory();

// ─── Création du bâtiment ───────────────────────────────
const building = new Building("Bâtiment Principal");

// ─── Pièce 1 : Hall d'entrée ───────────────────────────
// Équipée d'une caméra (marque A) et d'un capteur thermique (marque B)
console.log("\n--- Configuration du Hall ---");
const hall = new Room("Hall d'entrée");

// Création des capteurs via les factories (Abstract Factory)
const hallCamera = factoryA.createCamera("Hall d'entrée");
const hallThermal = factoryB.createThermalSensor!("Hall d'entrée");
// Note : hallThermal est un ThermalSensorBAdapter (Adapter pattern)
// mais le code ici ne le sait pas ! Il voit juste un ISensor.

hall.addSensor(hallCamera);
hall.addSensor(hallThermal);

// Ajout des notifiers (Observer pattern)
hall.addNotifier(new EmailNotifier("securite@batiment.fr"));
hall.addNotifier(new LogNotifier("hall_security.log"));

building.addRoom(hall);

// ─── Pièce 2 : Salle Serveur ───────────────────────────
// Équipée d'un capteur de température (marque A) - zone critique !
console.log("\n--- Configuration de la Salle Serveur ---");
const serverRoom = new Room("Salle Serveur");

const serverTemp = factoryA.createTemperatureSensor("Salle Serveur", 35);

serverRoom.addSensor(serverTemp);

// La salle serveur a 3 types de notifications (zone critique)
serverRoom.addNotifier(new EmailNotifier("admin@batiment.fr"));
serverRoom.addNotifier(new LogNotifier("server_room.log"));
serverRoom.addNotifier(new DiscordNotifier("https://discord.com/webhook/server-alerts"));

building.addRoom(serverRoom);

// ─── Pièce 3 : Parking ─────────────────────────────────
// Équipée d'une caméra (marque A) et d'un capteur thermique (marque B)
console.log("\n--- Configuration du Parking ---");
const parking = new Room("Parking");

const parkingCamera = factoryA.createCamera("Parking");
const parkingThermal = factoryB.createThermalSensor!("Parking");

parking.addSensor(parkingCamera);
parking.addSensor(parkingThermal);

// Le parking notifie seulement sur Discord
parking.addNotifier(new DiscordNotifier("https://discord.com/webhook/parking-alerts"));

building.addRoom(parking);

// ─── Démonstration du pattern Iterator ──────────────────
console.log("\n--- Démonstration du pattern Iterator ---");
console.log(`Le Hall contient ${hall.sensorCount} capteur(s) :`);
for (const sensor of hall) {
  console.log(`  • ${sensor.name} (${sensor.location})`);
}

// ─── Activation de tous les capteurs ────────────────────
building.activateAllSensors();
