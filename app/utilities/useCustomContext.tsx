import { createContext, useContext, useState, ReactNode } from "react";

// Define the types for the context values
type ContextType = {
  userInfo: any;
  setUserInfo: (info: any) => void;
  repos: any;
  setRepos: (repos: any) => void;
  hasMore: boolean;
  setHasMore: (more: boolean) => void;
  page: number;
  setPage: (page: number) => void;
  rateLimit: boolean | { message: string } | null;
  setRateLimit: (limit: boolean | { message: string } | null) => void;
  username: string;
  setUserName: (name: string) => void;
  error: boolean | { message: string } | null;
  setError: (error: boolean | { message: string } | null) => void;
  welcome: boolean;
  setWelcome: (welcome: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

// Create the context with the defined types
const CustomContext = createContext<ContextType | undefined>(undefined);

// Custom hook for using the context
const useCustomContext = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error("useCustomContext must be used within a ContextProvider");
  }
  return context;
};

// Define the props for the Context provider component
type ContextProviderProps = {
  children: ReactNode;
};

// Context provider component
const Context = ({ children }: ContextProviderProps) => {
  const [userInfo, setUserInfo] = useState<any>(null); // Track changes in userInfo
  const [repos, setRepos] = useState<any>(null); // Manage the repository state
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1); // Track current page
  const [rateLimit, setRateLimit] = useState<
    boolean | { message: string } | null
  >(false); // Track if API rate limit is exceeded
  const [username, setUserName] = useState<string>(""); // Track username
  const [error, setError] = useState<boolean | { message: string } | null>(
    false
  ); // Track error state
  const [welcome, setWelcome] = useState<boolean>(true); // Welcome users
  const [loading, setLoading] = useState<boolean>(false); // Track loading state

  return (
    <CustomContext.Provider
      value={{
        userInfo,
        setUserInfo,
        repos,
        setRepos,
        hasMore,
        setHasMore,
        page,
        setPage,
        rateLimit,
        setRateLimit,
        username,
        setUserName,
        error,
        setError,
        welcome,
        setWelcome,
        loading,
        setLoading,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export { useCustomContext, Context };
