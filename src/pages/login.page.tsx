import { Helmet } from "react-helmet"

import { LoginForm } from "../components/login/login-form.component"

export const LoginPage = () => (
  <>
    <Helmet>
      <title>Rudral Tailwind Template | Login</title>
    </Helmet>
    <LoginForm />
  </>
)
