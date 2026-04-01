import { INotifier } from "./INotifier";

export class LogNotifier implements INotifier {
  public readonly name: string;
  private readonly filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.name = `LogNotifier(${filename})`;
  }

  notify(message: string): void {
    console.log(`📝 [LOG → ${this.filename}] ${new Date().toISOString()} | ${message}`);
  }
}
