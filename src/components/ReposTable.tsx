import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Repo } from "../types/repo.type";

interface Props {
  repos: Repo[];
}

const columns = [
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "language", label: "Main language" },
  { id: "open_issues", label: "Open issues" },
];

export const ReposTable = ({ repos }: Props) => {
  return (
    <Box padding="2rem">
      <Paper>
        <TableContainer style={{ maxHeight: "700px" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {repos.map((repo) => {
                return (
                  <TableRow hover key={repo.id}>
                    {columns.map((column) => {
                      const value = repo[column.id];
                      return (
                        <TableCell key={`${repo.id}${1}`}>{value}</TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};
