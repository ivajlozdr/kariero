import { FC, Fragment, useState, useEffect } from "react";
// import TableComponent from "./components/TableComponent";
// import TopRecommendationsChartComponent from "./components/TopRecommendationsChartComponent";
// import CountryBarChartComponent from "./components/CountryBarChartComponent";
// import MoviesByProsperityBubbleChartComponent from "./components/MoviesByProsperityBubbleChartComponent";
// import GenrePopularityOverTimeComponent from "./components/GenrePopularityOverTimeComponent";
import RedirectCard from "./components/RedirectCard";
import { DataType, UserData } from "./home-types";
import { fetchData } from "./helper_functions";
import WidgetCardsComponent from "./components/WidgetCards";
import MostNeededCards from "./components/MostNeededCards";
import MostPreferredWorkstyleCards from "./components/MostPreferredWorkstyleCards";
import MostSelectedCards from "./components/MostSelectedPreferences";
import TopRecommendedOccupationsAndRelated from "./components/TopRecommendedOccupationsAndRelated";
import TopNeededQualitiesTreemap from "./components/TopNeededQualitiesTreemap";

interface CrmProps {}

const Crm: FC<CrmProps> = () => {
  // State за данни от backend-a
  const [data, setData] = useState<DataType>({
    usersCount: [], // Броя на потребителите
    distinctOccupations: { count: 0, data: [] }, // Уникални професии с техния брой
    topRecommendedOccupations: [], // Най-препоръчвани професии
    topRecommendedRelatedOccupations: [], // Най-препоръчвани свързани професии
    mostNeededAbilities: [], // Най-необходими умения
    mostNeededKnowledge: [], // Най-необходими знания
    mostNeededSkills: [], // Най-необходими способности
    mostNeededTasks: [], // Най-необходими задачи
    mostNeededTechnologySkills: [], // Най-необходими технологични умения
    mostNeededWorkActivities: [], // Най-необходими работни дейности
    mostSelectedPersonalityTypes: [], // Най-избирани типове личност
    mostSelectedWorkEnvironments: [], // Най-избирани работни среди
    mostSelectedJobPriorities: [], // Най-избирани приоритети за работа
    mostSelectedEducationLevels: [], // Най-избирани образователни нива
    mostSelectedCareerGoals: [], // Най-избирани кариерни цели
    mostSelectedJobSatisfactionLevels: [], // Най-избирани нива на удовлетворение от работа
    mostPreferredWorkStyleStructure: [], // Най-предпочитана работна структура
    mostPreferredWorkStyleCollaboration: [], // Най-предпочитан стил на сътрудничество
    mostPreferredWorkStyleWorkEnvironment: [] // Най-предпочитана работна среда
  });

  // State за потребителски данни
  const [userData, setUserData] = useState<UserData>({
    id: 0, // ID на потребителя
    first_name: "", // Име на потребителя
    last_name: "", // Фамилия на потребителя
    email: "" // Имейл на потребителя
  });

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken"); // Вземане на токен от localStorage или sessionStorage
    if (token) {
      fetchData(token, setUserData, setData); // Извличане на данни с помощта на fetchData функцията
      console.log("fetching"); // Лог за следене на извличането на данни
    }
  }, []); // Празен масив като зависимост, за да се извика само веднъж при рендиране на компонента

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
            Track your sales activity, leads and deals here.
          </p>
        </div>
      </div>
      <WidgetCardsComponent data={data} />
      <div
        className="grid grid-areas-layout gap-x-6 auto-rows-[min-content]"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: `
            "accordion preferred"
            "accordion selected" 
          `
        }}
      >
        <div style={{ gridArea: "accordion" }}>
          <MostNeededCards data={data} />
        </div>
        <div style={{ gridArea: "preferred" }}>
          <MostPreferredWorkstyleCards data={data} />
        </div>
        <div style={{ gridArea: "selected" }}>
          <MostSelectedCards data={data} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-6">
          <TopRecommendedOccupationsAndRelated data={data} />
        </div>
        <div className="col-span-6">
          <TopNeededQualitiesTreemap data={data} />
        </div>
      </div>
      <div className="card-container">
        <RedirectCard
          href="../app/quiz"
          title="Кариерни Насоки"
          description="Решете кратък, интерактивен въпросник и открийте вашите кариерни възможности!"
        />
        <RedirectCard
          href="../app/contact"
          title="За Контакт"
          description="Изпитвате трудности в приложението или сте намерили проблем? Нямате притеснения, свържете се с нас и ще Ви съдействаме!"
        />
        <RedirectCard
          href="../app/comingsoon"
          title="Индивидуални Статистики"
          description="Вижте статистики за САМО за ВАС! Разкрийте повече за себе си!"
        />
        <RedirectCard
          href="../app/comingsoon"
          title="Очаквайте Скоро"
          description="Имаме планове да разширим платформата все повече и все повече! Очаквайте още повече страници."
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

export default Crm;
