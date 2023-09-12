import { ReactElement } from 'react';

import styles from './quiz-progress.module.css';

export const QuizProgress = ({ questionAnswered, totalQuestions }: Props): ReactElement => {
  const progress = Math.floor((100 / totalQuestions) * questionAnswered);

  return (
    <>
      <div className={styles.question}>
        Вопрос {questionAnswered + 1} из {totalQuestions}
      </div>

      <div className={styles.progressWrapper}>
        <div style={{ width: `${progress}%` }} className={styles.progress}></div>
      </div>
    </>
  );
};

type Props = {
  questionAnswered: number;
  totalQuestions: number;
};
