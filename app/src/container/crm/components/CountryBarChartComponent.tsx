import { FC, Fragment } from "react";
import { DataType } from "../home-types";

import { CountryBarChart } from "./Charts";
interface CountryBarChartComponentProps {
  data: DataType;
}

const CountryBarChartComponent: FC<CountryBarChartComponentProps> = ({
  data
}) => {
  return (
    <Fragment>
      <div className="xxl:col-span-12 xl:col-span-6 col-span-12">
        <div className="box">
          <div className="box-header justify-between">
            <div className="box-title">Топ държави с най-много препоръки</div>
          </div>
          <div className="box-body">
            <CountryBarChart topCountries={data.topCountries} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CountryBarChartComponent;
