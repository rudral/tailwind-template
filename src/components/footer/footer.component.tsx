import { YourLogo } from "../logo/your-logo.component"
import { FooterLink } from "./footer-link.component"
import { FooterNavItem } from "./footer-nav-item.component"

export const Footer = () => (
  <footer className="bg-primary text-white px-5 md:px-16 lg:px-36">
    <div className="py-10 flex flex-col md:flex-row items-start justify-between gap-2">
      <div className="flex flex-col items-start justify-center my-7">
        <a href="https://www.rudral.com" target="_blank" title="Your logo">
          <YourLogo isWhite />
        </a>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-3 md:gap-32">
          <div
            className="flex w-full flex-col items-start justify-center
          md:w-1/2"
          >
            <h4 className="font-lato font-semibold text-xl mb-2">
              Makes you look good.
            </h4>
            <p className="font-poppins font-light text-footer text-gray-300 text-base mb-3 leading-relaxed">
              We are an imaginary company that specializes in creating amazing
              html templates. Our templates are handcrafted with love and care.
              We believe that our templates should be easy to use and easy to
              customize, so that you can make them your own.
            </p>
          </div>
          <div
            className="grid grid-cols-3 items-center justify-around gap-10 w-full
          md:gap-24 md:items-end md:justify-between md:w-auto"
          >
            <div className="flex flex-col items-start justify-center gap-2">
              <h6 className="font-lato text-lg whitespace-nowrap">Company</h6>
              {["People", "Press", "About Us", "Contact"].map((item) => (
                <FooterNavItem key={item} text={item} />
              ))}
            </div>
            <div className="flex w-1/3 flex-col items-start justify-center gap-2">
              <h6 className="font-lato text-lg whitespace-nowrap">Resources</h6>
              {[
                "Careers",
                "Next Generation",
                "Continuity",
                "Legal Disclaimer",
              ].map((item) => (
                <FooterNavItem key={item} text={item} />
              ))}
            </div>
            <div className="flex w-1/3 flex-col items-start justify-center gap-2">
              <h6 className="font-lato text-lg whitespace-nowrap">Social</h6>
              {["Twitter", "Github", "Stack Overflow", "LinkedIn"].map(
                (item) => (
                  <FooterNavItem key={item} text={item} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="font-poppins bg-black/5 mx-5 rounded-t-2xl text-[11px] text-gray-300 flex flex-col  gap-2 items-center justify-center py-3
    md:gap-0 md:flex-row md:text-xs md:mx-28"
    >
      <div>
        ©{new Date().getFullYear()} Your Inc. All rights reserved. |{" "}
        <FooterLink text="Privacy Policy" /> |{" "}
        <FooterLink text="Terms of Use" />
      </div>
    </div>
  </footer>
)
