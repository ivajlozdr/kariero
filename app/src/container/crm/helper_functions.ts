// ==============================
// Импортиране на типове и интерфейси
// ==============================
import {
  NotificationState,
  NotificationType
} from "../../components/common/notification/Notification";
import {
  FilteredTableData,
  DirectorData,
  ActorData,
  WriterData,
  GenrePopularityData,
  HeatmapData,
  MovieProsperityData,
  MovieData,
  Category,
  DataType,
  Option,
  TopRecommendedOccupation
} from "./home-types";

// ==============================
// Type Guards
// ==============================

/**
 * Проверява дали даден обект е от тип DirectorData.
 *
 * @param {any} item - Обектът за проверка.
 * @returns {boolean} - Вярно, ако обектът е DirectorData.
 */
export const isDirector = (item: any): item is DirectorData =>
  item && "director" in item;

/**
 * Проверява дали даден обект е от тип ActorData.
 *
 * @param {any} item - Обектът за проверка.
 * @returns {boolean} - Вярно, ако обектът е ActorData.
 */
export const isActor = (item: any): item is ActorData =>
  item && "actor" in item;

/**
 * Проверява дали даден обект е от тип WriterData.
 *
 * @param {any} item - Обектът за проверка.
 * @returns {boolean} - Вярно, ако обектът е WriterData.
 */
export const isWriter = (item: any): item is WriterData =>
  item && "writer" in item;

// ==============================
// Функции за работа с данни
// ==============================

/**
 * Извлича данни от API за платформата и ги запазва в състоянието.
 *
 * @param {string} token - Токен за удостоверяване.
 * @param {React.Dispatch<React.SetStateAction<any>>} setUserData - Функция за задаване на потребителски данни.
 * @param {React.Dispatch<React.SetStateAction<any>>} setData - Функция за задаване на общи данни.
 * @throws {Error} - Хвърля грешка, ако заявката е неуспешна.
 */
export const fetchData = async (
  token: string,
  setUserData: React.Dispatch<React.SetStateAction<any>>,
  setData: React.Dispatch<React.SetStateAction<any>>
): Promise<void> => {
  try {
    // Fetch user data independently
    fetch(`${import.meta.env.VITE_API_BASE_URL}/user-data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((userData) => setUserData(userData)) // Set userData independently here
      .catch((error) => console.error("Error fetching user data:", error));

    // Fetch statistics data independently
    const endpoints = [
      { key: "usersCount", endpoint: "/stats/platform/users-count" },
      {
        key: "distinctOccupations",
        endpoint: "/stats/platform/distinct-occupations-with-count"
      },
      {
        key: "topRecommendedOccupations",
        endpoint: "/stats/platform/top-recommended-occupations?limit=50"
      },
      {
        key: "topRecommendedRelatedOccupations",
        endpoint: "/stats/platform/top-recommended-related-occupations?limit=50"
      },
      {
        key: "mostNeededAbilities",
        endpoint: "/stats/platform/most-needed-abilities?limit=2"
      },
      {
        key: "mostNeededKnowledge",
        endpoint: "/stats/platform/most-needed-knowledge?limit=2"
      },
      {
        key: "mostNeededSkills",
        endpoint: "/stats/platform/most-needed-skills?limit=2"
      },
      {
        key: "mostNeededTasks",
        endpoint: "/stats/platform/most-needed-tasks?limit=2"
      },
      {
        key: "mostNeededTechnologySkills",
        endpoint: "/stats/platform/most-needed-technology-skills?limit=2"
      },
      {
        key: "mostNeededWorkActivities",
        endpoint: "/stats/platform/most-needed-work-activities?limit=2"
      },
      {
        key: "mostSelectedPersonalityTypes",
        endpoint: "/stats/platform/most-selected-personality-types?limit=2"
      },
      {
        key: "mostSelectedWorkEnvironments",
        endpoint: "/stats/platform/most-selected-work-environments?limit=2"
      },
      {
        key: "mostSelectedJobPriorities",
        endpoint: "/stats/platform/most-selected-job-priorities?limit=2"
      },
      {
        key: "mostSelectedEducationLevels",
        endpoint: "/stats/platform/most-selected-education-levels?limit=2"
      },
      {
        key: "mostSelectedCareerGoals",
        endpoint: "/stats/platform/most-selected-career-goals?limit=2"
      },
      {
        key: "mostSelectedJobSatisfactionLevels",
        endpoint:
          "/stats/platform/most-selected-job-satisfaction-levels?limit=2"
      },
      {
        key: "mostPreferredWorkStyleStructure",
        endpoint: "/stats/platform/most-preferred-workstyle-structure?limit=2"
      },
      {
        key: "mostPreferredWorkStyleCollaboration",
        endpoint:
          "/stats/platform/most-preferred-workstyle-collaboration?limit=2"
      },
      {
        key: "mostPreferredWorkStyleWorkEnvironment",
        endpoint:
          "/stats/platform/most-preferred-workstyle-work-environment?limit=2"
      }
    ];

    // Loop over each endpoint, fetch data, and update state independently
    endpoints.forEach(({ key, endpoint }) => {
      fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setData((prevState: DataType) => ({
            ...prevState,
            [key]: data
          }));
        })
        .catch((error) => console.error(`Error fetching ${key}:`, error));
    });
  } catch (error) {
    console.error("Error in fetchData:", error);
    throw error;
  }
};

/**
 * Показва известие.
 *
 * @param {React.Dispatch<React.SetStateAction<NotificationState | null>>} setNotification - Функция за задаване на състояние на уведомлението.
 * @param {string} message - Съобщението, което ще се покаже в уведомлението.
 * @param {NotificationType} type - Типът на уведомлението (например "success", "error" или "warning").
 * @returns {void} Няма връщана стойност.
 */
export const showNotification = (
  setNotification: React.Dispatch<
    React.SetStateAction<NotificationState | null>
  >,
  message: string,
  type: NotificationType
) => {
  setNotification({ message, type });
};

/**
 * Проверява дали токенът, съхранен в localStorage или sessionStorage, е валиден,
 * и връща URL за пренасочване, ако токенът не е валиден.
 *
 * @async
 * @function checkTokenValidity
 * @returns {Promise<string | null>} - Връща URL за пренасочване или null, ако токенът е валиден.
 * @throws {Error} - Хвърля грешка, ако заявката за проверка на токена е неуспешна.
 */
export const checkTokenValidity = async (): Promise<string | null> => {
  // Извличане на токена от localStorage или sessionStorage
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  if (!token) {
    // Ако няма намерен токен, връща URL за пренасочване
    return "/signin";
  }

  try {
    // Изпращане на заявка за валидиране на токена
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/token-validation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token }) // Предаване на токена в тялото на заявката
      }
    );

    const data = await response.json(); // Извличане на отговора като JSON

    if (!data.valid) {
      // Ако "valid" в отговора е false, връща URL за пренасочване
      console.warn("Token is invalid, redirecting to /signin...");
      return "/signin";
    }

    return null; // Токенът е валиден, няма нужда от пренасочване
  } catch (error) {
    // Обработка на грешки при валидирането на токена
    console.error("Error validating token:", error);
    return "/signin"; // Пренасочване към страницата за вход
  }
};

export function generateOptions(componentName: string, data: any): Option[] {
  let options: Option[];

  switch (componentName) {
    case "MostPreferredWorkstyleCards": {
      const mostPreferredWorkStyleWorkEnvironment =
        data?.mostPreferredWorkStyleWorkEnvironment[0]?.preference;
      const mostPreferredWorkStyleWorkEnvironmenCount =
        data?.mostPreferredWorkStyleWorkEnvironment[0]?.occurrence_count;
      const mostPreferredWorkStyleCollaboration =
        data?.mostPreferredWorkStyleCollaboration[0]?.preference;
      const mostPreferredWorkStyleCollaborationCount =
        data?.mostPreferredWorkStyleCollaboration[0]?.occurrence_count;
      const mostPreferredWorkStyleStructure =
        data?.mostPreferredWorkStyleStructure[0]?.preference;
      const mostPreferredWorkStyleStructureCount =
        data?.mostPreferredWorkStyleStructure[0]?.occurrence_count;

      options = [
        {
          label: "Предпочитание за работна атмосфера",
          name: mostPreferredWorkStyleWorkEnvironment,
          value: mostPreferredWorkStyleWorkEnvironmenCount ?? 0,
          icon: "ti ti-home-eco"
        },
        {
          label: "Предпочитание за колаборация",
          name: mostPreferredWorkStyleCollaboration,
          value: mostPreferredWorkStyleCollaborationCount ?? 0,
          icon: "ti ti-users-group"
        },
        {
          label: "Предпочитание за работна структура",
          name: mostPreferredWorkStyleStructure,
          value: mostPreferredWorkStyleStructureCount ?? 0,
          icon: "ti ti-hierarchy"
        }
      ];
      break;
    }
    case "MostSelectedCards": {
      const mostSelectedWorkEnvironment =
        data?.mostSelectedWorkEnvironments[0]?.preference || "Няма данни";
      const mostSelectedWorkEnvironmentCount =
        data?.mostSelectedWorkEnvironments[0]?.occurrence_count ?? 0;
      const mostSelectedPersonalityTypes =
        data?.mostSelectedPersonalityTypes[0]?.preference || "Няма данни";
      const mostSelectedPersonalityTypesCount =
        data?.mostSelectedPersonalityTypes[0]?.occurrence_count ?? 0;
      const mostSelectedJobSatisfaction =
        data?.mostSelectedJobSatisfactionLevels[0]?.preference || "Няма данни";
      const mostSelectedJobSatisfactionCount =
        data?.mostSelectedJobSatisfactionLevels[0]?.occurrence_count ?? 0;
      const mostSelectedJobPriorities =
        data?.mostSelectedJobPriorities[0]?.preference || "Няма данни";
      const mostSelectedJobPrioritiesCount =
        data?.mostSelectedJobPriorities[0]?.occurrence_count ?? 0;
      const mostSelectedEducationLevel =
        data?.mostSelectedEducationLevels[0]?.preference || "Няма данни";
      const mostSelectedEducationLevelCount =
        data?.mostSelectedEducationLevels[0]?.occurrence_count ?? 0;
      const mostSelectedCareerGoals =
        data?.mostSelectedCareerGoals[0]?.preference || "Няма данни";
      const mostSelectedCareerGoalsCount =
        data?.mostSelectedCareerGoals[0]?.occurrence_count ?? 0;

      options = [
        {
          label: "Предпочитание за работна среда",
          name: mostSelectedWorkEnvironment,
          value: mostSelectedWorkEnvironmentCount,
          icon: "ti ti-buildings"
        },
        {
          label: "Най-срещана характеристика на личността",
          name: mostSelectedPersonalityTypes,
          value: mostSelectedPersonalityTypesCount,
          icon: "ti ti-mood-search"
        },
        {
          label: "Най-задоволяваща дейност",
          name: mostSelectedJobSatisfaction,
          value: mostSelectedJobSatisfactionCount,
          icon: "ti ti-pencil-heart"
        },
        {
          label: "Най-срещан приоритет",
          name: mostSelectedJobPriorities,
          value: mostSelectedJobPrioritiesCount,
          icon: "ti ti-zoom-exclamation"
        },
        {
          label: "Най-срещано ниво на образование",
          name: mostSelectedEducationLevel,
          value: mostSelectedEducationLevelCount,
          icon: "ti ti-brain"
        },
        {
          label: "Най-желани професионални роли",
          name: mostSelectedCareerGoals,
          value: mostSelectedCareerGoalsCount,
          icon: "ti ti-flag-star"
        }
      ];
      break;
    }
    case "WidgetCardsComponent": {
      const userCount = data?.usersCount[0]?.user_count ?? 0;
      const distinctOccupations = data?.distinctOccupations.count ?? 0;
      const mostRecommendedOccupation =
        data?.topRecommendedOccupations[0]?.title_bg;
      const mostRecommendedOccupationCount =
        data?.topRecommendedOccupations[0]?.recommendation_count;
      const mostRecommendedRelatedOccupation =
        data?.topRecommendedRelatedOccupations[0]?.name_bg;
      const mostRecommendedRelatedOccupationCount =
        data?.topRecommendedRelatedOccupations[0]?.recommendation_count;

      options = [
        {
          label: "Общ брой потребители",
          value: userCount,
          icon: "bi-person-circle"
        },
        {
          label: "Общ брой професии в платформата",
          value: distinctOccupations,
          icon: "bx bx-line-chart"
        },
        {
          label: "Най-препоръчвана професия в платформата",
          value: mostRecommendedOccupation,
          subValue: mostRecommendedOccupationCount ?? 0,
          icon: "bi-briefcase"
        },
        {
          label: "Най-препоръчвана професия по модела на други професии",
          value: mostRecommendedRelatedOccupation,
          subValue: mostRecommendedRelatedOccupationCount ?? 0,
          icon: "bi-briefcase"
        }
      ];
      break;
    }
    default:
      options = [];
  }

  return options;
}

export function extractWidgetCardData(data: any) {
  return {
    userCount: data?.usersCount[0]?.user_count ?? 0,
    distinctOccupations: data?.distinctOccupations.count ?? 0,
    mostRecommendedOccupation: data?.topRecommendedOccupations[0]?.title_bg,
    mostRecommendedOccupationCount:
      data?.topRecommendedOccupations[0]?.recommendation_count ?? 0,
    mostRecommendedRelatedOccupation:
      data?.topRecommendedRelatedOccupations[0]?.name_bg,
    mostRecommendedRelatedOccupationCount:
      data?.topRecommendedRelatedOccupations[0]?.recommendation_count ?? 0
  };
}

export function isTopRecommendedOccupationArray(
  data: any
): data is TopRecommendedOccupation[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item.code === "string" &&
        typeof item.title_bg === "string" &&
        typeof item.title_en === "string" &&
        typeof item.description === "string"
    )
  );
}
/**
 * Филтрира данни за таблица според категорията и връща определена страница.
 *
 * @param {FilteredTableData} filteredTableData - Данни за филтриране.
 * @param {string} prosperitySortCategory - Категория за сортиране.
 * @param {number} currentTablePage - Номер на текущата страница.
 * @param {number} itemsPerTablePage - Брой елементи на страница.
 * @returns {FilteredTableData} - Филтрирани и странирани данни.
 */
export const filterTableData = (
  filteredTableData: FilteredTableData,
  prosperitySortCategory: string,
  currentTablePage: number,
  itemsPerTablePage: number
): FilteredTableData => {
  let newItems: FilteredTableData = [];
  switch (prosperitySortCategory) {
    case "Directors":
      newItems = filteredTableData.filter((item) => "director" in item);
      break;
    case "Actors":
      newItems = filteredTableData.filter((item) => "actor" in item);
      break;
    case "Writers":
      newItems = filteredTableData.filter((item) => "writer" in item);
      break;
    default:
      newItems = [];
  }
  return newItems.slice(
    (currentTablePage - 1) * itemsPerTablePage,
    currentTablePage * itemsPerTablePage
  );
};

/**
 * Пагинира данни за таблица.
 *
 * @param {FilteredTableData} filteredTableData - Филтрираните данни.
 * @param {number} currentTablePage - Текуща страница.
 * @param {number} itemsPerTablePage - Брой елементи на страница.
 * @returns {FilteredTableData} - Пагинирани данни.
 */
export const paginateData = (
  filteredTableData: FilteredTableData,
  currentTablePage: number,
  itemsPerTablePage: number
): FilteredTableData => {
  return filteredTableData.slice(
    (currentTablePage - 1) * itemsPerTablePage,
    currentTablePage * itemsPerTablePage
  );
};

/**
 * Сортира данни за професии по зададена категория.
 *
 * @template T - Типът данни (TopRecommendedOccupation или MostNeededAbility).
 * @param {T[]} seriesData - Данни за професии.
 * @param {string} category - Категория за сортиране (например "Count").
 * @returns {T[]} - Сортирани данни по категория.
 */
const sortByCategory = <T>(seriesData: T[], category: string): T[] => {
  const sorters: { [key: string]: (a: T, b: T) => number } = {
    Count: (a: any, b: any) =>
      (b.recommendation_count ?? 0) - (a.recommendation_count ?? 0)
  };

  return sorters[category] ? seriesData.sort(sorters[category]) : seriesData;
};

/**
 * Пагинира и сортира данни за бар-чарт.
 *
 * @template T - Типът данни (TopRecommendedOccupation или MostNeededAbility).
 * @param {T[]} seriesData - Списък с данни за професии.
 * @param {number} currentPage - Текуща страница.
 * @param {number} pageSize - Брой елементи на страница.
 * @param {string} [category] - Категория за сортиране (по желание).
 * @returns {T[]} - Сортирани и пагинирани данни.
 */
export const paginateBarChartData = <T>(
  seriesData: T[],
  currentPage: number,
  pageSize: number,
  category?: string
): T[] => {
  const sortedData = category
    ? sortByCategory<T>(seriesData, category)
    : seriesData;

  const start = (currentPage - 1) * pageSize;
  return sortedData.slice(start, start + pageSize);
};

/**
 * Променя текущата страница на бар-чарт при навигация.
 *
 * @param {"next" | "prev"} direction - Посока (next или prev).
 * @param {number} currentPage - Текуща страница.
 * @param {number} pageSize - Брой елементи на страница.
 * @param {number} totalItems - Общ брой елементи.
 * @param {React.Dispatch<React.SetStateAction<number>>} setCurrentPage - Функция за задаване на текуща страница.
 */
export const handleBarChartPageChange = (
  direction: "next" | "prev",
  currentPage: number,
  pageSize: number,
  totalItems: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const newPage =
    direction === "next"
      ? Math.min(currentPage + 1, totalPages)
      : Math.max(currentPage - 1, 1);
  setCurrentPage(newPage);
};

/**
 * Изчислява общия брой страници за бар-чарт.
 *
 * @param {number} totalItems - Общ брой елементи.
 * @param {number} pageSize - Брой елементи на страница.
 * @returns {number} - Общ брой страници.
 */
export const getTotalBarChartPages = (
  totalItems: number,
  pageSize: number
): number => Math.ceil(totalItems / pageSize);

/**
 * Генерира данни за heatmap.
 *
 * @param {GenrePopularityData} data - Данни за популярност на жанровете.
 * @returns {HeatmapData} - Данни за heatmap.
 */
export const generateHeatmapSeriesData = (
  data: GenrePopularityData
): HeatmapData => {
  const years = Object.keys(data);
  const genreNames = new Set<string>();

  years.forEach((year) => {
    Object.keys(data[year]).forEach((genreKey) =>
      genreNames.add(data[year][genreKey].genre_bg)
    );
  });

  return [...genreNames].map((genreBg) => ({
    name: genreBg,
    data: years.map((year) => {
      const genre = Object.values(data[year]).find(
        (item) => item.genre_bg === genreBg
      );
      return { x: year, y: genre ? genre.genre_count : 0 };
    })
  }));
};

/**
 * Генерира данни за scatter plot.
 *
 * @param {MovieProsperityData[]} movies - Данни за просперитет на филми.
 * @returns {MovieData[]} - Данни за scatter plot.
 */
export const generateScatterSeriesData = (
  movies: MovieProsperityData[]
): MovieData[] =>
  movies.map((movie) => ({
    title: movie.title_bg,
    title_bg: movie.title_bg,
    title_en: movie.title_en,
    boxOffice: parseBoxOffice(movie.total_box_office),
    imdbRating: parseFloat(movie.imdbRating),
    metascore: parseFloat(movie.metascore),
    rottenTomatoes: parseFloat(movie.rotten_tomatoes)
  }));

/**
 * Преобразува стойност на приходи в число.
 *
 * @param {string | number} value - Стойност на приходи.
 * @returns {number} - Числова стойност.
 */
export function parseBoxOffice(value: string | number): number {
  return typeof value === "string"
    ? parseFloat(value.replace(/[\$,]/g, ""))
    : value;
}

// ==============================
// Handle функции
// ==============================

/**
 * Задава категория за сортиране на таблицата за просперитет.
 *
 * @param {string} category - Избраната категория.
 * @param {React.Dispatch<React.SetStateAction<string>>} setProsperitySortCategory - Функция за задаване на категорията.
 */
export const handleProsperityTableClick = (
  category: string,
  setProsperitySortCategory: React.Dispatch<React.SetStateAction<string>>
) => {
  setProsperitySortCategory(category);
};

/**
 * Задава категория за сортиране на секция "Филми и сериали".
 *
 * @param {string} category - Избраната категория.
 * @param {React.Dispatch<React.SetStateAction<string>>} setOccupationSortCategory - Функция за задаване на категорията.
 */
export const handleOccupationSortCategory = (
  category: string,
  setOccupationSortCategory: React.Dispatch<React.SetStateAction<string>>
) => {
  setOccupationSortCategory(category);
};

/**
 * Задава категория за сортиране на топ статистики.
 *
 * @param {string} category - Избраната категория.
 * @param {React.Dispatch<React.SetStateAction<string>>} setTopStatsSortCategory - Функция за задаване на категорията.
 */
export const handleTopStatsSortCategory = (
  category: Category,
  setTopStatsSortCategory: React.Dispatch<React.SetStateAction<Category>>
) => {
  setTopStatsSortCategory(category);
};

/**
 * Обработва избор от dropdown меню.
 *
 * @param {React.Dispatch<React.SetStateAction<string>>} setName - Функция за задаване на име.
 * @param {React.Dispatch<React.SetStateAction<number>>} setValue - Функция за задаване на стойност.
 * @param {string} name - Избраното име.
 * @param {number} value - Избраната стойност.
 */
export const handleDropdownClick = (
  setName: React.Dispatch<React.SetStateAction<string>>,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  name: string,
  value: number
) => {
  setName(name);
  setValue(value);
};
