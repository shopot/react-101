import { ReactElement } from 'react';

import styles from './app.module.css';

import { Button, Modal } from '@/shared/ui';
import { useModal } from '@/hooks';

const App = (): ReactElement => {
  const { isShowing, toggle } = useModal();

  console.log('Render <App />');

  return (
    <div className={styles.app}>
      <h1>Modal Dialog and Custom Modal Hook</h1>

      <div className={styles.actions}>
        <Button onClick={toggle}>Open modal dialog</Button>
      </div>

      <Modal isShowing={isShowing} hide={toggle}>
        <p className="text-center">
          <strong>Modal Dialog and Custom Modal Hook</strong>
        </p>
        <p>
          Building modal dialogs in React is a challenge due to their architectural and
          accessibility complications.
        </p>
      </Modal>
    </div>
  );
};

export default App;
