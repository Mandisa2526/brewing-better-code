import { CoffeeVisitor } from "./coffeeVisitIn";


export interface Coffee {
    accept(visitor: CoffeeVisitor): void;
}