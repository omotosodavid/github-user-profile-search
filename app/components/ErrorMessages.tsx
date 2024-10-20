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
              {typeof rateLimit === "object" && "message" in rateLimit
                ? rateLimit.message
                : null}
          </p>
          <figure>
            <Image src={forbiddenErrorImage} alt="403 error visual" />
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
            {typeof error === "object" && "message" in error
              ? error.message
              : null}
          </p>
          <figure>
            <Image src={unauthorizedErrorMessage} alt="404 error visual" />
          </figure>
        </section>
      )}
    </>
  );
};
