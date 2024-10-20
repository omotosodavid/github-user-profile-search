import { useCustomContext } from "../utilities/useCustomContext";

const Loader = () => {
  const { loading } = useCustomContext();
  return (
    <>
      {loading && (
        <>
          {/* userinfo loader */}
          <section className="border rounded-xl mt-16 p-4">
            {/* loader for avatar, name and bio */}
            <div className="flex sm:flex-row flex-col gap-y-6 items-center sm:justify-between justify-center">
              {/* avatar */}
              <div className="bg-gray-200 animate-pulse h-40 w-40 rounded-full"></div>
              {/* name and bio */}
              <div className="sm:w-[70%] w-full">
                {/* name */}
                <div className="bg-gray-200 animate-pulse rounded-lg h-10 mb-3"></div>
                {/* bio */}
                <div className="bg-gray-200 animate-pulse rounded-lg h-24"></div>
              </div>
            </div>
            {/* loader for location and number of repos */}
            <div className="flex sm:flex-row flex-col gap-y-3 sm:items-center sm:justify-between mt-12">
              {/* location */}
              <div className="bg-gray-200 animate-pulse h-10 w-44 rounded-lg"></div>
              {/* number of repos */}
              <div className="bg-gray-200 animate-pulse h-10 w-44 rounded-lg"></div>
            </div>
          </section>
          {/* repository loader */}
          <section className="mt-28">
            {/* header */}
            <div className="mb-8 mx-auto bg-gray-200 animate-pulse h-10 w-64 rounded-lg"></div>
            {/* content */}
            <div className="border-t py-8 flex sm:flex-row flex-col gap-4 sm:justify-between sm:items-center">
              {/* repo name and description */}
              <div className="sm:w-[70%]">
                {/* repo name */}
                <div className="bg-gray-200 animate-pulse h-10 rounded-lg w-72 mb-8"></div>
                {/* description */}
                <div className="bg-gray-200 animate-pulse h-24 rounded-lg"></div>
              </div>
              {/* stars and forks */}
              <div className="flex gap-5 items-center">
                {/* stars */}
                <div className="bg-gray-200 animate-pulse h-10 w-10 rounded-full"></div>
                {/* forks */}
                <div className="bg-gray-200 animate-pulse h-10 w-10 rounded-full"></div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Loader;
