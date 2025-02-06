import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";
import Header from "./components/Header";
import { Component, createEffect, createSignal } from "solid-js";

const [username, setUsername] = createSignal("helenaskagerlid");
const [repos, setRepos] = createSignal([]);

createEffect(async () => {
  const res = await fetch(
    `https://api.github.com/users/${username()}/repos?created`
  );
  setRepos(await res.json());
  console.log("I app", repos());
});

const App: Component = () => {
  return (
    <Router
      root={(props) => (
        <>
          <div class="container">
            <Header />
            <div class="main-content">{props.children}</div>
          </div>
        </>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/saved" component={SavedRepos} />
    </Router>
  );
};

export { username, setUsername, repos };
export default App;
