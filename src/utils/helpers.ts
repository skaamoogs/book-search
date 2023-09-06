// функция для преобразования строк, массивов в строку css классов
export const cx = (...args: unknown[]) =>
  args
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ')
    .trim();

export const queryStringify = (
  parameters?: Record<string, string | number>
) => {
  if (!parameters) return '';

  if (typeof parameters !== 'object') {
    throw new Error('Parameters should be an object');
  }

  return (
    '?' +
    Object.entries(parameters)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  );
};
