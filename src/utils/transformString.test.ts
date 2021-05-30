import toCapitalizeFirstLetter from './transformString';

describe('toCapitalizeFirstLetter', () => {
  test('Should return string with only first big letter, when input string get big letter in middle', () => {
    const result = toCapitalizeFirstLetter('some String');
    expect(result).toBe('Some string');
  });

  test('Should return string with only first big letter, when input string get big letter in start', () => {
    const result = toCapitalizeFirstLetter('Some string');
    expect(result).toBe('Some string');
  });

  test('Should return string with only first big letter, when input string get all big letters', () => {
    const result = toCapitalizeFirstLetter('SOME STRING');
    expect(result).toBe('Some string');
  });

  test('Should return string with only first big letter, when input string get no one big letter', () => {
    const result = toCapitalizeFirstLetter('some string');
    expect(result).toBe('Some string');
  });
});
