import { baseRoute } from "../../main"

type TProps = {
  text: string
  href?: string
}

export const FooterLink = ({ text, href }: TProps) => (
  <a
    href={href || `${baseRoute}/`}
    className="text-footer whitespace-nowrap mt-3 transition-all ease-linear duration-150
  hover:text-white"
  >
    {text}
  </a>
)
