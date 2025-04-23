import { FC, Fragment } from "react";
import RedirectCard from "./components/RedirectCard";
import { useGlobalState } from "../../pages/GlobalStateProvider";
import WidgetCardsComponent from "./components/WidgetCards";
import MostPreferredWorkstyleCards from "./components/MostPreferredWorkstyleCards";

const Home: FC = () => {
  const { userData } = useGlobalState();

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
      <WidgetCardsComponent />
      <MostPreferredWorkstyleCards dataType="platform" />
      <div className="card-container">
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/quiz`}
          title="Кариерни Насоки"
          description="Решете кратък, интерактивен въпросник и открийте вашите кариерни възможности!"
        />
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/global-stats/recommendations`}
          title="Най-препоръчвани Професии"
          description="Открийте кои професии са най-препоръчвани към нашите потребители и кои имат най-голям потенциал за бъдещо развитие!"
        />
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/favourites`}
          title="Любимите Професии"
          description="Открийте кои качества са най-ценени и търсени от работодателите!"
        />{" "}
        <RedirectCard
          href={`${import.meta.env.BASE_URL}app/contact`}
          title="За Контакт"
          description="Изпитвате трудности в приложението или сте намерили проблем? Нямате притеснения, свържете се с нас и ще Ви съдействаме!"
        />
      </div>
    </Fragment>
  );
};

export default Home;
