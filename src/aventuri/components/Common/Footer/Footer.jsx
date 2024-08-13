import imgWorld from '/img/mobile/logoMobile.png'
import bgFooterMobile from '/img/mobile/fondoFooter.jpg'
import girlFooter from '/img/mobile/girlFooter.png'
import boyFooter from '/img/mobile/boyFooter.png'
import nave from '/img/desktop/nave.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export const Footer = () => {

  return (
    <footer className="relative w-full h-[100vh] bg-blue-900">
      <figure className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
        <img src={bgFooterMobile} alt="imagen de footer" className='w-full h-full object-center object-cover'/>
      </figure>
      <div className="h-screen w-full flex flex-col container2">
        <div className='relative w-full h-[60%] '>
          <div className='flex flex-row justify-center items-center  p-6'>
            <img src={imgWorld} alt="" className='w-[60%] md:w-[15%] max-w-[300px] lg:absolute lg:bottom-28 lg:right-14' />
          </div>
          <img src={girlFooter} alt="" className='block lg:hidden absolute left-8 bottom-2 h-[48%]' />
          <img src={boyFooter} alt="" className='block lg:hidden absolute right-8 bottom-2 h-[48%]' />
          <img src={nave} alt="" className='hidden lg:block lg:absolute top-[5%] left-[33%] w-[35%]' />
          <img src={imgWorld} alt="" className='hidden lg:block lg:absolute top-[30%] left-[5%] w-[15%]' />
          {/* <img src={boyFooter} alt="" className='hidden lg:absolute right-8 bottom-2 h-[48%]' /> */}
        </div>
        <div className='w-full h-[40%] flex flex-wrap flex-row pt-0 text-white z-50'>
          <div className="w-full lg:w-[40%] flex flex-row flex-wrap justify-center items-center">
            <div className='text-center'>
              <h2 className='font-madimi-title text-4xl text-colorBtn'>Aventuri Planet</h2>
              <span>Inspirate en nuestras redes</span>
              <div className='flex'>
                <img src={<FaInstagram />} alt="" className='h-6 w-6'/>
                <img src={<FaFacebookF />} alt="" className='h-6'/>
                <img src={<FaYoutube />} alt=""className='h-6' />
                <img src={<FaPinterestP />} alt="" className='h-6'/>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[60%] flex my-9'>
            <div className='w-1/2 flex justify-center items-center'>
              <ul>
                <li>Nosotros</li>
                <li>Contáctanos</li>
                <li>Tienda</li>
              </ul>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <ul>
                <li>Generales</li>
                <li>Clases</li>
                <li>Especialidades</li>
              </ul>
            </div>
          </div>
          <div className="w-full font-light text-sm flex flex-col justify-center items-center">
            <p>Todos los dereechos reservados 2024 @ Anveturi Planet</p>
            <p>Desarrollado por Daniel Castro</p>
          </div>
        </div>
      </div>
    </footer>
  )
}