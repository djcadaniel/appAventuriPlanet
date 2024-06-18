import { BtnStart } from '../../../components/Base/BtnStart';
import boysMobile from '/img/mobile/boysMobile.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';

export const Welcome = () => {
  return (
    <section className='bg-white'>
      <div className='w-full h-full p-5 md:p-5 lg:p-12 container'>
        <div className='w-full h-auto flex flex-row flex-wrap md:mt-10'>
          <TitleComponentsHome>
            <h1 className='title inline-block align-bottom'>BIENVENIDOS</h1>
            <span className='subtitle block ml-10'>a Aventuri Planet</span>
          </TitleComponentsHome>
          <div className='w-[90%] md:w-[60%] ml-[10%] md:ml-[7%] pr-8 md:pr-0 md:mb-6'>
            <p className='text-justify mt-5 md:text-xl'>
              Aquí encontrarás ideas aventureras que necesitas. Navega a través
              de nuestras secciones y descumbre contenido emocionante, recursos
              útiles y experiencias enriquecedoras
            </p>
            <p className='text-justify md:text-xl'>
              Estamos encantados de tenerte aquí. ¡Disfruta de tu visita y
              aprovecha al máximo todo lo que nuestra página tiene para
              ofrecerte!
            </p>
          </div>
          <div className='w-[90%] mt-6 ml-[10%] md:ml-[30%]'>
            <BtnStart />
          </div>
        </div>
      </div>
    </section>
  );
};
