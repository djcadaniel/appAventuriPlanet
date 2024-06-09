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
    <header className="w-full bg-green-700 max-w-[1400px] border border-green-500 mx-auto">
      <div className={`main z-50 relative w-full ${ (pathname === '/' ? 'bg-blue-900/80' : 'bg-blue-400')}`} >
        <div className='absolute left-5 top-5 z-50'>
          <Logo />
        </div>
        <div className='absolute md:hidden right-14 top-0 z-50'>
          <button 
            onClick={onChangeMenu}
          >
            <RiMenuLine className="text-4xl text-white fixed"/>
          </button>
        </div>
        <nav className={`fixed md:fixed md:m-auto -left-full md:left-0  md:flex-row w-9/12 md:w-full h-screen md:h-[50px]  ${isActive && 'left-0 '} md:items-center md:gap-3  bg-blue-950/45 md:bg-black/65 transition-all ease-in-out duration-500`}>
          <ul className="flex flex-col md:flex-row items-center justify-center w-full h-screen md:h-full gap-5">
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
      </div>
    </header>
  )
}
