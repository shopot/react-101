import { useSelector } from 'react-redux';

import { selectCount, selectError, selectLoading } from '../stores/counter-slice';

export const useCounter = () => {
  const data = useSelector(selectCount);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return {
    data,
    isLoading,
    error,
  };
};
