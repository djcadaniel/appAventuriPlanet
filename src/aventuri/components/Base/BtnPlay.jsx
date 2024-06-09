import { FaGooglePlay } from "react-icons/fa"

export const BtnPlay = () => {
  return (
    <button className='bg-colorBtn hover:bg-white/85 hover:border hover:border-colorBtn px-8 py-3 rounded-md text-white hover:text-gray-700 duration-300 font-barlow-description'>
      <span className=' font-semibold '><FaGooglePlay /></span>
    </button>
  )
}