import assert from "assert";
import { SimpleCoffee } from "./src/decorator/simpleCoffee";
import { MilkDecorator } from "./src/decorator/milkDecorator";
import { SugarDecorator } from "./src/decorator/sugarDecorator";
import { CreamDecorator } from "./src/decorator/creamDecorator";
import { Coffee } from "./src/decorator/decoratorCoffee";

describe('Coffee Decorator Pattern Tests', () => {
    it('should create a simple coffee', () => {
      const simpleCoffee = new SimpleCoffee();
      assert.equal(simpleCoffee.cost(), 5);
      assert.equal(simpleCoffee.description(), 'Simple coffee');
    });
  
    it('should add milk to the coffee', () => {
      let coffee: Coffee = new SimpleCoffee();
      coffee = new MilkDecorator(coffee);
      assert.equal(coffee.cost(), 6.5);
      assert.equal(coffee.description(), 'Simple coffee, with milk');
    });
  
    it('should add sugar and whip to the coffee', () => {
      let coffee: Coffee = new SimpleCoffee();
      coffee = new SugarDecorator(coffee);
      coffee = new CreamDecorator(coffee);
      assert.equal(coffee.cost(), 6.5);
      assert.equal(coffee.description(), 'Simple coffee, with sugar, with cream');
    });
  
    it('should combine multiple decorators', () => {
      let coffee: Coffee = new SimpleCoffee();
      coffee = new MilkDecorator(coffee);
      coffee = new SugarDecorator(coffee);
      coffee = new CreamDecorator(coffee);
      assert.equal(coffee.cost(), 8);
      assert.equal(coffee.description(), 'Simple coffee, with milk, with sugar, with cream');
    });
  });