import { Answer } from '@/types';

export const shuffleAnswersArray = (arr: Answer[]): Answer[] => {
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    const tmpValue = arr[currentIndex];

    arr[currentIndex] = arr[randomIndex];

    arr[randomIndex] = tmpValue;
  }

  return arr;
};
