type TProps = {
  text: string
}

export const FooterNavItem = ({ text }: TProps) => (
  <a
    href="/"
    className="font-base text-sm text-gray-300 text-footer whitespace-nowrap transition-all duration-150 ease-linear
    hover:text-white hover:scale-110"
  >
    {text}
  </a>
)
