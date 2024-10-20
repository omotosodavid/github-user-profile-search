import Link from "next/link";
import { useCustomContext } from "../utilities/useCustomContext";
import { NextButton, PreviousButton } from "./Buttons";
import NoRepository from "./NoRepository";

const Repositories: React.FC = () => {
  const { repos, hasMore, username, page } = useCustomContext();

  return (
    <>
      {repos && (
        <section className="mt-20 pb-10">
          <h2 className="text-center font-semibold text-3xl dark:text-white">
            Repositories
          </h2>
          {repos.map((repo: any, index: number) => (
            <section
              className="mt-8 border-t pt-8 flex sm:flex-row flex-col gap-4 sm:justify-between sm:items-center"
              key={index}
            >
              <div className="sm:w-[70%] dark:text-white">
                <Link href={repo.html_url} target="_blank" passHref>
                  <h3 className="text-2xl font-medium mb-3 hover:underline">
                    {repo.name}
                  </h3>
                </Link>
                <p>
                  {repo.description === null
                    ? "No description found"
                    : repo.description}
                </p>
              </div>
              <div className="flex items-end gap-3 dark:text-white">
                <div className="grid place-items-center">
                  <svg
                    className="dark:fill-white hover:fill-yellow-400 dark:hover:fill-yellow-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    height="23"
                    width="23"
                  >
                    <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                  </svg>
                  <p>{repo.stargazers_count}</p>
                </div>
                <div className="grid place-items-center">
                  <svg
                    className="dark:fill-white hover:fill-blue-600 dark:hover:fill-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="20"
                    width="20"
                  >
                    <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3l0 38.7c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-38.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3l0 38.7c0 53-43 96-96 96l-48 0 0 70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3l0-70.7-48 0c-53 0-96-43-96-96l0-38.7C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
                  </svg>
                  <p>{repo.forks_count}</p>
                </div>
              </div>
            </section>
          ))}
          {(hasMore || page > 1) && (
            <section className="flex items-center justify-center gap-x-5 mt-20">
              <PreviousButton />
              <NextButton />
            </section>
          )}

          {repos.length === 0 && <NoRepository name={username} />}
        </section>
      )}
    </>
  );
};

export default Repositories;
