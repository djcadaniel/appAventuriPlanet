import { Footer } from "../components/Common/Footer"
import { Navbar } from "../components/Common/Navbar"

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}