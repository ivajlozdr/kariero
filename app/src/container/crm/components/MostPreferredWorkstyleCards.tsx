import { FC } from "react";
import { DataType } from "../home-types";
import Widget from "./Widget";

interface WidgetCardsComponentProps {
  data: DataType;
}

type CategoryKey =
  | "mostNeededAbilities"
  | "mostNeededKnowledge"
  | "mostNeededSkills"
  | "mostNeededTasks"
  | "mostNeededTechnologySkills"
  | "mostNeededWorkActivities";

const MostPreferredWorkstyleCards: FC<WidgetCardsComponentProps> = ({
  data
}) => {
  return (
    <div className="box custom-box">
      <div className="box-body !p-0">
        <div className="grid grid-cols-9 gap-x-6">
          <div className="xl:col-span-3 col-span-12 border-e border-dashed dark:border-defaultborder/10">
            <div className="flex flex-wrap items-start p-6">
              <div className="me-4 leading-none">
                <span className="avatar avatar-md !rounded-full !bg-primary shadow-sm">
                  <i className="ti ti-package text-[1.125rem]"></i>
                </span>
              </div>
              <div className="flex-grow">
                <h5 className="font-semibold ">45,280</h5>
                <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">
                  Total Products
                </p>
              </div>
              <div>
                <span className="badge bg-success/10 text-success">
                  <i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>
                  1.31%
                </span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12 border-e border-dashed dark:border-defaultborder/10">
            <div className="flex flex-wrap items-start p-6">
              <div className="me-4 leading-none">
                <span className="avatar avatar-md !rounded-full !bg-primary shadow-sm">
                  <i className="ti ti-package text-[1.125rem]"></i>
                </span>
              </div>
              <div className="flex-grow">
                <h5 className="font-semibold ">45,280</h5>
                <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">
                  Total Products
                </p>
              </div>
              <div>
                <span className="badge bg-success/10 text-success">
                  <i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>
                  1.31%
                </span>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12 border-e border-dashed dark:border-defaultborder/10">
            <div className="flex flex-wrap items-start p-6">
              <div className="me-4 leading-none">
                <span className="avatar avatar-md !rounded-full !bg-primary shadow-sm">
                  <i className="ti ti-package text-[1.125rem]"></i>
                </span>
              </div>
              <div className="flex-grow">
                <h5 className="font-semibold ">45,280</h5>
                <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">
                  Total Products
                </p>
              </div>
              <div>
                <span className="badge bg-success/10 text-success">
                  <i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>
                  1.31%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPreferredWorkstyleCards;
