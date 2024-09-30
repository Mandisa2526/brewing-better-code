import * as assert from 'assert'; // Import Node.js assert module
import * as sinon from 'sinon';
import { DiscountVisitor } from '../src/visitor/discount';
import { CalorieVisitor } from '../src/visitor/calorie';
import { Espresso } from '../src/visitor/espresso';
import { Latte } from '../src/visitor/lattee';
import { Cappuccino } from '../src/visitor/cuppacino';

describe('Visitor Pattern - Coffee Example', () => {
  let discountVisitor: DiscountVisitor;
  let calorieVisitor: CalorieVisitor;
  let consoleSpy: sinon.SinonSpy;

  beforeEach(() => {
    discountVisitor = new DiscountVisitor();
    calorieVisitor = new CalorieVisitor();
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should apply discount to Espresso', () => {
    const espresso = new Espresso();
    espresso.accept(discountVisitor);
    assert.ok(consoleSpy.calledWith('Espresso cost after discount: 2.7'), 'Discount not applied correctly to Espresso');
  });

  it('should apply discount to Cappuccino', () => {
    const cappuccino = new Cappuccino();
    cappuccino.accept(discountVisitor);
    assert.ok(consoleSpy.calledWith('Cappuccino cost after discount: 3.2'), 'Discount not applied correctly to Cappuccino');
  });

  it('should calculate calories for Espresso', () => {
    const espresso = new Espresso();
    espresso.accept(calorieVisitor);
    assert.ok(consoleSpy.calledWith('Espresso has 50 calories'), 'Calories not calculated correctly for Espresso');
  });

  it('should calculate calories for Latte', () => {
    const latte = new Latte();
    latte.accept(calorieVisitor);
    assert.ok(consoleSpy.calledWith('Latte has 150 calories'), 'Calories not calculated correctly for Latte');
  });

  it('should calculate calories for Cappuccino', () => {
    const cappuccino = new Cappuccino();
    cappuccino.accept(calorieVisitor);
    assert.ok(consoleSpy.calledWith('Cappuccino has 100 calories'), 'Calories not calculated correctly for Cappuccino');
  });

  it('should apply both DiscountVisitor and CalorieVisitor to Espresso', () => {
    const espresso = new Espresso();
    espresso.accept(discountVisitor);
    espresso.accept(calorieVisitor);
    assert.ok(consoleSpy.calledWith('Espresso cost after discount: 2.7'), 'Discount not applied correctly to Espresso');
    assert.ok(consoleSpy.calledWith('Espresso has 50 calories'), 'Calories not calculated correctly for Espresso');
  });
});
