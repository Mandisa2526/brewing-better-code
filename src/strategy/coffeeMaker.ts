import { BrewingStrategy } from "./brewingStrategy";

export class CoffeeMaker {
    //private property 
  private strategy: BrewingStrategy;//Type

  constructor(strategy: BrewingStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: BrewingStrategy): void {
    this.strategy = strategy;
  }

  public brewCoffee(): string {
    return this.strategy.brew();
  }
}