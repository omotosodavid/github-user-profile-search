import Image from 'next/image';
import WelcomeImage from '../assets/welcome.png';
import { useCustomContext } from '../utilities/useCustomContext';

const Welcome = () => {
  const { welcome } = useCustomContext();
  return (
    <>
      {welcome && (
        <section className="mt-10 dark:text-white relative">
          <h2 className="font-semibold sm:text-2xl absolute top-11 sm:left-[4.5rem] left-[15%] sm:w-56 w-52">
            Welcome to Github User Profile Search
          </h2>
          <figure>
            <Image src={WelcomeImage} alt="welcome visual" />
          </figure>
        </section>
      )}
    </>
  );
};

export default Welcome;
