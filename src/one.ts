export const multiply = (a: number, b: number): number => {
  return a * b;
};

export const multiplyAll = (number: number[]): number => {
  return number.reduce((acc, cur) => acc * cur);
};
