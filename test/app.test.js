const app = require('../src/app');

describe('Calculator', () => {
  test('add operation returns correct result', () => {
    expect(app.calculate('add', 5, 3)).toBe(8);
  });

  test('subtract operation returns correct result', () => {
    expect(app.calculate('subtract', 5, 3)).toBe(2);
  });

  test('multiply operation returns correct result', () => {
    expect(app.calculate('multiply', 5, 3)).toBe(15);
  });

  test('divide operation returns correct result', () => {
    expect(app.calculate('divide', 6, 3)).toBe(2);
  });

  test('throws error for unknown operation', () => {
    expect(() => app.calculate('power', 2, 3)).toThrow('Unknown operation');
  });
});