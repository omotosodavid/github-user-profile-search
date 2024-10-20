import useFunction from "../utilities/UseFunction";
import { SearchButton, ThemeButton } from "./Buttons";

const Form = () => {
  const { handleFormSubmission, handleUserName } = useFunction();
  return (
    <form
      method="get"
      className="flex items-center gap-8 py-6"
      onSubmit={(e) => handleFormSubmission(e)}
    >
      <input
        type="text"
        name="username"
        placeholder="Enter your username...."
        className="border w-full p-2 px-4 rounded-lg bg-transparent dark:text-white"
        onChange={(e) => handleUserName(e.target.value)}
        required
      />
      <SearchButton />
      <ThemeButton />
    </form>
  );
};

export default Form;
