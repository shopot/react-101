import { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { DEFAULT_ITEM_PER_PAGE } from '@/config';
import { Pagination } from '@/components/pagination';

import { todosStore } from '../../stores/todos-store';

export const TodosPagination = observer((): JSX.Element => {
  const { page, totalCount, setNextPage } = todosStore;

  return (
    <Pagination
      defaultCurrent={page}
      defaultPageSize={DEFAULT_ITEM_PER_PAGE}
      total={totalCount || 0}
      onChange={(value: number) => setNextPage(value)}
    />
  );
});
