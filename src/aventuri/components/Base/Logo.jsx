import { Link } from "react-router-dom"
import logo from '/img/desktop/logo.png'

export const Logo = () => {
  return (
    <Link className='' to='/'>
      <img className="h-14 md:h-24" src={logo} alt="logo del sitio web" />
    </Link>
  )
}