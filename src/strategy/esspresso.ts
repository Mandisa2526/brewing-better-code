import { BrewingStrategy } from "./brewingStrategy";

export class EspressoStrategy implements BrewingStrategy {
    public brew(): string {
      return 'Brewing coffee with an espresso machine.';
    }
  }