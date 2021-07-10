import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { GitHubRepository } from "../../types/GitHubTypes";

import '../../styles/repositories.scss';

export function RepositoriesList() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/alessandro-lenzi/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className="repositories-list">
      <h1>Repos List</h1>

      <ul>
        {repositories.map(repo => (
          <RepositoryItem
            key={repo.id}
            repository={repo}
          />
        ))}
      </ul>
    </section>
  );
};
