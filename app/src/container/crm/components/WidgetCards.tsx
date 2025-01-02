import { FC } from "react";
import { DataType } from "../home-types";
import Widget from "./Widget";

interface WidgetCardsComponentProps {
  data: DataType;
}

const WidgetCardsComponent: FC<WidgetCardsComponentProps> = ({ data }) => {
  const userCount = data?.usersCount[0]?.user_count ?? 0;
  const distinctOccupations = data?.distinctOccupations.count ?? 0;
  const mostRecommendedOccupation =
    data?.topRecommendedOccupations[0]?.title_bg;
  const mostRecommendedOccupationCount =
    data?.topRecommendedOccupations[0]?.recommendation_count;

  return (
    <div className="grid grid-cols-9 gap-x-6">
      <Widget
        title="Общ брой потребители"
        value={userCount}
        icon="bi-person-circle"
      />
      <Widget
        title="Общ брой професии в платформата"
        value={distinctOccupations}
        icon="bx bx-line-chart"
      />
      <Widget
        title="Най-често препоръчвана кариера в платформата"
        value={mostRecommendedOccupation}
        subValue={mostRecommendedOccupationCount}
        icon="bi-briefcase"
      />
    </div>
  );
};

export default WidgetCardsComponent;
