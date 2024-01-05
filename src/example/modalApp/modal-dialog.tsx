import { ReactNode, useEffect, useRef } from 'react';

import styles from './modal-dialog.module.css';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export const ModalDialog = ({ isOpen, children }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = ref.current;

    dialog?.showModal();

    return () => {
      dialog?.close();
    };
  }, [isOpen]);

  return (
    <dialog className={styles.modal} ref={ref}>
      {children}
    </dialog>
  );
};
