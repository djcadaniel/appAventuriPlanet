import { useLocation } from "react-router-dom"
import { ItemNavbar } from "./ItemNavbar"
import { Logo } from "../Base/Logo"
// import logo from '../../../../public/img/desktop/logo.png

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

  const {pathname} = useLocation()

  return (
    <header className={`fixed w-full ${ (pathname === '/' ? 'bg-blue-900/80' : 'bg-blue-400')}`}>
      <nav className="main relative md:flex-row w-full min-h-screen md:items-center md:gap-3 md:bg-red-500 bg-black/50">
        <div className='absolute left-4 top-4'>
          <Logo />
        </div>
        <ul className="flex flex-col items-center justify-center w-full min-h-screen gap-5">
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
        {/* <div className="w-full lg:w-[92%] flex flex-row items-center justify-center">
        </div> */}
      </nav>
    </header>
  )
}
