import { useEffect, useState } from "preact/hooks"

import { Link } from "preact-router/match"

import { YourLogo } from "../logo/your-logo.component"
import { Search } from "./search.component"

export const NAV_DATA = [
  {
    href: "/",
    label: "Login ",
    title: "Login to your account",
  },
  {
    href: "/signup",
    label: "Sign Up ",
    title: "Register a new account",
  },
]

export const Navbar = () => {
  return (
    <>
      <nav
        className="px-36 flex flex-col w-full items-center justify-between shadow font-poppins  bg-primary gap-2
      md:h-[90px] md:bg-white md:flex-row"
      >
        <div className="flex items-center justify-start md:hidden mt-2">
          <a href="https://www.rudral.com" target="_blank" title="Your logo">
            <YourLogo isWhite />
          </a>
        </div>
        <div className="w-1/3 hidden md:block">
          <a href="https://www.rudral.com" target="_blank" title="Your logo">
            <YourLogo />
          </a>
        </div>
        <div
          className="text-black flex flex-col items-center justify-center gap-3 py-5
        md:flex-row md:items-center md:justify-end md:gap-2 md:py-0"
        >
          <Search />
          {NAV_DATA.map((navItem, index) => (
            <Link
              activeClassName="bg-secondary md:!text-white !ring-0"
              key={navItem.href}
              href={navItem.href}
              className="text-white py-2 px-10 rounded-full text-lg font-bold ease-linear duration-200 text-center whitespace-nowrap
              ring-white ring-inset ring-2
              md:ring-primary md:text-primary
              hover:bg-white hover:text-primary
              md:hover:bg-primary md:hover:text-white"
              title={navItem.title}
            >
              {navItem.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
