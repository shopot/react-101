import { JSX, useState } from 'react';

import styles from './app.module.css';

import questions from '@/data/questions';
import results from '@/data/results';

import { QuestionsForm, QuestionsResult } from '@/components';
import { Button } from '@/shared/ui';

export const App = (): JSX.Element => {
  const [questionAnswered, setQuestionAnswered] = useState(0);

  const [totalCorrect, setTotalCorrect] = useState(0);

  const answerQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setTotalCorrect(totalCorrect + 1);
    }

    setQuestionAnswered(questionAnswered + 1);
  };

  const resetQuiz = () => {
    setQuestionAnswered(0);
    setTotalCorrect(0);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>React Quiz App</h1>
      <div className={styles.card}>
        {questionAnswered < questions.length ? (
          <QuestionsForm
            questions={questions}
            questionAnswered={questionAnswered}
            onAnswerQuestion={answerQuestion}
          />
        ) : (
          <QuestionsResult totalCorrect={totalCorrect} results={results} />
        )}

        {questionAnswered === questions.length && (
          <div className={styles.buttons}>
            <Button onCLick={resetQuiz}>Начать сначала</Button>
          </div>
        )}
      </div>
    </div>
  );
};
