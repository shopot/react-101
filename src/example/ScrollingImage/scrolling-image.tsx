import { JSX, useRef } from 'react';

import styles from './scrolling-image.module.css';

import { Badge, Button, Divider, Subtitle } from '@/shared/ui';

export const ScrollingImage = (): JSX.Element => {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;

    // This line assumes a particular DOM structure:
    const imgNode = listNode?.querySelectorAll('li > img')[index];

    imgNode?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <Subtitle>Прокрутка изображения для просмотра</Subtitle>
      <Divider />
      <p>
        В этом примере нажатие кнопки прокручивает изображение в поле зрения. Здесь используется{' '}
        <Badge>ref</Badge> для ссылки на узел DOM списка, а затем вызывает API-интерфейс DOM{' '}
        <Badge>querySelectorAll</Badge>, чтобы найти изображение, к которому мы хотим прокрутиться.
      </p>
      <p>Уменьшите высоту окна браузера, что увидеть как это работает.</p>
      <Divider />
      <nav>
        <Button onClick={() => scrollToIndex(0)}>Tom</Button>
        <Button onClick={() => scrollToIndex(1)}>Maru</Button>
        <Button onClick={() => scrollToIndex(2)}>Jellylorum</Button>
      </nav>
      <ul ref={listRef} className={styles.catsList}>
        <li>
          <img src="https://placekitten.com/g/200/200" alt="Tom" />
        </li>
        <li>
          <img src="https://placekitten.com/g/300/200" alt="Maru" />
        </li>
        <li>
          <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
        </li>
      </ul>
    </>
  );
};
