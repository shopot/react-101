import { JSX } from 'react';

import styles from './answer-row.module.css';

type AnswerRowProps = {
  text: string;
  onAnswerQuestion: () => void;
};

export const AnswerRow = ({ text, onAnswerQuestion }: AnswerRowProps): JSX.Element => (
  <div className={styles.answer} onClick={onAnswerQuestion}>
    {text}
  </div>
);
