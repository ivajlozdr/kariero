import { FC, Fragment } from "react";
import { DataType } from "../home-types";
import Widget from "./Widget";

interface WidgetCardsComponentProps {
  data: DataType;
}

const WidgetCardsComponent: FC<WidgetCardsComponentProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-12 gap-x-6">
      <Widget
        title="Общ брой потребители"
        value={data.usersCount[0].user_count}
        icon="bi-person-circle"
      />
      <Widget
        title="Общ брой потребители"
        value={data.usersCount[0].user_count}
      />
      <Widget
        title="Общ брой потребители"
        value={data.usersCount[0].user_count}
      />
      <Widget
        title="Общ брой потребители"
        value={data.usersCount[0].user_count}
      />
    </div>
  );
};

export default WidgetCardsComponent;
