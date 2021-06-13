import React from "react";
import { Box, Typography } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

export class Error extends React.Component {
  render() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <ErrorIcon color="secondary" style={{ fontSize: 70 }} />
        <Box margin="1rem">
          <Typography>Something happened, please load again!</Typography>
        </Box>
      </Box>
    );
  }
}
