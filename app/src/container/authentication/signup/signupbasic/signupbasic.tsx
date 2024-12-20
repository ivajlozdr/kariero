import { FC, Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.svg";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import * as EmailValidator from "email-validator";

interface SignupbasicProps {}

const Signupbasic: FC<SignupbasicProps> = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [passwordshow1, setpasswordshow1] = useState(false);
  const [passwordshow2, setpasswordshow2] = useState(false);

  const [alerts, setAlerts] = useState<
    { message: string; color: string; icon: JSX.Element }[]
  >([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      // Redirect to the app if token exists
      navigate(`${import.meta.env.BASE_URL}dashboards/crm/`);
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setAlerts([
        {
          message: "Всички полета са задължителни!",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    if (!EmailValidator.validate(formData.email)) {
      setAlerts([
        {
          message: "Невалиден формат на имейл адреса.",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setAlerts([
        {
          message: "Паролите не съвпадат!",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    const passwordStrengthRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordStrengthRegex.test(formData.password)) {
      setAlerts([
        {
          message:
            "Паролата трябва да е дълга поне 8 знака и да включва комбинация от главни букви, малки букви и цифри.",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    setAlerts([
      {
        message: "Моля, изчакайте...",
        color: "warning",
        icon: <i className="ri-error-warning-fill"></i>
      }
    ]);

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Нещо се случи! :(");
      }

      // Redirect to the verification page
      navigate(`${import.meta.env.BASE_URL}auth/twostepverification`, {
        state: { email: formData.email }
      });
    } catch (error: any) {
      let errorMessage = "";
      switch (true) {
        case error.message.includes("Duplicate entry"):
          errorMessage = "Потребител с този имейл адрес вече съществува!";
          break;
        default:
          errorMessage = error.message;
          break;
      }
      setAlerts([
        {
          message: errorMessage,
          color: "danger",
          icon: <i className="ri-error-warning-fill"></i>
        }
      ]);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="my-[2.5rem] flex justify-center">
                <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                  <img src={desktoplogo} alt="logo" className="desktop-logo" />
                  <img
                    src={desktopdarklogo}
                    alt="logo"
                    className="desktop-dark"
                  />
                </Link>
              </div>
              <div className="box">
                <div className="box-body !p-[3rem]">
                  <p className="h5 font-semibold mb-2 text-center">
                    Създадете профил
                  </p>
                  <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">
                    Създадете безплатен профил и станете част от нас!
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
                          htmlFor="firstName"
                          className="form-label text-default"
                        >
                          Име
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg w-full !rounded-md"
                          id="firstName"
                          placeholder="име"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div className="xl:col-span-12 col-span-12">
                        <label
                          htmlFor="lastName"
                          className="form-label text-default"
                        >
                          Фамилия
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg w-full !rounded-md"
                          id="lastName"
                          placeholder="фамилия"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-12 col-span-12">
                        <label
                          htmlFor="email"
                          className="form-label text-default"
                        >
                          Имейл
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg w-full !rounded-md"
                          id="email"
                          placeholder="example@noit.eu"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="xl:col-span-12 col-span-12">
                        <label
                          htmlFor="password"
                          className="form-label text-default"
                        >
                          Парола
                        </label>
                        <div className="input-group">
                          <input
                            type={passwordshow1 ? "text" : "password"}
                            className="form-control form-control-lg !rounded-e-none"
                            id="password"
                            placeholder="парола"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                          <button
                            onClick={() => setpasswordshow1(!passwordshow1)}
                            aria-label="button"
                            type="button"
                            className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                            id="button-addon2"
                          >
                            <i
                              className={`${
                                passwordshow1
                                  ? "ri-eye-line"
                                  : "ri-eye-off-line"
                              } align-middle`}
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="xl:col-span-12 col-span-12 mb-2">
                        <label
                          htmlFor="confirmPassword"
                          className="form-label text-default"
                        >
                          Потвърдете паролата
                        </label>
                        <div className="input-group">
                          <input
                            type={passwordshow2 ? "text" : "password"}
                            className="form-control form-control-lg !rounded-e-none"
                            id="confirmPassword"
                            placeholder="потвърдете паролата"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                          />
                          <button
                            aria-label="button"
                            type="button"
                            className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                            onClick={() => setpasswordshow2(!passwordshow2)}
                            id="button-addon21"
                          >
                            <i
                              className={`${
                                passwordshow2
                                  ? "ri-eye-line"
                                  : "ri-eye-off-line"
                              } align-middle`}
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="xl:col-span-12 col-span-12 grid mt-2">
                        <button
                          type="submit"
                          className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10"
                        >
                          Създадете
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                      Имате профил?{" "}
                      <Link
                        to={`${import.meta.env.BASE_URL}auth/signin`}
                        className="text-primary"
                      >
                        Влезте тук!
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

export default Signupbasic;
