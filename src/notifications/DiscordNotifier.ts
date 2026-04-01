import { INotifier } from "./INotifier";

export class DiscordNotifier implements INotifier {
  public readonly name: string;
  private readonly webhook: string;

  constructor(webhook: string) {
    this.webhook = webhook;
    this.name = `DiscordNotifier(${webhook})`;
  }

  notify(message: string): void {
    console.log(`🎮 [DISCORD → ${this.webhook}] ${message}`);
  }
}
