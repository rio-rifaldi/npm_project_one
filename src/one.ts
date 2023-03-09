const multiply = (a: number, b: number): number => {
  return a * b;
};

const multiplyAll = (number: number[]): number => {
  return number.reduce((acc, cur) => acc * cur);
};
