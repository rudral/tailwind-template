import { useRef } from "preact/hooks"
import Swal from "sweetalert2"
import { SearchIcon } from "../icons/search-icon.component"

export const Search = () => {
  const ref = useRef<HTMLInputElement | null>(null)

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return
    const { value: searchText } = e.target as HTMLInputElement

    if (ref.current) {
      // Clear search box.
      ref.current.value = ""

      // Remove focus.
      ref.current.blur()
    }

    Swal.fire({
      icon: "success",
      title: "Search Results",
      text: `Searched: "${searchText}"`,
      confirmButtonText: "Got it!",
      footer:
        '<a href="https://www.rudral.com" target="_blank">👋Hey! Dont forget to visit my site👉 www.rudral.com</a>',
    })
  }

  return (
    <div className="hidden lg:flex items-center justify-end mr-10">
      <label htmlFor="search" className="px-1 cursor-pointer" title="Search">
        <SearchIcon />
      </label>
      <input
        ref={ref}
        id="search"
        type="text"
        placeholder="Search"
        className="w-0 pl-0 flex items-center outline-none text-primary bg-transparent mt-1 transition-all ease-in duration-300
        border-primary border-b-[3px]
        placeholder:text-primary/60 placeholder:text-xl
        focus:w-full focus:pl-2
        "
        onKeyPress={handleSearch}
      />
    </div>
  )
}
