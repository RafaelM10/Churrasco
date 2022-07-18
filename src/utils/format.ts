export const convertMoney = (value: number): string => {
  const fixedValue = value / 100;

  return fixedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};
