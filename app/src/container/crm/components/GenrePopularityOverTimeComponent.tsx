import { FC, Fragment } from "react";
import { DataType } from "../home-types";
import { generateHeatmapSeriesData } from "../helper_functions";
import { GenrePopularityOverTime } from "./Charts";

interface GenrePopularityOverTimeComponentProps {
  data: DataType;
}

const GenrePopularityOverTimeComponent: FC<
  GenrePopularityOverTimeComponentProps
> = ({ data }) => {
  const seriesDataForHeatmap = generateHeatmapSeriesData(
    data.genrePopularityOverTime
  );

  return (
    <Fragment>
      <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
        <div className="box">
          <div className="box-header !gap-0 !m-0 justify-between">
            <div className="box-title">
              Популярност на жанровете през времето
            </div>
          </div>
          <div className="xl:col-span-6 col-span-12">
            <div className="box custom-box">
              <div className="box-body">
                <div id="heatmap-colorrange">
                  <GenrePopularityOverTime seriesData={seriesDataForHeatmap} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GenrePopularityOverTimeComponent;
