import { FullCareerDetails } from "../../quiz/quiz-types";
import { EducationChart } from "./EducationChart";

const Education = ({
  fullCareerDetails
}: {
  fullCareerDetails: FullCareerDetails;
}) => {
  return (
    <div className="box custom-box">
      <div className="box-body space-y-8">
        <div>
          <h5 className="font-semibold text-lg text-primary mb-4">
            Ниво на образование на работещите в професията
          </h5>
          <EducationChart fullCareerDetails={fullCareerDetails} />
        </div>
      </div>
    </div>
  );
};

export default Education;
