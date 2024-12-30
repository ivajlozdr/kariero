import { FC, Fragment } from "react";
import { DataType } from "../home-types";
import Widget from "./Widget";

interface WidgetCardsComponentProps {
  data: DataType;
}

const WidgetCardsComponent: FC<WidgetCardsComponentProps> = ({ data }) => {
  const userCount = data?.usersCount[0]?.user_count ?? 0;

  return (
    <div className="grid grid-cols-12 gap-x-6">
      <Widget
        title="Общ брой потребители"
        value={userCount}
        icon="bi-person-circle"
      />
      <Widget title="Общ брой потребители" value={userCount} />
      <Widget title="Общ брой потребители" value={userCount} />
      <Widget title="Общ брой потребители" value={userCount} />
    </div>
  );
};

export default WidgetCardsComponent;
