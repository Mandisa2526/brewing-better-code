import assert from "assert";
import { CoffeeBuilder } from "../src/builder/coffeeBuilder";

describe('CoffeeBuilder', function() {

    it('should build a plain coffee without milk and sugar', function() {
        const coffee = new CoffeeBuilder()
            .setType('Espresso')
            .setSize('Small')
            .build();

        assert.equal(coffee.type, 'Espresso');
        assert.equal(coffee.size, 'Small');
        assert.equal(coffee.sugar, 0);
        assert.equal(coffee.milk, false);
    });

    it('should build a coffee with milk and sugar', function() {
        const coffee = new CoffeeBuilder()
            .setType('Latte')
            .setSize('Medium')
            .addSugar(2)
            .addMilk()
            .build();

        assert.equal(coffee.type, 'Latte');
        assert.equal(coffee.size, 'Medium');
        assert.equal(coffee.sugar, 2);
        assert.equal(coffee.milk, true);
    });

});

describe('CoffeeBuilder - Director', function() {

    it('should create an Espresso using the director', function() {
        function makeEspresso() {
            return new CoffeeBuilder()
                .setType('Espresso')
                .setSize('Small')
                .build();
        }

        const espresso = makeEspresso();

        assert.equal(espresso.type, 'Espresso');
        assert.equal(espresso.size, 'Small');
        assert.equal(espresso.sugar, 0);
        assert.equal(espresso.milk, false);
    });

});

describe('CoffeeBuilder - Director', function() {

    it('should create a Latte using the director', function() {
        function makeLatte() {
            return new CoffeeBuilder()
                .setType('Latte')
                .setSize('Large')
                .addSugar(1)
                .addMilk()
                .build();
        }

        const latte = makeLatte();

        assert.equal(latte.type, 'Latte');
        assert.equal(latte.size, 'Large');
        assert.equal(latte.sugar, 1);
        assert.equal(latte.milk, true);
    });

});