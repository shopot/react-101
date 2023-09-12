import { ReactElement } from 'react';

import styles from './answer-row.module.css';

export const AnswerRow = ({ text, onAnswerQuestion }: Props): ReactElement => {
  return (
    <div className={styles.answer} onClick={onAnswerQuestion}>
      {text}
    </div>
  );
};

type Props = {
  text: string;
  onAnswerQuestion: () => void;
};
