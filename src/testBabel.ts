export const asyncFunction = async () => {
  const result = await Promise.resolve('Babel test');
  return result;
};
