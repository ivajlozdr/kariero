import { FC, useState, useEffect } from "react";
import Pageheader from "../../components/common/pageheader/pageheader";
import { useLocation } from "react-router-dom";
import PaginatedTasks from "./components/Tasks";
import RelatedOccupations from "./components/RelatedOccupations";
import {
  FavouriteNotificationState,
  FullCareerDetails
} from "../../types_common";
import JobOffers from "./components/offers/JobOffers";
import OccupationDescription from "./components/OccupationDescription";
import OccupationTitleCard from "./components/OccupationTitleCard";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Loader from "../../pages/Loader";
import { Offers } from "./jobs-types";
import FavouriteNotification from "../../components/common/notification/FavouriteNotification";

const JobDetails: FC = () => {
  const location = useLocation();
  const [favouriteNotification, setFavouriteNotification] =
    useState<FavouriteNotificationState | null>(null);
  const fullCareerDetails: FullCareerDetails | null =
    location.state?.fullCareerDetails ??
    JSON.parse(localStorage.getItem("fullCareerDetails") || "null");
  const jobOffers: Offers | null =
    location.state?.jobOffers ??
    JSON.parse(localStorage.getItem("jobOffers") || "null");

  useEffect(() => {
    if (fullCareerDetails) {
      localStorage.setItem(
        "fullCareerDetails",
        JSON.stringify(fullCareerDetails)
      );
    }
  }, [fullCareerDetails]);

  if (!fullCareerDetails) {
    return (
      <Loader description="Зареждаме информация за избраната професия, моля изчакайте" />
    );
  }

  const { translated } = fullCareerDetails;

  return (
    <>
      {favouriteNotification && (
        <FavouriteNotification
          type={favouriteNotification.type}
          favouriteNotification={favouriteNotification}
          setFavouriteNotification={setFavouriteNotification}
        />
      )}
      <Pageheader
        currentpage={`Детайли за ${translated.title}`}
        activepage="Кариери"
        mainpage={translated.title}
      />
      <div className="px-10">
        <OccupationTitleCard
          fullCareerDetails={fullCareerDetails}
          favouriteNotification={favouriteNotification}
          setFavouriteNotification={setFavouriteNotification}
        />
        <div className="grid grid-cols-12 gap-6">
          <div className="xxl:col-span-8 col-span-12">
            <OccupationDescription fullCareerDetails={fullCareerDetails} />
            <Education fullCareerDetails={fullCareerDetails} />
            <Technologies fullCareerDetails={fullCareerDetails} />
            {jobOffers?.job_offers?.length ? (
              <div>
                <h4 className="font-semibold mb-0 !text-defaulttextcolor">
                  Обяви за {translated.title}
                </h4>
                <p className="!text-defaulttextcolor text-defaultsize mb-4">
                  Открийте страхотни възможности за работа!
                </p>
                <JobOffers jobOffers={jobOffers} />
              </div>
            ) : null}
          </div>
          <div className="xxl:col-span-4 col-span-12">
            <PaginatedTasks tasks={translated.tasks} />
            <RelatedOccupations fullCareerDetails={fullCareerDetails} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
