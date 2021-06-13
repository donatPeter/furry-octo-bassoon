import { useQuery } from "react-query";
import { useState } from "react";
import { Repo } from "../types/repo.type";

export const useRepos = () => {
  const [repos, setRepos] = useState<Repo[]>();
  const { isLoading, error } = useQuery("repoList", () =>
    fetch("https://api.github.com/orgs/github/repos").then(async (res) => {
      setRepos(await res.json());
    })
  );
  return { isLoading, error, repos };
};
