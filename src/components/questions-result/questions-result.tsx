import { JSX } from 'react';

import styles from './questions-result.module.css';

import type { Result } from '@/types';

type QuestionsResultProps = {
  totalCorrect: number;
  results: Result[];
};

export const QuestionsResult = ({ totalCorrect, results }: QuestionsResultProps): JSX.Element => {
  let resultIndex = 0;
  let headerClass = styles.loser;

  results.forEach(({ max, min }, index) => {
    if (min <= totalCorrect && max >= totalCorrect) {
      resultIndex = index;

      headerClass = min === max ? styles.winner : headerClass;
    }
  });

  const { title, desc } = results[resultIndex];

  return (
    <>
      <h2 className={headerClass}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </>
  );
};
