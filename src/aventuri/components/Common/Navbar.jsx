import { Link } from "react-router-dom"
import { ItemNavbar } from "./ItemNavbar"
// import logo from '../../../../public/img/desktop/logo.png'
import logo from '/appAventuriPlanet/img/desktop/logo.png'

export const listRoute = [
  {
    id: 1,
    name: 'Nosotros',
    path: '/nosotros'
  },
  {
    id: 2,
    name: 'Clases',
    path: '/clases'
  },
  {
    id: 3,
    name: 'Especialidades',
    path: '/especialidades'
  },
  {
    id: 4,
    name: 'Tienda',
    path: '/tienda'
  },
]

export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent">
      <nav className="main flex flex-row w-full max-w-screen-xl items-center gap-3">
        <div className="w-[20%] lg:w-[8%] p-5">
          <Link className='text-gray-100' to='/'>
            <img className="w-full" src={logo} alt="logo del sitio web" />
          </Link>
        </div>
        <div className="w-[80%] lg:w-[92%] flex flex-row items-center justify-center p-5">
          <ul className="flex gap-5">
            {
              listRoute.map(item => (
                <li key={item.id} className="text-gray-100">
                  <ItemNavbar 
                    {...item}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}
