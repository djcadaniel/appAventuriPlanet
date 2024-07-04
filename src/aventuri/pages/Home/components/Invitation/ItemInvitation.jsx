import React from 'react'
import ins1 from '/img/desktop/instagram/4.jpg'

export const ItemInvitation = ({image}) => {
  return (
    <div className="relative w-full h-auto max-h-[350px] rounded-lg overflow-hidden transformInstagram">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-40 hover:opacity-0 transition duration-500 ease-in-out"></div>
      <img src={image} className="w-full h-full object-cover " alt="foto de instagaram" />
      <a href="#" className="absolute bottom-4 left-[42%] text-white font-bold w-[20%] text-center bg-[#28D989] hover:bg-[#1c9a61] transition duration-300 ease-in-out rounded-md">Ir</a>
    </div>
  )
}