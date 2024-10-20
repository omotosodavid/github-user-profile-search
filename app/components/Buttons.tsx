import { useCustomContext } from "../utilities/useCustomContext";
import useFunction from "../utilities/UseFunction";

const SearchButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="dark:text-white bg-green-500 hover:bg-green-400 text-lg px-[0.8rem] sm:px-6 py-2 sm:rounded-md rounded-full duration-200"
    >
      <i className="bi bi-search sm:hidden"></i>
      <p className="hidden sm:block">Search</p>
    </button>
  );
};

const PreviousButton: React.FC = () => {
  const { handleGoToPreviousPage } = useFunction();
  const { page } = useCustomContext();

  return (
    <button
      type="button"
      className="dark:text-white hover:text-blue-600 dark:hover:text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200 disabled:text-gray-400 disabled:dark:text-gray-400 disabled:bg-transparent duration-200"
      onClick={handleGoToPreviousPage}
      disabled={page === 1}
    >
      Previous
    </button>
  );
};

const NextButton: React.FC = () => {
  const { handleGoToNextPage } = useFunction();
  const { hasMore } = useCustomContext();

  return (
    <button
      type="button"
      className="dark:text-white hover:text-blue-600 dark:hover:text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200 disabled:text-gray-400 disabled:dark:text-gray-400 disabled:bg-transparent duration-200"
      onClick={handleGoToNextPage}
      disabled={!hasMore}
    >
      Next
    </button>
  );
};

const ThemeButton: React.FC = () => {
  const { handleThemeChange, theme } = useFunction();

  return (
    <button
      type="button"
      className="dark:text-white px-3 py-2 border-2 border-black dark:border-white rounded-full duration-200"
      onClick={handleThemeChange}
      title={theme === "light" ? "Change to dark mode" : "Change to light mode"}
    >
      {theme === "light" ? (
        <i className="bi bi-moon-stars"></i>
      ) : (
        <i className="bi bi-sun"></i>
      )}
    </button>
  );
};

export { SearchButton, PreviousButton, NextButton, ThemeButton };
