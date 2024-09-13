export function add(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  return a / b;
}

export const square = (x: number): number => x * x;

export const cube = (x: number): number => x * x * x;

export const isEven = (x: number): boolean => x % 2 === 0;

export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const asyncSum = async (a: number, b: number): Promise<number> => {
  await delay(100); // Simulating some async operation
  return a + b;
};

export const asyncMultiply = async (a: number, b: number): Promise<number> => {
  await delay(100); // Simulating some async operation
  return a * b;
};
