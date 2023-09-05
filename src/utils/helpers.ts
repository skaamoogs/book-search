// функция для преобразования строк, массивов в строку css классов
export const cx = (...args: unknown[]) =>
  args
    .flat()
    .filter((x) => typeof x === 'string')
    .join(' ')
    .trim();
