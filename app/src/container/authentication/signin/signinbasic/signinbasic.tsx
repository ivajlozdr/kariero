import { FC, Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoPrimaryLight from "../../../../assets/images/brand-logos/kariero-primary-light.svg";
import LogoDarker from "../../../../assets/images/brand-logos/kariero-darker.svg";
import LogoGray from "../../../../assets/images/brand-logos/kariero-gray.svg";

interface SigninbasicProps {}

const Signinbasic: FC<SigninbasicProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [passwordShow, setPasswordShow] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [colorMode, setColorMode] = useState<"dark" | "light">("light");
  const [alerts, setAlerts] = useState<
    { message: string; color: string; icon: JSX.Element }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");

      if (token) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/token-validation`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ token })
            }
          );

          if (!response.ok) {
            throw new Error("Token validation failed");
          }

          const result = await response.json();

          if (result.valid) {
            navigate(`${import.meta.env.BASE_URL}app/home`);
          } else {
            console.log("Invalid token");
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
            navigate("/signin");
          }
        } catch (error) {
          console.error("Error validating token:", error);
          navigate("/signin");
        }
      } else {
        navigate("/signin");
      }
    };

    checkTokenValidity();
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setAlerts([
        {
          message: "Всички полета са задължителни!",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...formData, rememberMe })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      console.log("response: ", data);
      setAlerts([
        {
          message: "Успешно влизане!",
          color: "success",
          icon: <i className="ri-check-line"></i>
        }
      ]);

      if (rememberMe) {
        localStorage.setItem("authToken", data.token);
      } else {
        sessionStorage.setItem("authToken", data.token);
      }

      navigate(`${import.meta.env.BASE_URL}app/home`);
    } catch (error: any) {
      setAlerts([
        {
          message: error.message,
          color: "danger",
          icon: <i className="ri-error-warning-fill"></i>
        }
      ]);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("karierodarktheme")
      ? "dark"
      : "light";
    setColorMode(storedTheme);
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="my-[2rem] flex justify-center">
                <div className="relative group">
                  <img
                    src={colorMode === "dark" ? LogoDarker : LogoGray}
                    alt="logo"
                    className="transition-all duration-100 transform opacity-100 scale-50 group-hover:scale-70 group-hover:opacity-0"
                  />
                  <img
                    src={colorMode === "dark" ? LogoPrimaryLight : LogoGray}
                    alt="logo-hover"
                    className="absolute top-0 left-0 transition-all duration-100 transform opacity-0 scale-50 group-hover:scale-[0.7] group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="box">
                <div className="box-body !p-[3rem]">
                  <p className="h5 font-semibold mb-2 text-center">
                    Влезте във вашия профил
                  </p>
                  <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">
                    Добре дошли отново!
                  </p>
                  {alerts.map((alert, idx) => (
                    <div
                      className={`alert alert-${alert.color} flex items-center`}
                      role="alert"
                      key={idx}
                    >
                      {alert.icon}
                      <div>{alert.message}</div>
                    </div>
                  ))}
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-12 gap-y-4">
                      <div className="xl:col-span-12 col-span-12">
                        <label
                          htmlFor="signin-email"
                          className="form-label text-default"
                        >
                          Имейл
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg w-full !rounded-md"
                          id="email"
                          placeholder="example@noit.eu"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-12 col-span-12 mb-2">
                        <label
                          htmlFor="password"
                          className="form-label text-default block"
                        >
                          Парола
                          <Link
                            to={`${import.meta.env.BASE_URL}resetpassword`}
                            className="ltr:float-right rtl:float-left text-danger"
                          >
                            Забравена парола?
                          </Link>
                        </label>
                        <div className="input-group">
                          <input
                            type={passwordShow ? "text" : "password"}
                            className="form-control form-control-lg !rounded-s-md"
                            id="password"
                            placeholder="Парола"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                          <button
                            onClick={() => setPasswordShow(!passwordShow)}
                            aria-label="button"
                            className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                            type="button"
                            id="button-addon2"
                          >
                            <i
                              className={`${
                                passwordShow ? "ri-eye-line" : "ri-eye-off-line"
                              } align-middle`}
                            ></i>
                          </button>
                        </div>
                        <div className="mt-2">
                          <div className="form-check !ps-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="defaultCheck1"
                              //id="rememberMe"
                              checked={rememberMe}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label text-[#8c9097] dark:text-white/50 font-normal"
                              htmlFor="defaultCheck1"
                            >
                              Запомни парола?
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="xl:col-span-12 col-span-12 grid mt-2">
                        <button
                          type="submit"
                          className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10"
                        >
                          Влезте
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                      Нямате профил?{" "}
                      <Link
                        to={`${import.meta.env.BASE_URL}signup`}
                        className="text-primary"
                      >
                        Създадете тук!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signinbasic;
