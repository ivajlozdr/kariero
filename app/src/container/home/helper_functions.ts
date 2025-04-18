// ==============================
// Импортиране на типове и интерфейси
// ==============================
import { DataType, TopRecommendedOccupation } from "../../types_common";
import { Option, QualitiesCategory } from "./home-types";

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
  setUserData: React.Dispatch<React.SetStateAction<any>>, // Set user data
  setStatsData: React.Dispatch<React.SetStateAction<any>> // Set combined stats
): Promise<void> => {
  try {
    // Fetch user data
    const userResponse = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/user-data`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );
    const userData = await userResponse.json();
    setUserData(userData);

    const platformOnlyCategories = ["usersCount"];
    const distinctOccupationsEndpoint = "distinct-occupations-with-count";
    const categoryLimits: Record<string, number> = {
      topRecommendedOccupations: 50,
      topRecommendedRelatedOccupations: 50,
      mostNeededAbilities: 15,
      mostNeededKnowledge: 15,
      mostNeededSkills: 15,
      mostNeededTasks: 2,
      mostNeededTechnologySkills: 15,
      mostNeededWorkActivities: 15,
      mostSelectedPersonalityTypes: 2,
      mostSelectedWorkEnvironments: 2,
      mostSelectedJobPriorities: 2,
      mostSelectedEducationLevels: 2,
      mostSelectedCareerGoals: 2,
      mostSelectedJobSatisfactionLevels: 2,
      mostPreferredWorkstyleStructure: 2,
      mostPreferredWorkstyleCollaboration: 2,
      mostPreferredWorkstyleWorkEnvironment: 2
    };

    const fetchRequests = [
      ...platformOnlyCategories.map((key) =>
        fetch(
          `${import.meta.env.VITE_API_BASE_URL}/stats/platform/${key.replace(
            /[A-Z]/g,
            (m) => "-" + m.toLowerCase()
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        )
          .then((res) => res.json())
          .then((data) => ({ key, data }))
          .catch((error) => {
            console.error(`Error fetching platform ${key}:`, error);
            return { key, data: null };
          })
      ),
      fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/stats/platform/${distinctOccupationsEndpoint}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
        .then((res) => res.json())
        .then((data) => ({ key: "distinctOccupations", data }))
        .catch((error) => {
          console.error("Error fetching distinct occupations:", error);
          return { key: "distinctOccupations", data: null };
        }),
      ...Object.entries(categoryLimits).flatMap(([key, limit]) => [
        fetch(
          `${import.meta.env.VITE_API_BASE_URL}/stats/platform/${key.replace(
            /[A-Z]/g,
            (m) => "-" + m.toLowerCase()
          )}?limit=${limit}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }
        )
          .then((res) => res.json())
          .then((data) => ({ key, type: "platform", data }))
          .catch((error) => {
            console.error(`Error fetching platform ${key}:`, error);
            return { key, type: "platform", data: null };
          }),
        fetch(
          `${import.meta.env.VITE_API_BASE_URL}/stats/individual/${key.replace(
            /[A-Z]/g,
            (m) => "-" + m.toLowerCase()
          )}?limit=${limit}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ token })
          }
        )
          .then((res) => res.json())
          .then((data) => ({ key, type: "individual", data }))
          .catch((error) => {
            console.error(`Error fetching individual ${key}:`, error);
            return { key, type: "individual", data: null };
          })
      ])
    ];

    const responses = await Promise.all(fetchRequests);

    // Organize data into structured format
    const statsData = responses.reduce<Record<string, any>>((acc, response) => {
      const { key, type, data } = response as {
        key: string;
        type?: "platform" | "individual";
        data: any;
      };

      if (type) {
        acc[key] = acc[key] || {};
        acc[key][type] = data;
      } else {
        acc[key] = data;
      }

      return acc;
    }, {});

    setStatsData(statsData);
  } catch (error) {
    console.error("Error in fetchData:", error);
  }
};

export function generateOptions(
  componentName: string,
  dataType: "individual" | "platform",
  data: DataType
): Option[] {
  let options: Option[];
  switch (componentName) {
    case "MostPreferredWorkstyleCards": {
      const mostPreferredWorkstyleWorkEnvironment =
        data?.mostPreferredWorkstyleWorkEnvironment?.[dataType]?.[0]
          ?.preference;
      const mostPreferredWorkstyleWorkEnvironmenCount =
        data?.mostPreferredWorkstyleWorkEnvironment?.[dataType]?.[0]
          ?.occurrence_count;
      const mostPreferredWorkstyleCollaboration =
        data?.mostPreferredWorkstyleCollaboration?.[dataType]?.[0]?.preference;
      const mostPreferredWorkstyleCollaborationCount =
        data?.mostPreferredWorkstyleCollaboration?.[dataType]?.[0]
          ?.occurrence_count;
      const mostPreferredWorkstyleStructure =
        data?.mostPreferredWorkstyleStructure?.[dataType]?.[0]?.preference;
      const mostPreferredWorkstyleStructureCount =
        data?.mostPreferredWorkstyleStructure?.[dataType]?.[0]
          ?.occurrence_count;

      options = [
        {
          label: "Предпочитание за работна атмосфера",
          name: mostPreferredWorkstyleWorkEnvironment,
          value: mostPreferredWorkstyleWorkEnvironmenCount ?? 0,
          icon: "ti ti-home-eco"
        },
        {
          label: "Предпочитание за колаборация",
          name: mostPreferredWorkstyleCollaboration,
          value: mostPreferredWorkstyleCollaborationCount ?? 0,
          icon: "ti ti-users-group"
        },
        {
          label: "Предпочитание за работна структура",
          name: mostPreferredWorkstyleStructure,
          value: mostPreferredWorkstyleStructureCount ?? 0,
          icon: "ti ti-hierarchy"
        }
      ];
      break;
    }
    case "MostSelectedCards": {
      const mostSelectedWorkEnvironment =
        data?.mostSelectedWorkEnvironments?.[dataType]?.[0]?.preference ||
        "Няма данни";
      const mostSelectedWorkEnvironmentCount =
        data?.mostSelectedWorkEnvironments?.[dataType]?.[0]?.occurrence_count ??
        0;
      const mostSelectedPersonalityTypes =
        data?.mostSelectedPersonalityTypes?.[dataType]?.[0]?.preference ||
        "Няма данни";
      const mostSelectedPersonalityTypesCount =
        data?.mostSelectedPersonalityTypes?.[dataType]?.[0]?.occurrence_count ??
        0;
      const mostSelectedJobSatisfaction =
        data?.mostSelectedJobSatisfactionLevels?.[dataType]?.[0]?.preference ||
        "Няма данни";
      const mostSelectedJobSatisfactionCount =
        data?.mostSelectedJobSatisfactionLevels?.[dataType]?.[0]
          ?.occurrence_count ?? 0;
      const mostSelectedJobPriorities =
        data?.mostSelectedJobPriorities?.[dataType]?.[0]?.preference ||
        "Няма данни";
      const mostSelectedJobPrioritiesCount =
        data?.mostSelectedJobPriorities?.[dataType]?.[0]?.occurrence_count ?? 0;
      const mostSelectedEducationLevel =
        data?.mostSelectedEducationLevels?.[dataType]?.[0]?.preference ||
        "Няма данни";
      const mostSelectedEducationLevelCount =
        data?.mostSelectedEducationLevels?.[dataType]?.[0]?.occurrence_count ??
        0;
      const mostSelectedCareerGoals =
        data?.mostSelectedCareerGoals?.[dataType]?.[0]?.preference ||
        "Няма данни";
      const mostSelectedCareerGoalsCount =
        data?.mostSelectedCareerGoals?.[dataType]?.[0]?.occurrence_count ?? 0;

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
      const mostRecommendedOccupation =
        data?.topRecommendedOccupations?.[dataType]?.[0]?.title_bg;
      const mostRecommendedOccupationCount =
        data?.topRecommendedOccupations?.[dataType]?.[0]?.recommendation_count;
      const mostRecommendedRelatedOccupation =
        data?.topRecommendedRelatedOccupations?.[dataType]?.[0]?.name_bg;
      const mostRecommendedRelatedOccupationCount =
        data?.topRecommendedRelatedOccupations?.[dataType]?.[0]
          ?.recommendation_count;

      options = [
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

export function extractWidgetCardData(data: DataType) {
  return {
    userCount: data?.usersCount[0]?.user_count ?? 0,
    distinctOccupations: data?.distinctOccupations.count ?? 0,
    mostRecommendedOccupation:
      data?.topRecommendedOccupations?.platform?.[0]?.title_bg,
    mostRecommendedOccupationCount:
      data?.topRecommendedOccupations?.platform?.[0]?.recommendation_count ?? 0,
    mostRecommendedRelatedOccupation:
      data?.topRecommendedRelatedOccupations?.platform?.[0]?.name_bg,
    mostRecommendedRelatedOccupationCount:
      data?.topRecommendedRelatedOccupations?.platform?.[0]
        ?.recommendation_count ?? 0
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
  if (!Array.isArray(seriesData) || seriesData.length === 0) {
    return []; // Ensure empty array if no data is available
  }

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
  if (totalItems === 0) {
    setCurrentPage(1);
    return;
  }

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
 * Задава категория за сортиране на професии.
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
  category: QualitiesCategory,
  setTopStatsSortCategory: React.Dispatch<
    React.SetStateAction<QualitiesCategory>
  >
) => {
  setTopStatsSortCategory(category);
};
