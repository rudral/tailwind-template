type TProps = {
  text: string
}

export const FooterLink = ({ text }: TProps) => (
  <a
    href="/"
    className="text-footer whitespace-nowrap mt-3 transition-all ease-linear duration-150
  hover:text-white"
  >
    {text}
  </a>
)
