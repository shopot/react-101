import { JSX } from 'react';

import { Badge, Divider, Subtitle } from '@/shared/ui';

export const Description = (): JSX.Element => {
  return (
    <>
      <div>
        <Subtitle>Получение данных с помощью эффектов - пользовательский хук useFetchData</Subtitle>
        <a
          href="https://github.com/shopot/react-101/blob/chapter-11/src/example/fecthingData/use-fetch-data.ts"
          target="_blank"
        >
          &#128279; <Badge>use-fetch-data.ts</Badge>
        </a>
        <Divider />
        Вы можете использовать эффект для получения данных для вашего компонента.
        <br />В этом примере хук <Badge>useFetchData</Badge> стал результатом объединения хуков{' '}
        <Badge>useState</Badge> и <Badge>useEffect</Badge>.
        <br />В нем представлены три состояния запроса на выборку: ожидание, успех и неудача. Когда
        запрос ожидает обработки, хук вернет значение <Badge>true</Badge> для переменной{' '}
        <Badge>loading</Badge>. Когда запрос выполняется успешно и данные получены, они будут
        переданы компоненту из этого хука..
        <br />
        Попробуйте изменить <Badge>uri</Badge>, нажав на одну из предложенных кнопок с именами
        героев, и посмотрите, как Эффект повторно выполнит запрос для получения данных.
      </div>
      <Divider />
    </>
  );
};
