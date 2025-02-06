import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../pages/SavedRepos";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};

interface Props {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  const updatedRepos = [repo, ...savedRepos()];
  setSavedRepos(updatedRepos);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unsaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter((item) => item.id != repoId);
  setSavedRepos(nextState);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const reposIsSaved = (repoId: string) => {
  const repo = savedRepos()?.filter((item) => item.id === repoId);
  return repo?.length > 0;
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="blank"
          rel="noreferrer"
        >
          {repo.owner.login}/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {reposIsSaved(repo.id) ? (
          <button class="btn btn-danger" onclick={() => unsaveRepo(repo.id)}>
            Unsave
          </button>
        ) : (
          <button class="btn btn-success" onclick={() => saveRepo(repo)}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
