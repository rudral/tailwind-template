import { baseRoute } from "../../main"

type TProps = {
  text: string
  href?: string
  target?: "_blank" | "_self"
}

export const FooterNavItem = ({ text, href, target }: TProps) => (
  <a
    href={href || `${baseRoute}/`}
    className="font-base text-sm text-gray-300 text-footer whitespace-nowrap transition-all duration-150 ease-linear
    hover:text-white hover:scale-110"
    target={target || "_self"}
  >
    {text}
  </a>
)
