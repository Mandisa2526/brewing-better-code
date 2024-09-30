import { CoffeeVisitor } from "./coffeeVisitIn";
import { Coffee } from "./coffeeVisitor";

export class Espresso implements Coffee {
    accept(visitor: CoffeeVisitor): void {
      visitor.visitEspresso(this);
    }
  
    cost(): number {
      return 3.0;
    }
  
    calories(): number {
      return 50;
    }
}