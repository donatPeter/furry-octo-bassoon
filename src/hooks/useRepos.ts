import { useEffect, useState } from "react";
import { IRepo } from "../types/repo.type";

export const useRepos = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    fetch("https://api.github.com/orgs/github/repos")
      .then(async (res) => {
        setRepos(await res.json());
        setIsLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return { isLoading, error, repos };
};
