import { GitHubRepository } from "../../types/GitHubTypes";

export type RepositoryItemProps = {
  repository: GitHubRepository;
};

export function RepositoryItem({ repository }: RepositoryItemProps) {

  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a
        href={repository.html_url}
        target="_blank"
      >
        Go to repo
      </a>

      <br/>
    </li>
  );

};