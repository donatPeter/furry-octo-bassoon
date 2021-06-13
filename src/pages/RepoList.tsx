import React from "react";
import { useRepos } from "../hooks/useRepos";
import { ProgressBar } from "../components/ProgressBar";
import { Error } from "./Error";

export const RepoList = () => {
  const { isLoading, error, repos } = useRepos();

  return (
    <>
      {isLoading && <ProgressBar />}
      {!isLoading && error && <Error />}
      {!isLoading && repos.map((repo) => <p key={repo.name}>{repo.name}</p>)}
    </>
  );
};
