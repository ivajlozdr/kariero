import { FC, Fragment, useState } from "react";
import { Category, DataType } from "../home-types";
import { handleTopStatsSortCategory } from "../helper_functions";
import { Treemap } from "./Charts";
interface TreemapComponentProps {
  data: DataType;
}

const TreemapComponent: FC<TreemapComponentProps> = ({ data }) => {
  const [topStatsSortCategory, setTopStatsSortCategory] =
    useState<Category>("Actors");

  const tableCategoryDisplayNames: Record<Category, string> = {
    Directors: "Режисьори",
    Actors: "Актьори",
    Writers: "Сценаристи"
  };

  const getTreemapDataToUse = () => {
    switch (topStatsSortCategory) {
      case "Actors":
        return data.topActors;
      case "Directors":
        return data.topDirectors;
      case "Writers":
        return data.topWriters;
      default:
        return [];
    }
  };

  return (
    <Fragment>
      <div className="xl:col-span-6 col-span-12">
        <div className="box custom-box h-[30rem]">
          <div className="box-header justify-between">
            <div className="box-title">
              Най-често препоръчвани{" "}
              {
                tableCategoryDisplayNames[
                  topStatsSortCategory as keyof typeof tableCategoryDisplayNames
                ]
              }
            </div>
            <div className="flex flex-wrap gap-2">
              <div
                className="inline-flex rounded-md shadow-sm"
                role="group"
                aria-label="Sort By"
              >
                {(["Actors", "Directors", "Writers"] as Category[]).map(
                  (category, index) => (
                    <button
                      key={category}
                      type="button"
                      className={`ti-btn-group !border-0 !text-xs !py-2 !px-3 ${
                        category === topStatsSortCategory
                          ? "ti-btn-primary-full text-white"
                          : "text-[#E74581] dark:text-[#CC3333] bg-[#AF0B48] dark:bg-[#9A110A] bg-opacity-10 dark:bg-opacity-10"
                      } ${
                        index === 0
                          ? "rounded-l-md"
                          : index === 2
                          ? "rounded-r-md"
                          : ""
                      }`}
                      onClick={() =>
                        handleTopStatsSortCategory(
                          category,
                          setTopStatsSortCategory
                        )
                      }
                    >
                      {
                        tableCategoryDisplayNames[
                          category as keyof typeof tableCategoryDisplayNames
                        ]
                      }
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="box-body flex justify-center items-center">
            <div id="treemap-basic" className="w-full">
              <Treemap
                data={getTreemapDataToUse()}
                role={topStatsSortCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TreemapComponent;
