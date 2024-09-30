import assert from "assert";
import CoffeeFactory from "../src/single/coffeeFactory";

describe('CoffeeFactory Singleton', () => {

    // Test to ensure that the Singleton instance is unique
    it('should always return the same instance', () => {
        const factory1 = CoffeeFactory.getInstance();
        const factory2 = CoffeeFactory.getInstance();

        // Both instances should be strictly equal (same memory reference)
        assert.strictEqual(factory1, factory2, 'CoffeeFactory instances should be the same');
    });

    // Test the functionality of the Singleton instance
    it('should brew coffee of a specific type', () => {
        const factory = CoffeeFactory.getInstance();
        const result = factory.brewCoffee('Espresso');
        const resultFrench = factory.brewCoffee('French');

        // Ensure that the brewCoffee method returns the correct string
        assert.strictEqual(result, 'Brewing a cup of Espresso', 'The brewCoffee method should return the correct message');
        assert.strictEqual(resultFrench, 'Brewing a cup of French', 'The brewCoffee method should return the correct message');
    });

    // Test to ensure that the Singleton instance is not null or undefined
    it('should not return null or undefined', () => {
        const factory = CoffeeFactory.getInstance();

        assert.ok(factory, 'CoffeeFactory instance should not be null or undefined');
    });

    // Test to ensure that multiple calls to getInstance return the same instance
    it('should return the same instance on multiple calls', () => {
        const factory1 = CoffeeFactory.getInstance();
        const factory2 = CoffeeFactory.getInstance();
        const factory3 = CoffeeFactory.getInstance();

        assert.strictEqual(factory1, factory2, 'All instances should be the same');
        assert.strictEqual(factory2, factory3, 'All instances should be the same');
    });

});