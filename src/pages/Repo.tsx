import React from "react";
import { useParams } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Error } from "./Error";
import { useRepos } from "../hooks/useRepos";
import { Box } from "@material-ui/core";

export const Repo = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, repos } = useRepos();
  const repo = repos.find((repo) => repo.id === Number(id));

  return (
    <>
      {isLoading && <ProgressBar />}
      {!isLoading && error && <Error />}
      {!isLoading && !error && repo && <Box>{repo.name}</Box>}
    </>
  );
};
