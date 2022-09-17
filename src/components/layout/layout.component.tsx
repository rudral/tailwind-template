import { Navbar } from "../navbar/navbar.component"
import { MainBg } from "./main-bg.component"
import { Footer } from "../footer/footer.component"

type TProps = { children: any }

export const Layout = ({ children }: TProps) => {
  return (
    <>
      <Navbar />
      <main className="relative bg-trasparent w-full md:min-h-[90vh] flex items-start md:items-center justify-center">
        <div className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden">
          <MainBg />
        </div>
        {children}
      </main>
      <Footer />
    </>
  )
}
