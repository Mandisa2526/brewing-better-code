import assert from "assert";
import { CoffeeMaker } from "../src/strategy/coffeeMaker";
import { EspressoStrategy } from "../src/strategy/esspresso";
import { FrenchPressStrategy } from "../src/strategy/frenchPress";
import { PourOverStrategy } from "../src/visitor/pourOver";

describe('CoffeeMaker', function() {
    it('should brew coffee using EspressoStrategy', function() {
        const espressoStrategy = new EspressoStrategy();
        const coffeeMaker = new CoffeeMaker(espressoStrategy);
        const result = coffeeMaker.brewCoffee();
        assert.equal(result, 'Brewing coffee with an espresso machine.');
    });
    it('should  brews coffee using the FrenchPressStrategy and return the description', function() {
        const frenchStrategy = new FrenchPressStrategy();
        const coffeeMaker = new CoffeeMaker(frenchStrategy);
        const result = coffeeMaker.brewCoffee();
        assert.equal(result, 'Brewing coffee with a French press.');
    });

    it('should brew coffee using PourOverStrategy', function() {
        const pourOverStrategy = new PourOverStrategy();
        const coffeeMaker = new CoffeeMaker(pourOverStrategy);
        const result = coffeeMaker.brewCoffee();
        assert.strictEqual(result, 'Brewing coffee with a pour-over method.');
    });
});

describe('CoffeeMaker', function() {
    it('should switch brewing strategies at runtime', function() {
        const espressoStrategy = new EspressoStrategy();
        const frenchPressStrategy = new FrenchPressStrategy();
        const pourOverStrategy = new PourOverStrategy();

        const coffeeMaker = new CoffeeMaker(espressoStrategy);
        assert.strictEqual(coffeeMaker.brewCoffee(), 'Brewing coffee with an espresso machine.');

        coffeeMaker.setStrategy(frenchPressStrategy);
        assert.strictEqual(coffeeMaker.brewCoffee(), 'Brewing coffee with a French press.');

        coffeeMaker.setStrategy(pourOverStrategy);
        assert.strictEqual(coffeeMaker.brewCoffee(), 'Brewing coffee with a pour-over method.');
    });
});
