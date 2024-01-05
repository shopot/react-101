import { JSX, useState } from 'react';

import styles from './app.module.css';

import { Button } from '@/shared/ui';
import {
  ClickCounter,
  Focusing,
  PlayVideo,
  ScrollingImage,
  Stopwatch,
  UsingForwardRef,
} from '@/example';

const EXAMPLES = [
  {
    title: 'Click counter',
    component: <ClickCounter />,
  },
  {
    title: 'Stopwatch',
    component: <Stopwatch />,
  },
  {
    title: 'Focusing a text input',
    component: <Focusing />,
  },
  {
    title: 'Scrolling an image into view',
    component: <ScrollingImage />,
  },
  {
    title: 'Playing and pausing a video',
    component: <PlayVideo />,
  },
  {
    title: 'forwardRef() example',
    component: <UsingForwardRef />,
  },
];

function App(): JSX.Element {
  const [example, setExample] = useState(<ClickCounter />);

  const examples = EXAMPLES.map(({ title, component }) => (
    <li key={title}>
      <Button onClick={() => setExample(component)}>{title}</Button>
    </li>
  ));

  return (
    <div className={styles.main}>
      <h1 className={styles.header1}>Примеры использования useRef()</h1>
      <ul className={styles.nav}>{examples}</ul>
      <div className={styles.wrapper}>{example}</div>
    </div>
  );
}

export default App;
