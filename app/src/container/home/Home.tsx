import { FC, Fragment } from "react";
// import TableComponent from "./components/TableComponent";
// import TopRecommendationsChartComponent from "./components/TopRecommendationsChartComponent";
// import CountryBarChartComponent from "./components/CountryBarChartComponent";
// import MoviesByProsperityBubbleChartComponent from "./components/MoviesByProsperityBubbleChartComponent";
// import GenrePopularityOverTimeComponent from "./components/GenrePopularityOverTimeComponent";
import RedirectCard from "./components/RedirectCard";
import { useGlobalState } from "../../pages/GlobalStateProvider";

const Home: FC = () => {
  const { data, userData } = useGlobalState();

  console.log("data: ", data);
  return (
    <Fragment>
      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">
            Добре дошли,{" "}
            {userData.first_name
              ? userData.first_name + " " + userData.last_name
              : "Зареждане..."}
            !
          </p>
          <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">
            Направете първата стъпка към вашето бъдеще!
          </p>
        </div>
      </div>
      <div className="card-container">
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/quiz`}
          title="Кариерни Насоки"
          description="Решете кратък, интерактивен въпросник и открийте вашите кариерни възможности!"
        />
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/contact`}
          title="За Контакт"
          description="Изпитвате трудности в приложението или сте намерили проблем? Нямате притеснения, свържете се с нас и ще Ви съдействаме!"
        />
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/global-stats/1`}
          title="Oбщи Статистики"
          description="Вижте статистики за цялата платформа и потребителите ни!"
        />
        <RedirectCard
          href={`${import.meta.env.BASE_URL}comingsoon`}
          title="Индивидуални Статистики"
          description="Вижте статистики за САМО за ВАС! Разкрийте повече за себе си!"
        />
      </div>
      {/* <div className="grid grid-cols-12 gap-x-6">
        <div className="xxl:col-span-6 col-span-12">
          <div className="xxl:col-span-6 col-span-12">
            <MoviesByProsperityBubbleChartComponent data={hardcodedData} />
            <GenrePopularityOverTimeComponent data={hardcodedData} />
          </div>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <TableComponent data={hardcodedData} />
          <TopRecommendationsChartComponent
            dataOld={hardcodedData}
            data={data}
          />
          <CountryBarChartComponent data={hardcodedData} />
        </div>
      </div> */}
    </Fragment>
  );
};

export default Home;
