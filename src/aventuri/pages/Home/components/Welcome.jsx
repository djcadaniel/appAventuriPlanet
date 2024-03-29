import { BtnStart } from '../../../components/Base/BtnStart';
import iconStar from '/img/mobile/star.png';
import boysMobile from '/img/mobile/boysMobile.png';

export const Welcome = () => {
  return (
    <div className="relative w-full h-full p-5 md:p-5">
      <div className="w-full h-auto flex flex-row flex-wrap md:mt-10">
        <div className='w-[10%] md:w-[7%] h-auto'>
          <img src={iconStar} alt="" className='h-12 inline-block'/>
        </div>
        <div className='w-[90%] md:w-[93%] h-auto md:mb-6'>
          <h1 className="title inline-block align-bottom">BIENVENIDOS</h1>
          <span className="subtitle block">a Aventuri Planet</span>
        </div>
        <div className='w-[90%] md:w-[60%] ml-[10%] md:ml-[7%] pr-8 md:pr-0 md:mb-6'>
          <p className="text-justify mt-5 md:text-xl">Aquí encontrarás ideas aventureras que necesitas. Navega a través de nuestras secciones y descumbre contenido emocionante, recursos útiles y experiencias enriquecedoras</p>
          <p className="text-justify md:text-xl">Estamos encantados de tenerte aquí. ¡Disfruta de tu visita y aprovecha al máximo todo lo que nuestra página tiene para ofrecerte!</p>
        </div>
        <div className='w-[90%] mt-6 ml-[10%] md:ml-[30%]'>
          <BtnStart />
        </div>
      </div>
      <div className='absolute bottom-0 right-0'>
        <img src={boysMobile} alt="" className='h-96 md:h-[450px] w-full'/>
      </div>
    </div>
  )
}