import { ReactElement } from 'react';

import { Badge, Divider, Subtitle } from '@/shared/ui';

export const Description = (): ReactElement => {
  return (
    <>
      <div>
        <Subtitle>Запуск анимации</Subtitle>
        <a href="#">
          &#128279; <Badge>triggering-animation-app.ts</Badge>
        </a>
        <Divider />В этом примере внешней системой является библиотека анимации в файле{' '}
        <Badge>animation.js</Badge>. Он предоставляет класс JavaScript под названием
        <Badge>FadeInAnimation</Badge>, который принимает узел DOM в качестве аргумента и
        предоставляет методы <Badge>start()</Badge> и <Badge>stop()</Badge> для управления
        анимацией. Этот компонент использует ссылку ref для доступа к базовому узлу DOM. Эффект
        считывает узел DOM из ref и автоматически запускает анимацию для этого узла при появлении
        компонента.
      </div>
      <Divider />
    </>
  );
};
