export type RiasecCategory =
  | "Realistic"
  | "Investigative"
  | "Artistic"
  | "Social"
  | "Enterprising"
  | "Conventional";

export type RiasecScores = Record<RiasecCategory, number>;

export type AnswerKey =
  | "Strongly Agree"
  | "Agree"
  | "Slightly Agree"
  | "Neutral"
  | "Slightly Disagree"
  | "Disagree"
  | "Strongly Disagree";

export interface AnswerScore {
  [questionId: string]: number;
}
