import { render } from "preact"
import { Router, Route } from "preact-router"

import { Layout } from "./components/layout/layout.component"

import "./index.css"
import { LoginPage } from "./pages/login.page"
import { SingupPage } from "./pages/signup.page"

export const baseRoute = "/tailwind-template"

const Main = () => (
  <Layout>
    <a
      className="github-fork-ribbon before:bg-secondary"
      href="https://github.com/rudral/tailwind-template"
      data-ribbon="Fork me on GitHub"
      title="Fork me on GitHub"
      target="_blank"
    >
      Fork me on GitHub
    </a>
    <Router>
      <Route default path={`${baseRoute}/`} component={LoginPage} />
      <Route path={`${baseRoute}/signup`} component={SingupPage} />
    </Router>
  </Layout>
)

render(<Main />, document.getElementById("app") as HTMLElement)
