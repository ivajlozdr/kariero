import {
  FavouriteNotificationState,
  FullCareerDetails
} from "../../types_common";

export interface Offers {
  average_salary: number;
  job_offers: JobOffer[];
}

export interface JobOffer {
  title: string;
  company: string;
  city: string;
  details: string;
  salary: string;
  off_days: string;
  url: string;
  date: string;
}

export interface OccupationTitleCardProps {
  fullCareerDetails: FullCareerDetails;
  favouriteNotification: FavouriteNotificationState | null;
  setFavouriteNotification: React.Dispatch<
    React.SetStateAction<FavouriteNotificationState | null>
  >;
}
