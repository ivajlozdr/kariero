import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.svg";
import desktopdarklogo from "../../../assets/images/brand-logos/desktop-dark.png";

interface ResetRequestProps {}

const ResetRequest: FC<ResetRequestProps> = () => {
  const [email, setEmail] = useState("");
  const [alerts, setAlerts] = useState<
    { message: string; color: string; icon: JSX.Element }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        console.log(result);

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

  return (
    <Fragment>
      <div className="min-h-screen flex justify-center items-center">
        <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12">
          <div className="flex justify-center items-center flex-col">
            {/* Logo outside the box and centered */}
            <div className="mb-4 text-center">
              <Link
                aria-label="anchor"
                to={`${import.meta.env.BASE_URL}app/home/`}
              >
                <img
                  src={desktoplogo}
                  alt="Desktop Logo"
                  className="authentication-brand desktop-logo mb-4 block dark:hidden"
                />
                <img
                  src={desktopdarklogo}
                  alt="Desktop Dark Logo"
                  className="authentication-brand desktop-dark mb-4 hidden dark:block"
                />
              </Link>
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
