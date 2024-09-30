import { CoffeeVisitor } from "./coffeeVisitIn";
import { Coffee } from "./coffeeVisitor";


export class Cappuccino implements Coffee {
    accept(visitor: CoffeeVisitor): void {
      visitor.visitCappuccino(this);
    }
  
    cost(): number {
      return 4.0;
    }
  
    calories(): number {
      return 100;
    }
  }