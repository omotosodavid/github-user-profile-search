import Link from "next/link";
import { useCustomContext } from "../utilities/useCustomContext";
import Image from "next/image";

const UserInfoCard = () => {
  const { userInfo } = useCustomContext();
  return (
    <>
      {userInfo && (
        <section className="border rounded-xl mt-16 p-4">
          {/* Basic user info */}
          <div className="flex sm:flex-row flex-col gap-y-6 sm:justify-between justify-center items-center mb-8">
            <figure>
              <Image
                className="h-40 w-40 rounded-full"
                src={userInfo.avatar_url}
                alt="user avatar"
              />
            </figure>
            <div className="sm:w-[70%] sm:text-left text-center dark:text-white">
              <Link href={userInfo.html_url} target="_blank">
                <h2 className="font-medium text-3xl mb-4 hover:underline">
                  {userInfo.name === null ? userInfo.login : userInfo.name}
                </h2>
              </Link>
              <p>{userInfo.bio === null ? "No bio found" : userInfo.bio}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-between items-center dark:text-white">
            {/* Location of user */}
            <div className="inline-flex items-center gap-2 font-medium sm:text-xl">
              <i className="bi bi-geo-alt-fill dark:text-white"></i>
              <p>
                {userInfo.location === null
                  ? "No location found"
                  : userInfo.location}
              </p>
            </div>
            {/* Number of user repos */}
            <div className="inline-flex items-center gap-2 font-medium sm:text-xl">
              <svg
                className="dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="20"
              >
                <path d="M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z" />
              </svg>
              <p>
                <span>Repositories </span>
                <span className="rounded-full bg-gray-100 dark:bg-black/60 w-7 h-7 inline-flex justify-center items-center text-base">
                  {userInfo.public_repos}
                </span>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default UserInfoCard;
