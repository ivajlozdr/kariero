import { FC } from "react";
import { DataType } from "../home-types";
import Widget from "./Widget";
import { extractWidgetCardData, generateOptions } from "../helper_functions";

interface WidgetCardsComponentProps {
  data: DataType;
}

const WidgetCardsComponent: FC<WidgetCardsComponentProps> = ({ data }) => {
  const widgetData = extractWidgetCardData(data);
  const options = generateOptions("WidgetCardsComponent", data);
  return (
    <div className="grid xxl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-x-6">
      <Widget
        title="Общ брой потребители"
        value={widgetData.userCount}
        icon="bi bi-person-circle"
      />
      <Widget
        title="Общ брой професии в платформата"
        value={widgetData.distinctOccupations}
        icon="bx bx-line-chart"
      />
      <Widget
        showSorting
        options={options}
        title="Най-препоръчвани професии в платформата"
        value={widgetData.mostRecommendedOccupation}
        subValue={widgetData.mostRecommendedOccupationCount}
        icon="bi-briefcase"
      />
    </div>
  );
};

export default WidgetCardsComponent;
