import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

import styles from './modal.module.css';

export const Modal = ({ isShowing, hide, children }: ModalProps) => {
  if (isShowing) {
    return createPortal(
      <>
        <div className={styles.modalOverlay} />
        <div
          className={styles.modalWrapper}
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
          onClick={hide}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <button
                type="button"
                className={styles.modalCloseButton}
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className={styles.modalContent}>{children}</div>
          </div>
        </div>
      </>,
      document.body
    );
  }

  return null;
};

type ModalProps = {
  isShowing: boolean;
  hide: () => void;
  children: ReactNode;
};
