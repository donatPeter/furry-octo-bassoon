import React from "react";
import { useRepos } from "../hooks/useRepos";
import { ProgressBar } from "../components/ProgressBar";
import { Error } from "./Error";
import { RepoListItem } from "../components/RepoListItem";

export const RepoList = () => {
  const { isLoading, error, repos } = useRepos();

  return (
    <>
      {isLoading && <ProgressBar />}
      {!isLoading && error && <Error />}
      {!isLoading &&
        repos.map((repo) => <RepoListItem key={repo.id} name={repo.name} />)}
    </>
  );
};
