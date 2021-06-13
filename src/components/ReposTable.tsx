import React from "react";
import {
  Box,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Repo } from "../types/repo.type";

interface Props {
  repos: Repo[];
}

const columns = [{ id: "name", label: "Name" }];

export const ReposTable = ({ repos }: Props) => {
  return (
    <Box padding="2rem">
      <Paper>
        <TableContainer>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
        </TableContainer>
      </Paper>
    </Box>
  );
};
