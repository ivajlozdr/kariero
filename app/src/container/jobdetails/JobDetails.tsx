import { FC, Fragment, useState, useEffect } from "react";
import Pageheader from "../../components/common/pageheader/pageheader";
import { useLocation } from "react-router-dom";
import PaginatedTasks from "./components/Tasks";
import RelatedOccupations from "./components/RelatedOccupations";
import { FullCareerDetails } from "../quiz/quiz-types";
import JobListings from "./components/JobListings";
import OccupationDescription from "./components/OccupationDescription";
import Share from "./components/Share";
import OccupationTitleCard from "./components/OccupationTitleCard";
import Education from "./components/Education";
import Technologies from "./components/Technologies";

interface JobDetailsProps {}

const JobDetails: FC<JobDetailsProps> = () => {
  const location = useLocation();
  const [fullCareerDetails, setFullCareerDetails] = useState<FullCareerDetails>(
    () => {
      const savedDetails = localStorage.getItem("fullCareerDetails");
      return savedDetails
        ? JSON.parse(savedDetails)
        : location.state?.fullCareerDetails;
    }
  );

  useEffect(() => {
    if (fullCareerDetails) {
      localStorage.setItem(
        "fullCareerDetails",
        JSON.stringify(fullCareerDetails)
      );
    }
  }, [fullCareerDetails]);

  console.log("fullCareerDetails: ", fullCareerDetails);
  return (
    <Fragment>
      <Pageheader
        currentpage={"Детайли за " + fullCareerDetails.translated.title}
        activepage="Кариери"
        mainpage={fullCareerDetails.translated.title}
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
                Обяви за {fullCareerDetails.translated.title}
              </h4>
              <p className="!text-defaulttextcolor text-defaultsize mb-4">
                Разгледайте различни обяви.
              </p>
              <JobListings fullCareerDetails={fullCareerDetails} />
            </div>
          </div>
          <div className="xxl:col-span-4 col-span-12">
            <PaginatedTasks tasks={fullCareerDetails.translated.tasks} />
            <RelatedOccupations fullCareerDetails={fullCareerDetails} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JobDetails;
