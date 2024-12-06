import { FC, Fragment, useCallback, useRef, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.svg";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";

interface TwostepbasicProps {}

const Twostepbasic: FC<TwostepbasicProps> = () => {
  const inputRefs: any = {
    one: useRef(null),
    two: useRef(null),
    three: useRef(null),
    four: useRef(null),
    five: useRef(null),
    six: useRef(null)
  };

  const [alerts, setAlerts] = useState<
    { message: string; color: string; icon: JSX.Element }[]
  >([]);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state as { email: string };

  useEffect(() => {
    // Check if user is already logged in
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      // Redirect to the app if token exists
      navigate(`${import.meta.env.BASE_URL}dashboards/crm/`);
    }
  }, [navigate]);

  const handleInputChange = useCallback(
    (currentId: any, nextId: any) => {
      const currentInput = inputRefs[currentId].current;

      if (currentInput && currentInput.value.length === 1) {
        const nextInput = inputRefs[nextId] ? inputRefs[nextId].current : null;

        if (nextInput) {
          nextInput.focus();
        }
      }
    },
    [inputRefs]
  );

  const handleVerification = async () => {
    const verificationCode =
      inputRefs.one.current.value +
      inputRefs.two.current.value +
      inputRefs.three.current.value +
      inputRefs.four.current.value +
      inputRefs.five.current.value +
      inputRefs.six.current.value;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, verificationCode })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Неуспешно потвърждение!");
      }

      const data = await response.json();

      setAlerts([
        {
          message: data.message,
          color: "success",
          icon: <i className="ri-check-line"></i>
        }
      ]);

      setTimeout(() => {
        navigate(`${import.meta.env.BASE_URL}auth/signin`);
      }, 1000);
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

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/resend-code`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Неуспешно повторно изпращане!");
      }

      const data = await response.json();

      setAlerts([
        {
          message: data.message,
          color: "success",
          icon: <i className="ri-check-line"></i>
        }
      ]);
    } catch (error: any) {
      setAlerts([
        {
          message: error.message,
          color: "danger",
          icon: <i className="ri-error-warning-fill"></i>
        }
      ]);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Fragment>
      <div className="container h-screen flex flex-col items-center justify-center">
        <div className="my-8 flex justify-center">
          <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
            <img src={desktoplogo} alt="logo" className="desktop-logo" />
            <img src={desktopdarklogo} alt="logo" className="desktop-dark" />
          </Link>
        </div>
        <div className="box w-[31rem] max-w-[36rem] p-12 bg-white shadow-lg rounded-lg">
          <div className="box-body p-12">
            <p className="font-semibold mb-2 text-center text-xl">
              Потвърдете, че сте вие.
            </p>
            <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">
              Попълнете 4 цифреният код, изпратен на вашата поща.
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
              <div className="xl:col-span-12 col-span-12 mb-2">
                <div className="flex justify-center gap-2 mb-4">
                  <div className="col-span-3 px-1">
                    <input
                      type="text"
                      className="!px-0 !w-16 !h-16 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]"
                      required
                      id="one"
                      maxLength={1}
                      onChange={() => handleInputChange("one", "two")}
                      ref={inputRefs.one}
                    />
                  </div>
                  <div className="col-span-3 px-1">
                    <input
                      type="text"
                      className="!px-0 !w-16 !h-16 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]"
                      required
                      id="two"
                      maxLength={1}
                      onChange={() => handleInputChange("two", "three")}
                      ref={inputRefs.two}
                    />
                  </div>
                  <div className="col-span-3 px-1">
                    <input
                      type="text"
                      className="!px-0 !w-16 !h-16 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]"
                      required
                      id="three"
                      maxLength={1}
                      onChange={() => handleInputChange("three", "four")}
                      ref={inputRefs.three}
                    />
                  </div>
                  <div className="col-span-3 px-1">
                    <input
                      type="text"
                      className="!px-0 !w-16 !h-16 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]"
                      required
                      id="four"
                      maxLength={1}
                      onChange={() => handleInputChange("four", "five")}
                      ref={inputRefs.four}
                    />
                  </div>
                  <div className="col-span-3 px-1">
                    <input
                      type="text"
                      className="!px-0 !w-16 !h-16 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]"
                      required
                      id="five"
                      maxLength={1}
                      onChange={() => handleInputChange("five", "six")}
                      ref={inputRefs.five}
                    />
                  </div>
                  <div className="col-span-3 px-1">
                    <input
                      type="text"
                      className="!px-0 !w-16 !h-16 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]"
                      required
                      id="six"
                      maxLength={1}
                      onChange={() => handleInputChange("six", "nextInputId")}
                      ref={inputRefs.six}
                    />
                  </div>
                </div>
                <div className="form-check mt-2 mb-0 !ps-0">
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Не получихте код?
                    <button
                      onClick={handleResendCode}
                      className="text-primary ms-2 inline-block"
                      disabled={isResending}
                    >
                      {isResending ? "Изпращане..." : "Прати отново"}
                    </button>
                  </label>
                </div>
              </div>
              <div className="xl:col-span-12 col-span-12 grid mt-2">
                <button
                  onClick={handleVerification}
                  className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10"
                >
                  Потвърдете
                </button>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4 text-danger">
                <sup>
                  <i className="ri-asterisk"></i>
                </sup>
                Не споделяйте този код със никого!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Twostepbasic;
