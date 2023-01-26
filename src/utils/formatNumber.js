const formatNumberToPrice = (number) => {
  return Number.parseFloat(number).toFixed(2) + "€";
};

export { formatNumberToPrice };
