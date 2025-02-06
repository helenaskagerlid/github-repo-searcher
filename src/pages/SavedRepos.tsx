import { Component, createSignal, For } from "solid-js";
import ReposCard, { Repo } from "../components/ReposCard";

const reposFromLS = JSON.parse(localStorage.getItem("savedRepos") || "[]");
const [savedRepos, setSavedRepos] = createSignal(reposFromLS as Repo[]);

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>My saved repos</h2>
      <For each={savedRepos()}>{(repo: Repo) => <ReposCard repo={repo} />}</For>
    </div>
  );
};

export { savedRepos, setSavedRepos };
export default SavedRepos;
