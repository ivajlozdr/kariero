import {
  MostNeededQuality,
  TopRecommendedOccupation
} from "../../types_common";

// Пропс интерфейс за карта с препратка
export interface RedirectCardProps {
  href: string; // URL адрес за пренасочване
  title: string; // Заглавие на картата
  description: string; // Описание на картата
}

// Интерфейс за опция в селектор или списък
export interface Option {
  label: string; // Текстов етикет на опцията
  name?: string | undefined; // Допълнително име на опцията (по избор)
  value: number | string | undefined; // Стойност, асоциирана с опцията
  icon: string; // Икона, представяща опцията
  subValue?: number; // Допълнителна числова стойност (по избор)
}

// Интерфейс за тип, който съдържа препоръчани и свързани професии
export interface OccupationSeriesType {
  regularOccupations: TopRecommendedOccupation[]; // Списък с основни препоръчани професии
  relatedOccupations: MostNeededQuality[]; // Списък със свързани професии според най-необходимите качества
}

// Тип, представящ категории качества
export type QualitiesCategory =
  | "Abilities" // Способности
  | "Knowledge" // Знания
  | "Skills" // Умения
  | "TechnologySkills" // Технологични умения
  | "WorkActivities"; // Работни дейности
