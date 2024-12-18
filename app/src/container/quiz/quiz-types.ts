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
  | "CareerGoals";

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

export interface FullCareerDetails {
  code: string;
  display: string;
  occupation: Occupation;
  tasks: Tasks;
  technology_skills: Technology;
  tools_used: Tools;
  tools_technology: ToolsTechnology;
  knowledge: ElementArray;
  skills: ElementArray;
  abilities: ElementArray;
  work_activities: ElementArray;
  detailed_work_activities: DetailedWorkActivities;
  work_context: ElementArray;
  job_zone: JobZone;
  education: Education;
  interests: ElementArray;
  work_styles: ElementArray;
  work_values: ElementArray;
  related_occupations: RelatedOccupations;
  additional_information: AdditionalInformation;
  translated: Translated;
}

export interface ElementArray {
  element: Element[];
}

export interface Element {
  translated_name: string;
  id: string;
  related: string;
  name: string;
  description: string;
  score: ElementScore;
  response?: Response[];
}

export interface Response {
  percentage: number;
  name: string;
}

export interface ElementScore {
  scale: Scale;
  important: boolean;
  value: number;
}

export enum Scale {
  Context = "Context",
  Extent = "Extent",
  Importance = "Importance",
  OccupationalInterest = "Occupational Interest"
}

export interface AdditionalInformation {
  source: Source[];
}

export interface Source {
  url: string;
  name: string;
}

export interface DetailedWorkActivities {
  activity: Activity[];
}

export interface Activity {
  id: string;
  related: string;
  name: string;
}

export interface Education {
  level_required: LevelRequired;
}

export interface LevelRequired {
  category: LevelRequiredCategory[];
}

export interface LevelRequiredCategory {
  name: string;
  score: CategoryScore;
  description?: string;
}

export interface CategoryScore {
  scale: string;
  value: number;
}

export interface JobZone {
  value: number;
  title: string;
  education: string;
  related_experience: string;
  job_training: string;
  job_zone_examples: string;
  svp_range: string;
}

export interface Occupation {
  code: string;
  title: string;
  tags: Tags;
  description: string;
  sample_of_reported_job_titles: SampleOfReportedJobTitles;
  updated: Updated;
  summary_resources: Resources;
  details_resources: Resources;
  custom_resources: Resources;
}

export interface Resources {
  resource: Resource[];
}

export interface Resource {
  href: string;
  title: string;
}

export interface SampleOfReportedJobTitles {
  title: string[];
}

export interface Tags {
  bright_outlook: boolean;
  green: boolean;
}

export interface Updated {
  partial: boolean;
  year: number;
  resource_updated: ResourceUpdated[];
}

export interface ResourceUpdated {
  title: string;
  source: string;
  year?: number;
}

export interface RelatedOccupations {
  occupation: OccupationElement[];
}

export interface OccupationElement {
  href: string;
  code: string;
  title: string;
  tags: Tags;
}

export interface Tasks {
  task: Task[];
}

export interface Task {
  id: number;
  green: boolean;
  related: string;
  statement: string;
  category: CategoryEnum;
  score: ElementScore;
}

export enum CategoryEnum {
  Core = "Core"
}

export interface Technology {
  see_all: SeeAll;
  category: TechnologySkillsCategory[];
}

export interface TechnologySkillsCategory {
  related: string;
  title: Title;
  example: PurpleExample[];
}

export interface PurpleExample {
  hot_technology?: string;
  name: string;
}

export interface Title {
  id: number;
  name: string;
}

export interface SeeAll {
  href: string;
}

export interface ToolsTechnology {
  tools: Tools;
  technology: Technology;
}

export interface Tools {
  category: ToolsUsedCategory[];
}

export interface ToolsUsedCategory {
  related: string;
  title: Title;
  example: FluffyExample[];
}

export interface FluffyExample {
  name: string;
}

export interface Translated {
  title: string;
  description: string;
  skills: Element[];
}

export interface UserResponses {
  id: number;
  question: string;
  answer: string;
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
}

export interface CareersProps {
  careerPaths: CareerPath[];
  careersData: FullCareerDetails[];
}
