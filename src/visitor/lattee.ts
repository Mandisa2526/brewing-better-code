import { CoffeeVisitor } from "./coffeeVisitIn";
import { Coffee } from "./coffeeVisitor";


export class Latte implements Coffee {
    accept(visitor: CoffeeVisitor): void {
      visitor.visitLatte(this);
    }
  
    cost(): number {
      return 4.5;
    }
  
    calories(): number {
      return 150;
    }
}