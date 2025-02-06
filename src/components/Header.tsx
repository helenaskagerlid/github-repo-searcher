import { A } from "@solidjs/router";
import { savedRepos } from "../pages/SavedRepos";

export default function Header() {
  return (
    <>
      <nav class="mt-5 mb-3 container px-0">
        <ul class="d-flex list-unstyled">
          <li class="me-2">
            <A href="/" class="btn btn-primary">
              Home
            </A>
          </li>
          <li class="me-2">
            <A href="/saved" class="btn btn-primary">
              Saved repos: {savedRepos().length}
            </A>
          </li>
        </ul>
      </nav>
    </>
  );
}
