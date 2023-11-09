export const getRandomColor = () =>
  `#${Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(6, '0')}`;
