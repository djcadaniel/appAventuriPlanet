import imgWorld from '/img/mobile/logoMobile.png'
import bgFooterMobile from '/img/mobile/fondoFooter.jpg'
import girlFooter from '/img/mobile/girlFooter.png'
import boyFooter from '/img/mobile/boyFooter.png'
import nave from '/img/desktop/nave.png'
import planetaRosa from '/img/desktop/planetaRosa.png'
import footerAzul from '/img/mobile/footerAzul.png'
import nubeFooter from '/img/mobile/nubeFooter.png'
import nubeFooterDesktop from '/img/desktop/nubeFooterDesktop.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export const Footer = () => {

  return (
    <footer className="relative w-full h-[100vh] bg-blue-900">
      <figure className='absolute -top-[30px] lg:-top-[50px]  w-full z-30'>
        <img src={nubeFooter} alt="" className='lg:hidden w-full h-[160px] md:h-[200px] lg:h-[120px] object-center'/>
        <img src={nubeFooterDesktop} alt="" className='hidden lg:block w-full h-[260px] object-center'/>
      </figure>
      <div className='container2 w-full h-full'>
        <figure className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
          <img src={bgFooterMobile} alt="imagen de footer" className='w-full h-full object-center object-cover'/>
        </figure>
        <div className="h-full w-full flex flex-col">
          <div className='relative w-full h-[60%] lg:h-[80%]'>
            <div className='flex flex-row justify-center items-center  p-6'>
              <img src={imgWorld} alt="" className='w-[45%] lg:w-[15%] max-w-[300px] lg:absolute lg:bottom-28 lg:right-14 pt-5' />
            </div>
            <img src={girlFooter} alt="" className='block lg:hidden absolute left-8 bottom-2 h-[48%] z-50' />
            <img src={boyFooter} alt="" className='block lg:hidden absolute right-8 bottom-2 h-[48%] z-50' />
            <img src={nave} alt="" className='hidden lg:block lg:absolute top-[5%] lg:top-[15%] left-[33%] w-[35%]' />
            <img src={planetaRosa} alt="" className='hidden lg:block lg:absolute top-[30%] left-[5%] w-[15%]' />
            {/* <img src={boyFooter} alt="" className='hidden lg:absolute right-8 bottom-2 h-[48%]' /> */}
          </div>
          <div className='relative w-full h-[40%] lg:h-[20%] flex flex-row flex-wrap pt-0 text-white'>
            <figure className='absolute -top-[100px] w-full h-full'>
              <img src={footerAzul} alt="" className='object-center bg-no-repeat w-full h-[25rem] lg:h-[152%] z-20' />
            </figure>
            <div className="z-20 w-full lg:w-[40%] flex flex-row flex-wrap justify-center items-center">
              <div className='text-center'>
                <h2 className='title text-4xl text-colorBtn'>Aventuri Planet</h2>
                <span>Inspirate en nuestras redes</span>
                <div className='flex'>
                  <img src={<FaInstagram />} alt="" className='h-6 w-6'/>
                  <img src={<FaFacebookF />} alt="" className='h-6'/>
                  <img src={<FaYoutube />} alt=""className='h-6' />
                  <img src={<FaPinterestP />} alt="" className='h-6'/>
                </div>
              </div>
            </div>
            <div className='z-20 w-full lg:w-[60%] flex'>
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
            <div className="z-20 w-full lg:w-full font-light text-sm flex flex-col justify-center items-center bg-[#191D44]">
              <p>Todos los dereechos reservados 2024 @ Anveturi Planet</p>
              <p>Desarrollado por Daniel Castro</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}