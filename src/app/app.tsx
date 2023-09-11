import { useState } from 'react';

import styles from './app.module.css';

import { Button } from '@/shared/ui';
import {
  WindowListenerApp,
  ChatApp,
  IntersectionObserverApp,
  TriggeringAnimationApp,
  ModalApp,
  FetchDataApp,
} from '@/example';

const EXAMPLES = [
  {
    title: 'Triggering an animation',
    component: <TriggeringAnimationApp />,
  },
  {
    title: 'Controlling a modal dialog',
    component: <ModalApp />,
  },
  {
    title: 'useChatRoom',
    component: <ChatApp />,
  },
  {
    title: 'useWindowListener',
    component: <WindowListenerApp />,
  },
  {
    title: 'useIntersectionObserver',
    component: <IntersectionObserverApp />,
  },
  {
    title: 'useFetchData',
    component: <FetchDataApp />,
  },
];

function App() {
  const [example, setExample] = useState(<TriggeringAnimationApp />);

  const examples = EXAMPLES.map(({ title, component }) => (
    <li key={title}>
      <Button onClick={() => setExample(component)}>{title}</Button>
    </li>
  ));

  return (
    <div className={styles.main}>
      <h1 className={styles.header1}>Примеры использования React useEffect</h1>
      <p>Примеры подключения к внешней системе и обертывание эффектов в пользовательские хуки</p>
      <ul className={styles.nav}>{examples}</ul>
      <div className={styles.wrapper}>{example}</div>
    </div>
  );
}

export default App;
