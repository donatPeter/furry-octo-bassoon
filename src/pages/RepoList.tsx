import React from "react";
import { useRepos } from "../hooks/useRepos";

export const RepoList = () => {
  const { isLoading, error, repos } = useRepos();
  console.log(isLoading, error, repos);
  return <p>heyy</p>;
};
