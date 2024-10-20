import { useCustomContext } from "../utilities/useCustomContext";
import Image from "next/image";
import forbiddenErrorImage from "../assets/403Err.svg";
import unauthorizedErrorMessage from "../assets/404Err.svg";

// RateLimitErrorMessage Component
export const RateLimitErrorMessage: React.FC = () => {
  const { rateLimit } = useCustomContext();

  return (
    <>
      {rateLimit && (
        <section>
          <p className="text-red-500 font-medium text-center text-xl">
            {rateLimit.message}
          </p>
          <figure>
            <Image 
              src={forbiddenErrorImage} 
              alt="403 error visual" 
              width={500} // Adjust as needed
              height={300} // Adjust as needed
            />
          </figure>
        </section>
      )}
    </>
  );
};

// UnauthorizedErrorMessage Component
export const UnauthorizedErrorMessage: React.FC = () => {
  const { error } = useCustomContext();

  return (
    <>
      {error && (
        <section>
          <p className="text-red-500 font-medium text-center text-xl">
            {error.message}
          </p>
          <figure>
            <Image 
              src={unauthorizedErrorMessage} 
              alt="404 error visual" 
              width={500} // Adjust as needed
              height={300} // Adjust as needed
            />
          </figure>
        </section>
      )}
    </>
  );
};
