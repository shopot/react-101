export type Answer = {
  text: string;
  isCorrect: boolean;
};

export type Question = {
  ask: string;
  answers: Answer[];
};

export type Result = {
  min: number;
  max: number;
  title: string;
  desc: string;
};
