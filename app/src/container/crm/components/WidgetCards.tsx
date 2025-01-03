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
  const mostRecommendedRelatedOccupation =
    data?.topRecommendedRelatedOccupations[0]?.name_bg;
  const mostRecommendedRelatedOccupationCount =
    data?.topRecommendedRelatedOccupations[0]?.recommendation_count;
  const options = [
    {
      label: "Най-препоръчвани професии в платформата",
      value: mostRecommendedOccupation,
      subValue: mostRecommendedOccupationCount ?? 0
    },
    {
      label: "Най-препоръчвани подобни професии в платформата",
      value: mostRecommendedRelatedOccupation,
      subValue: mostRecommendedRelatedOccupationCount ?? 0
    }
  ];
  return (
    <div className="grid xxl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-x-6">
      <Widget
        title="Общ брой потребители"
        value={userCount}
        icon="bi bi-person-circle"
      />
      <Widget
        title="Общ брой професии в платформата"
        value={distinctOccupations}
        icon="bx bx-line-chart"
      />
      <Widget
        showSorting
        options={options}
        title="Най-препоръчвани професии в платформата"
        value={mostRecommendedOccupation}
        subValue={mostRecommendedOccupationCount}
        icon="bi-briefcase"
      />
    </div>
  );
};

export default WidgetCardsComponent;
