import { Link } from "react-router-dom"
import logo from '/img/desktop/logo.png'

export const Logo = () => {
  return (
    <Link className='text-gray-100' to='/'>
      <img className="w-full" src={logo} alt="logo del sitio web" />
    </Link>
  )
}
