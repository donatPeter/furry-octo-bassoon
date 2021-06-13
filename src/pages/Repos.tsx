import React from "react";
import { useRepos } from "../hooks/useRepos";
import { ProgressBar } from "../components/ProgressBar";
import { Error } from "./Error";
import { ReposTable } from "../components/ReposTable";

export const Repos = () => {
  const { isLoading, error, repos } = useRepos();

  return (
    <>
      {isLoading && <ProgressBar />}
      {!isLoading && error && <Error />}
      {!isLoading && !error && <ReposTable repos={repos} />}
    </>
  );
};
