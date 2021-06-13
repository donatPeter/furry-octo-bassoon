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
import { IRepo } from "../types/repo.type";
import { useHistory } from "react-router-dom";

interface Props {
  repos: IRepo[];
}

const columns = [
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "language", label: "Main language" },
  { id: "open_issues", label: "Open issues" },
];

export const ReposTable = ({ repos }: Props) => {
  const history = useHistory();

  const showRepoDetails = (id: number) => {
    history.push(`/repo/${id}`);
  };

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
                  <TableRow
                    hover
                    key={repo.id}
                    onClick={() => showRepoDetails(repo.id)}
                  >
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
