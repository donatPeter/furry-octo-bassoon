import React from "react";
import { Box } from "@material-ui/core";

interface Props {
  name: string;
}

export const RepoListItem = ({ name }: Props) => {
  return (
    <Box>
      <p>{name}</p>
    </Box>
  );
};
