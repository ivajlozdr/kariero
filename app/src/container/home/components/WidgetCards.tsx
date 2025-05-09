import { FC } from "react";
import Widget from "./Widget";
import { extractWidgetCardData, generateOptions } from "../helper_functions";
import { useGlobalState } from "../../../pages/GlobalStateProvider";

const WidgetCardsComponent: FC = () => {
  const { data } = useGlobalState();
  const widgetData = extractWidgetCardData(data);
  const options = generateOptions("WidgetCardsComponent", "platform", data);
  return (
    <div className="grid xxl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-x-6">
      <Widget
        title="Общ брой потребители"
        value={widgetData.userCount}
        icon="ti ti-users"
      />
      <Widget
        title="Общ брой професии в платформата"
        value={widgetData.distinctOccupations}
        icon="ti ti-trending-up"
      />
      <Widget
        showSorting
        options={options}
        title="Най-препоръчвана професия в платформата"
        value={widgetData.mostRecommendedOccupation}
        subValue={widgetData.mostRecommendedOccupationCount}
        icon="ti ti-briefcase"
      />
    </div>
  );
};

export default WidgetCardsComponent;
