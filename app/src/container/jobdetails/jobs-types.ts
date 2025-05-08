import {
  FavouriteNotificationState,
  FullCareerDetails
} from "../../types_common";

// Интерфейс за структура на работните оферти
export interface Offers {
  career: string; // Име на професията
  average_salary: number; // Средна заплата за позицията
  job_offers: JobOffer[]; // Списък с налични оферти
}

// Интерфейс за конкретна оферта за работа
export interface JobOffer {
  title: string; // Заглавие на позицията
  company: string; // Име на компанията
  city: string; // Град на работното място
  details: string; // Подробности за работата
  salary: string; // Заплата (ако е налична)
  off_days: string; // Почивни дни (ако са налични)
  url: string; // Линк към пълната обява
  date: string; // Дата на публикуване на офертата
}

// Интерфейс за пропс на карта с информация за професия
export interface OccupationTitleCardProps {
  fullCareerDetails: FullCareerDetails; // Детайли за професията
  setFavouriteNotification: React.Dispatch<
    React.SetStateAction<FavouriteNotificationState | null>
  >; // Функция за промяна на състоянието на известието
}
