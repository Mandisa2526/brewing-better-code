import { Cappuccino } from "./cuppacino";
import { Espresso } from "./espresso";
import { Latte } from "./lattee";


export interface CoffeeVisitor {
    visitEspresso(espresso: Espresso): void;
    visitLatte(latte: Latte): void;
    visitCappuccino(cappuccino: Cappuccino): void;
}