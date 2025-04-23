export interface UserData {
  id: number; // Идентификатор на потребителя
  first_name: string; // Първо име
  last_name: string; // Фамилно име
  email: string; // Имейл адрес
}

// Обобщени данни за платформата
export interface DataType {
  usersCount: UsersCount[];
  distinctOccupations: DistinctOccupations;
  topRecommendedOccupations: {
    platform?: TopRecommendedOccupation[];
    individual?: TopRecommendedOccupation[];
  };
  topRecommendedRelatedOccupations: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostNeededAbilities: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostNeededKnowledge: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostNeededSkills: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostNeededTasks: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostNeededTechnologySkills: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostNeededWorkActivities: {
    platform?: MostNeededQuality[];
    individual?: MostNeededQuality[];
  };
  mostSelectedPersonalityTypes: { platform?: Most[]; individual?: Most[] };
  mostSelectedWorkEnvironments: { platform?: Most[]; individual?: Most[] };
  mostSelectedJobPriorities: { platform?: Most[]; individual?: Most[] };
  mostSelectedEducationLevels: { platform?: Most[]; individual?: Most[] };
  mostSelectedCareerGoals: { platform?: Most[]; individual?: Most[] };
  mostSelectedJobSatisfactionLevels: { platform?: Most[]; individual?: Most[] };
  mostPreferredWorkstyleStructure: { platform?: Most[]; individual?: Most[] };
  mostPreferredWorkstyleCollaboration: {
    platform?: Most[];
    individual?: Most[];
  };
  mostPreferredWorkstyleWorkEnvironment: {
    platform?: Most[];
    individual?: Most[];
  };
}

export interface DistinctOccupations {
  count: number;
  data: TopRecommendedOccupation[];
}

export interface TopRecommendedOccupation {
  code: string;
  title_bg: string;
  title_en: string;
  description: string;
  bright_outlook: BrightOutlook;
  education: null | string;
  recommendation_count?: number;
}

export enum BrightOutlook {
  GrowRapidly = '["Grow Rapidly"]',
  Null = "null"
}

export interface MostNeededQuality {
  onet_id: string | number;
  name_en: string;
  name_bg: string;
  occurrence_count?: number;
  recommendation_count?: number;
}

export interface Most {
  preference: string;
  occurrence_count: number;
}

export interface UsersCount {
  user_count: number;
}

export interface CommonCareerProps {
  fullCareerDetails: FullCareerDetails;
}

export type NotificationType = "success" | "error" | "warning";

export interface NotificationState {
  message: string;
  type: NotificationType;
}

export type FavouriteNotificationType = "add" | "remove";

export interface FavouriteNotificationState {
  type: FavouriteNotificationType;
  message: string;
  title: string;
}

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
  date?: Date;
}

export interface ElementArray {
  element: Element[];
}

export interface Element {
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
  education: string;
  skills: string[];
  interests: string[];
  abilities: string[];
  knowledge: string[];
  detailed_work_activities: string[];
  technology_skills: string[];
  tasks: string[];
  related_occupations: string[];
}

export interface FavouriteCareer {
  id: number;
  code: string;
  user_id: number;
  title_bg: string;
  title_en: string;
  date: Date;
}
