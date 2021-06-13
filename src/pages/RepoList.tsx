import React from "react";
import { useRepos } from "../hooks/useRepos";
import { ProgressBar } from "../components/ProgressBar";

export const RepoList = () => {
  const { isLoading } = useRepos();

  return <>{isLoading && <ProgressBar />}</>;
};
