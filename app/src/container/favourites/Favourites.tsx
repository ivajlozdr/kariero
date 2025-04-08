import { useState } from "react";
import ListItem from "./components/ListItem";
import FavouritesPlaceholder from "../../components/common/placeholders/FavouritesPlaceholder";

export default function Favourites() {
  const [favoritedCareers, setFavoritedCareers] = useState([
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Develop and maintain software applications using modern technologies.",
      recommendationReason:
        "Based on your interest in problem-solving and technology",
      brightOutlook: true,
      savedDate: "April 2, 2025",
      isFavorite: true
    },
    {
      id: 2,
      title: "Data Scientist",
      description:
        "Analyze large datasets and create predictive models to drive business decisions.",
      recommendationReason:
        "Matches your background in mathematics and statistics",
      brightOutlook: true,
      savedDate: "March 28, 2025",
      isFavorite: true
    },
    {
      id: 3,
      title: "UX/UI Designer",
      description:
        "Design intuitive and engaging user experiences for web and mobile applications.",
      recommendationReason:
        "Aligns with your creative skills and attention to detail",
      brightOutlook: false,
      savedDate: "March 25, 2025",
      isFavorite: true
    },
    {
      id: 4,
      title: "Product Manager",
      description:
        "Lead product development from conception to launch, working with cross-functional teams.",
      recommendationReason:
        "Fits your leadership abilities and strategic thinking",
      brightOutlook: true,
      savedDate: "March 20, 2025",
      isFavorite: true
    }
  ]);

  const removeFromFavorites = (id: number) => {
    setFavoritedCareers(favoritedCareers.filter((career) => career.id !== id));
  };

  return (
    <div className="min-h-screen bg-green-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Favorited Careers
          </h1>
          <p className="text-green-700">
            Your personalized collection of potential career paths
          </p>
        </header>

        {favoritedCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritedCareers.map((career) => (
              <ListItem career={career} onRemove={removeFromFavorites} />
            ))}
          </div>
        ) : (
          <FavouritesPlaceholder />
        )}
      </div>
    </div>
  );
}
