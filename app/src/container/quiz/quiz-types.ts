import { FullCareerDetails } from "../../types_common";

export type QuestionMapping = {
  id: number;
  question: string;
  category: string;
  field: string;
  answerType: "Likert" | "MultipleChoice";
  options?: string[];
};

export interface Scores {
  RIASEC: {
    [key: string]: { [field: string]: string | number | null };
  };
  Preferences: {
    PersonalityTypes?: string[];
    WorkEnvironment?: string[];
    JobPriority?: string[];
    EducationLevel?: string[];
    CareerGoals?: string[];
    JobSatisfaction?: string[];
  };
  WorkStyle: {
    StructurePreference: string;
    Collaboration: string;
    WorkEnvironment: string;
  };
}

export type RiasecCategory =
  | "Realistic"
  | "Investigative"
  | "Artistic"
  | "Social"
  | "Enterprising"
  | "Conventional";

export type PreferenceKeys =
  | "PersonalityTypes"
  | "WorkEnvironment"
  | "JobPriority"
  | "EducationLevel"
  | "CareerGoals"
  | "JobSatisfaction";

export type WorkStyleKeys =
  | "StructurePreference"
  | "Collaboration"
  | "WorkEnvironment";

export interface Career {
  career: string;
  reason: string;
}

export interface CareerRecommendation {
  careerPath: string;
  reason: string;
  listOfCareers: Career[];
}

export interface FullRecommendationsObject {
  Abilities: string[];
  Skills: string[];
  Knowledge: string[];
  Interests: string[];
  WorkStyle: string[];
  WorkValues: string[];
  TechnologySkills: string[];
  CareerRecommendations: CareerRecommendation[];
}

export type UserProfileData = {
  Abilities: string[];
  Skills: string[];
  Knowledge: string[];
  Interests: string[];
  WorkStyle: string[];
  WorkValues: string[];
  TechnologySkills: string[];
  CareerRecommendations: CareerRecommendation[];
};

export interface UserResponses {
  id: number;
  question: string;
  answer: string;
}

export interface QuizNotificationType {
  message: string;
  type: string;
  onConfirm?: () => void;
}

export interface CareerPathCardProps {
  pathName: string;
  reason: string;
  careers: string[];
  onClick: () => void;
}

export interface CareerPath {
  careerPath: string;
  reason: string;
  listOfCareers: Career[];
}

export interface CareerQuizProps {
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
  setUserResponses: React.Dispatch<React.SetStateAction<UserResponses[]>>;
  userResponses: UserResponses[];
}

export interface CareerCardProps {
  title: string;
  description: string;
  skills: string[];
  reason: string;
  setNotification: React.Dispatch<
    React.SetStateAction<QuizNotificationType | null>
  >;
  handleClick: () => void;
}

export interface CareersProps {
  careerPaths: CareerPath[];
  careersData: FullCareerDetails[];
  setNotification: React.Dispatch<
    React.SetStateAction<QuizNotificationType | null>
  >;
}
