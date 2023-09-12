import { ReactElement } from 'react';

import styles from './questions-form.module.css';

import { Question } from '@/types';
import { shuffleAnswersArray } from '@/helpers';
import { QuizProgress } from '../quiz-progress';
import { AnswerRow } from '../answer-row';

export const QuestionsForm = ({
  questions,
  questionAnswered,
  onAnswerQuestion,
}: Props): ReactElement => {
  const { ask, answers } = questions[questionAnswered];

  const shuffledAnswers = shuffleAnswersArray(answers);

  // Create answers list
  const answersList = shuffledAnswers.map(({ text, isCorrect }) => (
    <AnswerRow text={text} onAnswerQuestion={() => onAnswerQuestion(isCorrect)} />
  ));

  return (
    <>
      <QuizProgress questionAnswered={questionAnswered} totalQuestions={questions.length} />
      <h2 className={styles.ask}>{ask}</h2>
      {answersList}
    </>
  );
};

type Props = {
  questions: Question[];
  questionAnswered: number;
  onAnswerQuestion: (isCorrect: boolean) => void;
};
