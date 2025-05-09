import { FavouriteCareer, FullCareerDetails } from "../../types_common";

/**
 * Извлича любими кариери на потребителя от API-то.
 *
 * Функцията първо взима списък с любими кариери (идентификатори) и след това
 * за всеки идентификатор прави отделна заявка, за да вземе пълните данни за съответната кариера.
 *
 * @function fetchFavorites
 * @async
 * @param {string} token - Токен за автентикация на потребителя (Bearer токен).
 * @param {React.Dispatch<React.SetStateAction<FullCareerDetails[]>>} setFavourites - Функция за обновяване на състоянието със списък от пълни кариерни детайли.
 */

export const fetchFavorites = async (
  token: string,
  setFavourites: React.Dispatch<React.SetStateAction<FullCareerDetails[]>>
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/favourites`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch favorites");
    }

    const favourites: FavouriteCareer[] = await response.json();

    const careerIds = favourites.map((career) => career.code);

    const detailsPromises = careerIds.map((code) =>
      fetch(`${import.meta.env.VITE_API_BASE_URL}/favourites/${code}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
    );

    const detailsResponses = await Promise.all(detailsPromises);

    const detailsArray = await Promise.all(
      detailsResponses.map(async (res, index) => {
        if (!res.ok) {
          throw new Error("Failed to fetch career details");
        }
        const details: FullCareerDetails = await res.json();
        const date = favourites[index]?.date;
        return { ...details, date };
      })
    );

    setFavourites(detailsArray);
  } catch (error: any) {
    console.error("Error fetching favorites:", error.message);
    throw error;
  }
};
