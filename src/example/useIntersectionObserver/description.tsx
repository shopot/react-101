import { ReactElement } from 'react';

import { Badge, Divider, Subtitle } from '@/shared/ui';

export const Description = (): ReactElement => {
  return (
    <>
      <div>
        <Subtitle>Пользовательский хук useIntersectionObserver</Subtitle>
        <a href="#">
          &#128279; <Badge>use-intersection-observer.ts</Badge>
        </a>
        <Divider />В этом примере внешней системой снова является DOM браузера. Компонент{' '}
        <Badge>IntersectionObserverApp</Badge>
        отображает длинный список, затем компонент <Badge>Box</Badge>, а затем еще один длинный
        список. <br />
        Прокрутите список вниз. <br />
        Обратите внимание: когда весь компонент <Badge>Box</Badge> полностью виден в окне просмотра,
        цвет фона меняется на черный. Для реализации этого компонент Box использует эффект для
        управления <Badge>IntersectionObserver</Badge>. Этот API браузера уведомляет вас, когда
        элемент DOM виден в области просмотра.
      </div>
      <Divider />
    </>
  );
};