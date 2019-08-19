import sum from './sum';

describe('Sum Test', () => {
  it('Must return expected sum of 5 to 1 and 4 input', () => {
    expect(sum(1, 4)).toBe(5);
  });
  it('Must return expected sum of 3 to 1 and 2 input', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
