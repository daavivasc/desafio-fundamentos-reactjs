const formatValue = (value: number | Date): string => {
  if (typeof value === 'number') {
    return new Intl.NumberFormat([], {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return new Intl.DateTimeFormat('pt-BR').format(value);
};

export default formatValue;
