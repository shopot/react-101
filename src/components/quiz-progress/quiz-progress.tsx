import { JSX } from 'react';

import styles from './quiz-progress.module.css';

type QuizProgressProps = {
  questionAnswered: number;
  totalQuestions: number;
};

export const QuizProgress = ({
  questionAnswered,
  totalQuestions,
}: QuizProgressProps): JSX.Element => {
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
