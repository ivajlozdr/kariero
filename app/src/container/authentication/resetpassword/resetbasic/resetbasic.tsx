import { FC, Fragment, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.svg";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";

interface ResetbasicProps {}

const Resetbasic: FC<ResetbasicProps> = () => {
  const [passwordShow2, setPasswordShow2] = useState(false);
  const [passwordShow3, setPasswordShow3] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alerts, setAlerts] = useState<
    { message: string; color: string; icon: JSX.Element }[]
  >([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordStrengthRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  const { token } = useParams(); // Assuming the token is passed in the URL as a parameter
  console.log("token: ", token);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
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
        console.log("result: ", result);
        if (!result.valid) navigate("/signin");
      } catch (error) {
        console.error("Error validating token:", error);
        navigate("/signin");
      }
    };

    validateToken();
  }, [token, navigate]);

  const handlePasswordReset = async () => {
    if (!newPassword || !confirmPassword) {
      setAlerts([
        {
          message: "Полетата за пароли не могат да бъдат празни!",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    if (newPassword !== confirmPassword) {
      setAlerts([
        {
          message: "Паролите не съвпадат!",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    if (!passwordStrengthRegex.test(newPassword)) {
      setAlerts([
        {
          message: "Паролата не отговаря на изискванията за сигурност.",
          color: "danger",
          icon: <i className="ri-error-warning-line"></i>
        }
      ]);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/password-reset`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token, // The token from the URL
            newPassword // New password to reset
          })
        }
      );

      const result = await response.json();

      if (response.ok) {
        setAlerts([
          ...alerts,
          {
            message: "Паролата е успешно променена! Пренасочване към вход...",
            color: "success",
            icon: <i className="ri-check-line"></i>
          }
        ]);
        navigate("/signin");
      } else {
        setAlerts([
          ...alerts,
          {
            message: result.error || "Възникна грешка при промяна на паролата.",
            color: "danger",
            icon: <i className="ri-error-warning-fill"></i>
          }
        ]);
      }
    } catch (error) {
      setAlerts([
        ...alerts,
        {
          message: "Неуспешна промяна на паролата. Моля, опитайте по-късно.",
          color: "danger",
          icon: <i className="ri-error-warning-fill"></i>
        }
      ]);
    } finally {
      setIsSubmitting(false);
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
                <Link to={`${import.meta.env.BASE_URL}app/home/`}>
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
                    Обновяване на паролата
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
                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label
                        htmlFor="reset-newpassword"
                        className="form-label text-default"
                      >
                        Нова парола
                      </label>
                      <div className="input-group">
                        <input
                          type={passwordShow2 ? "text" : "password"}
                          className="form-control form-control-lg !rounded-e-none"
                          id="reset-newpassword"
                          placeholder="нова парола"
                          value={newPassword} // Bind value to the state
                          onChange={(e) => setNewPassword(e.target.value)} // Capture changes in input
                        />
                        <button
                          onClick={() => setPasswordShow2(!passwordShow2)}
                          aria-label="button"
                          className="ti-btn ti-btn-light !mb-0 !rounded-s-none"
                          type="button"
                          id="button-addon21"
                        >
                          <i
                            className={`${
                              passwordShow2 ? "ri-eye-line" : "ri-eye-off-line"
                            } align-middle`}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label
                        htmlFor="reset-confirmpassword"
                        className="form-label text-default "
                      >
                        Потвърдете паролата
                      </label>
                      <div className="input-group">
                        <input
                          type={passwordShow3 ? "text" : "password"}
                          className="form-control form-control-lg !rounded-e-none"
                          id="reset-confirmpassword"
                          placeholder="потвърдете паролата"
                          value={confirmPassword} // Bind value to the state
                          onChange={(e) => setConfirmPassword(e.target.value)} // Capture changes in input
                        />
                        <button
                          onClick={() => setPasswordShow3(!passwordShow3)}
                          aria-label="button"
                          className="ti-btn ti-btn-light !mb-0 !rounded-s-none"
                          type="button"
                          id="button-addon22"
                        >
                          <i
                            className={`${
                              passwordShow3 ? "ri-eye-line" : "ri-eye-off-line"
                            }  align-middle`}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid mt-2">
                      <button
                        className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10"
                        onClick={handlePasswordReset}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Изпращане..." : "Обновяване"}
                      </button>
                    </div>
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

export default Resetbasic;
