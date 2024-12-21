import { FC, Fragment } from "react";
import { DataType } from "../home-types";

import { MoviesByProsperityBubbleChart } from "./Charts";

interface MoviesByProsperityBubbleChartComponentProps {
  data: DataType;
}

const MoviesByProsperityBubbleChartComponent: FC<
  MoviesByProsperityBubbleChartComponentProps
> = ({ data }) => {
  return (
    <Fragment>
      <div className="xl:col-span-6 col-span-12">
        <div className="box custom-box h-[27.75rem]">
          <div className="box-header">
            <div className="box-title">
              Най-успешни филми по Просперитет, IMDb Рейтинг и Боксофис
            </div>
          </div>
          <div className="box-body">
            <div id="bubble-simple">
              <MoviesByProsperityBubbleChart
                sortedMoviesByProsperity={data.sortedMoviesByProsperity}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MoviesByProsperityBubbleChartComponent;
