import Countdown from "react-countdown";
// import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>Готово!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <>
        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6">
          <div className="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md">
            <p className="mb-1 text-[0.75rem] opacity-[0.5]">ДНИ</p>
            <h4 className="font-semibold mb-0 text-[1.5rem]">{days}</h4>
          </div>
        </div>
        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6">
          <div className="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md">
            <p className="mb-1 text-[0.75rem] opacity-[0.5]">ЧАСА</p>
            <h4 className="font-semibold mb-0 text-[1.5rem]">{hours}</h4>
          </div>
        </div>
        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6">
          <div className="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md">
            <p className="mb-1 text-[0.75rem] opacity-[0.5]">МИНУТИ</p>
            <h4 className="font-semibold mb-0 text-[1.5rem]">{minutes}</h4>
          </div>
        </div>
        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-3 sm:col-span-3 col-span-6">
          <div className="p-3 border-2 border-dashed border-defaultborder dark:border-defaultborder/10 rounded-md">
            <p className="mb-1 text-[0.75rem] opacity-[0.5]">СЕКУНДИ</p>
            <h4 className="font-semibold mb-0 text-[1.5rem]">{seconds}</h4>
          </div>
        </div>
      </>
    );
  }
};

export function DayCounter() {
  return <Countdown date={Date.now() + 67000000} renderer={rendering} />;
}
