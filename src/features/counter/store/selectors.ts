import { useAppSelector } from '@/store';

export const useCounter = () => {
  return useAppSelector((state) => state.counter);
};
