import { FC } from "react";
import { Link } from "react-router-dom";

const Share: FC = () => {
  return (
    <div className="box custom-box  !bg-primary/10 !border-0 !shadow-none">
      <div className="box-body">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-6 col-span-12">
            <h5 className="font-semibold mb-0">
              🖐 Искате да споделите тази кариера с някого?
            </h5>
          </div>
          <div className="lg:col-span-6 col-span-12 text-end">
            <Link
              to="#"
              className="ti-btn ti-btn-success-full ti-btn-lg dark:!border-defaultborder/10"
            >
              <i className="ri-share-line me-2"></i>Споделете
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
