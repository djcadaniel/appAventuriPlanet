import { BtnStart } from '../../../components/Base/BtnStart';
import boysMobile from '/img/mobile/boysMobile.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';
import iconStar from '/img/mobile/star.png';

export const Welcome = () => {
  return (
    <section className='bg-white relative h-screen'>
      <figure className='absolute md:-top-20 bottom-0 right-0 w-[80%] sm:w-[40%] md:w-[30%] min-w-[200px] z-10'>
        <img
          src='/img/mobile/boysMobile.png'
          alt=''
        />
      </figure>
      <div className='w-full h-full p-5 md:p-5 lg:p-12 container'>
        <div className='w-full h-full flex flex-row flex-wrap md:mt-10'>
          <TitleComponentsHome>
            <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
            <h1 className='title inline-block align-bottom'>BIENVENIDOS</h1>
            <span className='subtitle block ml-[5%]'>a Aventuri Planet</span>
            <div className='w-full h-auto md:w-[50%] ml-[0%] md:ml-[5%] pr-0pr-0 md:mb-6'>
              <p className='text-justify mt-10 md:text-xl'>
                Aquí encontrarás ideas aventureras que necesitas. Navega a través
                de nuestras secciones y descumbre contenido emocionante, recursos
                útiles y experiencias enriquecedoras
              </p><br />
              <p className='text-justify md:text-xl'>
                Estamos encantados de tenerte aquí. ¡Disfruta de tu visita y
                aprovecha al máximo todo lo que nuestra página tiene para
                ofrecerte!
              </p>
            </div>
            <div className='w-full md:w-[60%] flex justify-start md:justify-center mt-8 md:mt-14'>
              <BtnStart />
            </div>
          </TitleComponentsHome>
        </div>
      </div>
    </section>
  );
};
