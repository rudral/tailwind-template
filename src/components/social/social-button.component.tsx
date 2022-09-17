import { useEffect, useRef, useState } from "preact/hooks"

type TProps = {
  title: string
  IconNode: any
  [x: string]: any
}

export const SocialButton = ({ IconNode, title, ...otherProps }: TProps) => {
  const [hoverRef, isHovered] = useHover()

  return (
    <a
      {...otherProps}
      ref={hoverRef}
      href="#"
      className="shadow px-5 py-2 rounded-md ease-linear duration-200 ring-0 ring-inset
        hover:bg-primary hover:scale-110
        active:mt-0 active:scale-95 active:bg-secondary"
      title={title}
    >
      <IconNode isWhite={isHovered} />
    </a>
  )
}

// Hover hook.
const useHover = () => {
  const [value, setValue] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)
  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)
  useEffect(
    () => {
      const node = ref.current
      if (node) {
        node.addEventListener("mouseover", handleMouseOver)
        node.addEventListener("mouseout", handleMouseOut)
        return () => {
          node.removeEventListener("mouseover", handleMouseOver)
          node.removeEventListener("mouseout", handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )
  return [ref, value] as any
}
