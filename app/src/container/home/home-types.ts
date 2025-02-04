import {
  MostNeededQuality,
  TopRecommendedOccupation
} from "../../types_common";

export interface RedirectCardProps {
  href: string;
  title: string;
  description: string;
}

export interface Option {
  label: string;
  name?: string | undefined;
  value: number;
  icon: string;
  subValue?: number;
}

export interface OccupationSeriesType {
  regularOccupations: TopRecommendedOccupation[];
  relatedOccupations: MostNeededQuality[];
}

export type QualitiesCategory =
  | "Abilities"
  | "Knowledge"
  | "Skills"
  | "TechnologySkills"
  | "WorkActivities";
