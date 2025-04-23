import { FC, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoPrimaryLight from "../../../assets/images/brand-logos/kariero-primary-light.svg";
import LogoDarker from "../../../assets/images/brand-logos/kariero-darker.svg";
import LogoGray from "../../../assets/images/brand-logos/kariero-gray.svg";

interface ResetRequestProps {}

const ResetRequest: FC<ResetRequestProps> = () => {
  const [email, setEmail] = useState("");
  const [alerts, setAlerts] = useState<
    { message: string; color: string; icon: JSX.Element }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [colorMode, setColorMode] = useState<"dark" | "light">("light");
  const handlePasswordResetRequest = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/password-reset-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      const result = await response.json();

      if (response.ok) {
        setAlerts([
          {
            message: "Успешно изпратихме имейл за нулиране на паролата!",
            color: "success",
            icon: <i className="ri-check-line"></i>
          }
        ]);
      } else {
        setAlerts([
          {
            message: result.error || "Имейлът не се изпрати успешно.",
            color: "danger",
            icon: <i className="ri-error-warning-fill"></i>
          }
        ]);
      }
    } catch (error) {
      setAlerts([
        {
          message: "Имейлът не се изпрати успешно. Моля опитайте пак по-късно.",
          color: "danger",
          icon: <i className="ri-error-warning-fill"></i>
        }
      ]);
    } finally {
      setIsSubmitting(false);
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
      <div className="min-h-screen flex justify-center items-center">
        <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12">
          <div className="flex justify-center items-center flex-col">
            <div className="mx-[50rem] my-[2rem] flex justify-center">
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
            {/* Box with padding and shadow */}
            <div className="box w-[400px] p-8 bg-white shadow-lg rounded-lg">
              <p className="h5 font-semibold mb-2 text-center">
                Обновяване на парола
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
              <div className="grid gap-y-4">
                <div className="col-span-12">
                  <label
                    htmlFor="reset-email"
                    className="form-label text-default"
                  >
                    Имейл
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control form-control-lg w-full !rounded-md"
                      id="reset-email"
                      placeholder="Попълнете вашият имейл адрес"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-12 grid mt-2">
                  <button
                    className="ti-btn ti-btn-primary w-full py-2"
                    onClick={handlePasswordResetRequest}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Изпращане на имейл..." : "Обновете"}
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                  Имате профил?{" "}
                  <Link
                    to={`${import.meta.env.BASE_URL}signin`}
                    className="text-primary"
                  >
                    Влезте тук!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetRequest;
