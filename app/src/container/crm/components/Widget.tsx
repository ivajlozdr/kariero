import { FC, Fragment, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

interface WidgetProps {
  title: string;
  value: number;
  options?: { label: string; value: number }[];
  showSorting?: boolean;
  icon?: string;
}

const Widget: FC<WidgetProps> = ({
  title,
  value,
  options = [],
  showSorting,
  icon
}) => {
  const [selectedLabel, setSelectedLabel] = useState<string>(title);
  const [selectedValue, setSelectedValue] = useState<number>(value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const is1803 = useMediaQuery({ query: "(max-width: 1803px)" });
  const is1488 = useMediaQuery({ query: "(max-width: 1488px)" });

  // Sync selectedValue state with the value prop when it changes
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (label: string, value: number) => {
    setSelectedLabel(label);
    setSelectedValue(value);
  };

  return (
    <Fragment>
      {showSorting && options.length > 0 ? (
        <Fragment>
          <div className="xxl:col-span-3 xl:col-span-3 col-span-12">
            <div className="box custom-box">
              <div className="box-body h-[5.5rem]">
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start">
                      <div
                        className={`flex items-center space-x-${
                          is1803 ? 2 : 1
                        }`}
                      >
                        <p
                          className={`mb-0 text-[#8c9097] dark:text-white/50 ${
                            is1803 &&
                            "truncate overflow-hidden max-w-[130px] whitespace-nowrap text-xs"
                          }`}
                        >
                          {selectedLabel}
                        </p>
                        <div className="hs-dropdown ti-dropdown">
                          <Link
                            to="#"
                            className={`flex items-center ${
                              is1803
                                ? "px-1 py-0.5 text-xs"
                                : "px-0.5 py-0.25 text-[0.70rem]"
                            } font-medium text-primary border border-primary rounded-sm hover:bg-primary/10 transition-all max-h-[1.125rem]`}
                            onClick={toggleDropdown}
                            aria-expanded={isDropdownOpen ? "true" : "false"}
                          >
                            <span className={`${is1488 && "hidden"}`}>
                              Сортирай по
                            </span>
                            <i
                              className={`ri-arrow-${
                                isDropdownOpen ? "up" : "down"
                              }-s-line ${!is1488 && "ml-0.5"} text-sm`}
                            ></i>
                          </Link>
                          <ul
                            className={`hs-dropdown-menu ti-dropdown-menu ${
                              isDropdownOpen ? "block" : "hidden"
                            }`}
                            role="menu"
                          >
                            {options.map(({ label, value }) => (
                              <li key={label}>
                                <Link
                                  onClick={() =>
                                    handleOptionSelect(label, value)
                                  }
                                  className={`ti-dropdown-item ${
                                    selectedLabel === label
                                      ? "active disabled"
                                      : ""
                                  }`}
                                  to="#"
                                >
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`text-[${
                          is1803 ? "1.25rem" : "1.125rem"
                        }] font-semibold`}
                      >
                        {selectedValue}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="avatar avatar-md !rounded-full bg-primary/10 !text-secondary text-[1.125rem]">
                      <i
                        className={`bi ${icon || "bi-info-circle"} text-[${
                          is1803 ? "1rem" : "0.875rem"
                        }] text-primary`}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="xxl:col-span-3 xl:col-span-3 col-span-12">
            <div className="box custom-box">
              <div className="box-body h-[5.5rem]">
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <p
                      className={`mb-0 text-[#8c9097] dark:text-white/50 ${
                        is1803 && "text-xs"
                      }`}
                    >
                      {selectedLabel}
                    </p>
                    <div className="flex items-center">
                      <span
                        className={`text-[${
                          is1803 ? "1.25rem" : "1.125rem"
                        }] font-semibold`}
                      >
                        {selectedValue}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="avatar avatar-md !rounded-full bg-primary/10 !text-secondary text-[1.125rem]">
                      <i
                        className={`bi ${icon || "bi-info-circle"} text-[${
                          is1803 ? "1rem" : "0.875rem"
                        }] text-primary`}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Widget;
