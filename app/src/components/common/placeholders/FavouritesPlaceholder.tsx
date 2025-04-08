export default function FavouritesPlaceholder() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full">
          <i className="ti ti-bookmark h-10 w-10 text-green-500" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-green-800 mb-2">
        No Favorited Careers
      </h2>
      <p className="text-green-700 mb-6">
        You haven't added any careers to your favorites yet.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
        Explore Careers
      </button>
    </div>
  );
}
