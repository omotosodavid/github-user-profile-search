import axios from "axios";
import { useCustomContext } from "./useCustomContext";
import { useEffect, useState } from "react";

const useFunction = () => {
  const [theme, setTheme] = useState<string>("light");
  const {
    setUserInfo,
    setRepos,
    hasMore,
    setHasMore,
    page,
    setPage,
    setRateLimit,
    username,
    setUserName,
    setError,
    setWelcome,
    setLoading,
  } = useCustomContext();

  const perPage = 30; // Maximum number of results per page

  // Handle setting the username
  const handleUserName = (name: string) => {
    setUserName(name);
  };

  // Handle form submission to fetch user info
  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWelcome(false);
    setUserInfo(null); // Reset user info
    setRepos(null); // Reset repos
    setError(false); // Reset error message
    setRateLimit(false); // Reset rate limit message
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserInfo(response.data); // Set user info
      setPage(1); // Reset the page when a new user is searched
      handleFetchRepo(1, username); // Fetch the first page of repositories
      setError(false);
      setRateLimit(false);
      setLoading(false);
    } catch (error: any) {
      // Return values to initial when there is an error
      setUserInfo(null);
      setRepos(null);
      setLoading(false);
      if (error.response?.status === 403) {
        handleRateLimitExceeded(error.response.headers); // Handle rate limit exceeded
      } else {
        setError({ message: "Invalid username. Try a new one" });
      }
    }
  };

  // Fetch repositories from GitHub API for the current user
  const handleFetchRepo = async (pageNum: number, user: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`,
        {
          params: { per_page: perPage, page: pageNum },
        }
      );
      const newRepos = response.data;

      setRepos(newRepos);
      setHasMore(newRepos.length === perPage); // If less than `perPage`, no more repos
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  // Function to go to the previous page
  const handleGoToPreviousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      handleFetchRepo(newPage, username); // Fetch the previous page's repos using the current username
    }
  };

  // Function to go to the next page
  const handleGoToNextPage = () => {
    if (hasMore) {
      const newPage = page + 1;
      setPage(newPage);
      handleFetchRepo(newPage, username); // Fetch the next page's repos using the current username
    }
  };

  // Function to handle rate limit exceeded
  const handleRateLimitExceeded = (headers: any) => {
    const resetTime = headers["x-ratelimit-reset"];
    const resetDate = new Date(resetTime * 1000).toLocaleTimeString();
    setRateLimit({
      message: `API rate limit exceeded. Try again at ${resetDate}.`,
    });
  };

  useEffect(() => {
    // Check the user's previously selected theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme
  };

  return {
    handleFormSubmission,
    handleUserName,
    handleGoToNextPage,
    handleGoToPreviousPage,
    hasMore,
    handleThemeChange,
    theme,
  };
};

export default useFunction;
