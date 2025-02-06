import { For } from "solid-js";
import { repos, username, setUsername } from "../App";
import RepoCard from "../components/ReposCard";

const Home = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput"
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form
        class="mb-3 d-flex flex-column"
        onsubmit={(event) => refetchWithUsername(event)}
      >
        <label for="usernameInput">Search for a github user here</label>
        <div class="d-flex">
          <input
            type="text"
            class="p-1 align-middle"
            id="usernameInput"
            required
          />
          <button class="btn btn-dark ms-3 w-auto">Fetch</button>
        </div>
      </form>
      <h3>Github repos for {username()}</h3>

      <For each={repos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
