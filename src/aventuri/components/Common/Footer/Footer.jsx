import imgWorld from '/img/mobile/logoMobile.png'
import girlFooter from '/img/mobile/girlFooter.png'
import boyFooter from '/img/mobile/boyFooter.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { getBackgoundColor } from '../../../helpers/getBackgroundColor';
import { useEffect, useState } from 'react';

export const Footer = () => {

  return (
    <footer className="w-full bg-blue-900">
      <div className="h-screen w-full flex flex-col container2">
        <div className='relative w-full h-[60%] '>
          <div className='flex flex-row justify-center items-cente  p-6'>
            <img src={imgWorld} alt="" className='w-[60%] max-w-[300px] lg:absolute lg:bottom-28 lg:right-14' />
          </div>
          <img src={girlFooter} alt="" className='block lg:hidden absolute left-8 bottom-2 h-[48%]' />
          <img src={boyFooter} alt="" className='block lg:hidden absolute right-8 bottom-2 h-[48%]' />
        </div>
        <div className='w-full h-[40%] flex flex-wrap flex-row pt-16 text-white bg-blue-950'>
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
          <div className="w-full text-center font-light text-sm">
            <p>Todos los dereechos reservados 2024 @ Anveturi Planet</p>
            <p>Desarrollado por Daniel Castro</p>
          </div>
        </div>
      </div>
    </footer>
  )
}