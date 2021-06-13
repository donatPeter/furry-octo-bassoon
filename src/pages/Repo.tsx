import React from "react";
import { useParams } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Error } from "./Error";
import { useRepos } from "../hooks/useRepos";
import { Box, Typography } from "@material-ui/core";

export const Repo = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, repos } = useRepos();
  const repo = repos.find((repo) => repo.id === Number(id));

  return (
    <>
      {isLoading && <ProgressBar />}
      {!isLoading && error && <Error />}
      {!isLoading && !error && repo && (
        <Box padding="2rem" display="flex" flexDirection="column">
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            marginBottom="4rem"
          >
            <Typography variant="h1">{repo.name}</Typography>
          </Box>
          <Box>
            <Box display="flex">
              <p>name: </p>
              <p>{repo.name}</p>
            </Box>
          </Box>
          <Box>
            <Box display="flex">
              <p>description: </p>
              <p>{repo.description}</p>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
