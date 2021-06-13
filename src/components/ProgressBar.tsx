import React from "react";
import { Box, CircularProgress, Typography } from "@material-ui/core";

export const ProgressBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
      <Box margin="1rem">
        <Typography>Please wait</Typography>
      </Box>
    </Box>
  );
};
