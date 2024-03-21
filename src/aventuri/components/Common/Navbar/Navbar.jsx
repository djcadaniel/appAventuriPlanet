import { ItemNavbar } from "./ItemNavbar"
import { Logo } from "../../Base/Logo"
import { RiMenuLine } from "react-icons/ri";
import { useMenu } from "./hooks/useMenu";
import { listRoute } from "./helpers/listRoute";
import { AventuriContext } from "../../../context/AventuriContext";
import { useContext } from "react";
// import logo from '../../../../public/img/desktop/logo.png

export const Navbar = () => {
  
  const {pathname, onChangeMenu} = useMenu();
  const { isActive } = useContext(AventuriContext)
  
  return (
    <header className={`z-50 fixed w-full ${ (pathname === '/' ? 'bg-blue-900/80' : 'bg-blue-400')}`}>
        <div className='absolute left-5 top-5 z-50'>
          <Logo />
        </div>
        <div className='absolute right-5 top-5 z-50'>
          <button 
            onClick={onChangeMenu}
          >
            <RiMenuLine className="text-4xl text-white"/>
          </button>
        </div>
      <nav className={`absolute -left-full md:flex-row w-9/12 min-h-screen  ${isActive && 'left-0 '} md:items-center md:gap-3 md:bg-red-500 bg-blue-950/45 transition-all ease-in-out duration-500`}>
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
