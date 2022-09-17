import { Helmet } from "react-helmet"

import { SignupForm } from "../components/signup/signup-form.component"

export const SingupPage = () => (
  <>
    <Helmet>
      <title>Rudral Tailwind Template | Sign Up</title>
    </Helmet>
    <SignupForm />
  </>
)
