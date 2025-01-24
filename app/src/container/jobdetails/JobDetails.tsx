import { FC, useState, useEffect } from "react";
import Pageheader from "../../components/common/pageheader/pageheader";
import { useLocation } from "react-router-dom";
import PaginatedTasks from "./components/Tasks";
import RelatedOccupations from "./components/RelatedOccupations";
import { FullCareerDetails } from "../quiz/quiz-types";
import JobOffers from "./components/offers/JobOffers";
import OccupationDescription from "./components/OccupationDescription";
import Share from "./components/Share";
import OccupationTitleCard from "./components/OccupationTitleCard";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import Loader from "../../pages/Loader";
import { Offers } from "./jobs-types";

interface JobDetailsProps {}

const JobDetails: FC<JobDetailsProps> = () => {
  const location = useLocation();

  const [fullCareerDetails, setFullCareerDetails] =
    useState<FullCareerDetails | null>(() => {
      if (location.state?.fullCareerDetails) {
        return location.state.fullCareerDetails;
      }

      const savedDetails = localStorage.getItem("fullCareerDetails");
      return savedDetails ? JSON.parse(savedDetails) : null;
    });

  const [jobOffers, setJobOffers] = useState<Offers>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJobOffers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/job-offers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            keyword: fullCareerDetails?.translated.title || "",
            occupation_code: fullCareerDetails?.occupation.code
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch job offers");
      }

      const data = await response.json();
      setJobOffers(data);
      console.log("data: ", data);
    } catch (error) {
      console.error("Error fetching job Offers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fullCareerDetails) {
      fetchJobOffers();
    }
  }, [fullCareerDetails]);

  useEffect(() => {
    if (fullCareerDetails) {
      localStorage.setItem(
        "fullCareerDetails",
        JSON.stringify(fullCareerDetails)
      );
    }
  }, [fullCareerDetails]);

  if (loading) {
    return (
      <Loader description="Зареждаме информация за обяви, моля изчакайте" />
    );
  }
  console.log("jobOffers: ", jobOffers);
  if (!fullCareerDetails) {
    return (
      <Loader description="Зареждаме информация за избраната професия, моля изчакайте" />
    );
  }

  const { translated } = fullCareerDetails;

  return (
    <>
      <Pageheader
        currentpage={`Детайли за ${translated.title}`}
        activepage="Кариери"
        mainpage={translated.title}
      />
      <div className="px-10">
        <OccupationTitleCard fullCareerDetails={fullCareerDetails} />
        <div className="grid grid-cols-12 gap-6">
          <div className="xxl:col-span-8 col-span-12">
            <OccupationDescription fullCareerDetails={fullCareerDetails} />
            <Education fullCareerDetails={fullCareerDetails} />
            <Technologies fullCareerDetails={fullCareerDetails} />
            <Share />
            <div>
              <h4 className="font-semibold mb-0 !text-defaulttextcolor">
                Обяви за {translated.title}
              </h4>
              <p className="!text-defaulttextcolor text-defaultsize mb-4">
                Разгледайте различни обяви.
              </p>
              {jobOffers?.job_offers ? (
                <JobOffers jobOffers={jobOffers} />
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <p className="text-lg font-semibold">
                    Няма намерени обяви :(
                  </p>
                </div>
              )}
            </div>
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
