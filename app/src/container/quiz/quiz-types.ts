export type QuestionMapping = {
  id: number;
  question: string;
  category: string;
  field: string;
  answerType: "Likert" | "MultipleChoice";
  options?: string[]; // For multiple-choice questions
};

export interface Scores {
  RIASEC: {
    [key: string]: { [field: string]: string | number };
  };
  Preferences: {
    PersonalityTypes?: string[];
    WorkEnvironment?: string[];
    JobPriority?: string[];
    EducationLevel?: string;
    CareerGoals?: string[];
  };
  WorkStyle: {
    StructurePreference: string;
    Collaboration: string;
    WorkEnvironment: string;
  };
}

export type PreferenceKeys =
  | "PersonalityTypes"
  | "WorkEnvironment"
  | "JobPriority"
  | "EducationLevel"
  | "CareerGoals";

export type WorkStyleKeys =
  | "StructurePreference"
  | "Collaboration"
  | "WorkEnvironment";

  export  interface Career {
    career: string;
    reason: string;
  }
  
 export  interface CareerRecommendation {
    careerPath: string;
    reason: string;
    listOfCareers: Career[];
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
