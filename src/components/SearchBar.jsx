import React from "react";
import { Search, Loader2 } from "lucide-react";

const SearchBar = ({ city, setCity, onSearch, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-700 text-sm"
        />
        <button
          onClick={onSearch}
          disabled={loading}
          className="px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-sm">Search</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;