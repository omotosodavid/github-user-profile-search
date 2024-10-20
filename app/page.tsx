"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
import { Context } from "./utilities/useCustomContext";
import Loader from "./components/Loader";
import UserInfoCard from "./components/UserInfoCard";
import Repositories from "./components/Repositories";
import {
  RateLimitErrorMessage,
  UnauthorizedErrorMessage,
} from "./components/ErrorMessages";

const Main: React.FC = () => {
  return (
    <main className="md:w-[42rem] px-4 mx-auto">
      <Context>
        <Form />
        <Welcome />
        <Loader />
        <UserInfoCard />
        <Repositories />
        <RateLimitErrorMessage />
        <UnauthorizedErrorMessage />
      </Context>
    </main>
  );
};

export default Main;
