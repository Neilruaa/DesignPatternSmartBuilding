import { INotifier } from "./INotifier";

export class EmailNotifier implements INotifier {
  public readonly name: string;
  private readonly email: string;

  constructor(email: string) {
    this.email = email;
    this.name = `EmailNotifier(${email})`;
  }

  notify(message: string): void {
    console.log(`📧 [EMAIL → ${this.email}] ${message}`);
  }
}
