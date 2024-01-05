import { JSX } from 'react';

import styles from './questions-form.module.css';

import type { Question } from '@/types';
import { shuffleAnswersArray } from '@/helpers';
import { QuizProgress } from '../quiz-progress';
import { AnswerRow } from '../answer-row';

type QuestionsFormProps = {
  questions: Question[];
  questionAnswered: number;
  onAnswerQuestion: (isCorrect: boolean) => void;
};

export const QuestionsForm = ({
  questions,
  questionAnswered,
  onAnswerQuestion,
}: QuestionsFormProps): JSX.Element => {
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
