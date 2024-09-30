import { CoffeeVisitor } from "./coffeeVisitIn";
import { Cappuccino } from "./cuppacino";
import { Espresso } from "./espresso";
import { Latte } from "./lattee";


export class CalorieVisitor implements CoffeeVisitor {
    visitEspresso(espresso: Espresso): void {
      console.log(`Espresso has ${espresso.calories()} calories`);
    }
  
    visitLatte(latte: Latte): void {
      console.log(`Latte has ${latte.calories()} calories`);
    }
  
    visitCappuccino(cappuccino: Cappuccino): void {
      console.log(`Cappuccino has ${cappuccino.calories()} calories`);
    }
  }