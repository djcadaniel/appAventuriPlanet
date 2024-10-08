import { BtnStart } from '../../../components/Base/BtnStart';
import boysMobile from '/img/mobile/boysMobile.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';
import iconStar from '/img/mobile/star.png';

export const Welcome = () => {
  return (
    <section className='bg-white relative h-screen'>
      <figure className='absolute bottom-0 right-0 md:-top-20 w-[80%] sm:w-[50%] md:w-[95%] xl:w-[90%] 2xl:w-[90%] min-w-[200px] z-10 flex justify-end items-end xl:items-start'>
        <img
          src='/img/mobile/boysMobile.png'
          alt=''
          className='w-[90%] md:w-[55%] md:h-[55%] lg:w-[35%] xl:w-[40%] xl:h-[70%] 2xl:w-[36%] 2xl:h-[80%]'
        />
      </figure>
      <div className='w-full h-full p-5 md:p-5 lg:p-12 container'>
        <div className='w-full h-full flex flex-row flex-wrap md:mt-10'>
          <TitleComponentsHome>
            <div className='flex flex-col'>
              <div className='flex w-full'>
                <div className='mr-5'>
                  <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block'/>
                </div>
                <div className='w-full'>
                  <h1 className='title inline-block align-bottom title-p1'>BIENVENIDOS</h1>
                  <span className='subtitle block title-p2'>a Aventuri Planet</span>
                </div>
              </div>
              <div className='w-full h-auto md:w-[50%] ml-[0%] md:ml-[5%] pr-0pr-0 md:mb-6'>
                <p className='text-justify mt-10 text'>
                  Aquí encontrarás ideas aventureras que necesitgit push as. Navega a través
                  de nuestras secciones y descumbre contenido emocionante, recursos
                  útiles y experiencias enriquecedoras
                </p><br />
                <p className='text text-justify'>
                  Estamos encantados de tenerte aquí. ¡Disfruta de tu visita y
                  aprovecha al máximo todo lo que nuestra página tiene para
                  ofrecerte!
                </p>
              </div>
              <div className='w-full md:w-[60%] flex justify-start md:justify-center mt-8 md:mt-14'>
                <BtnStart />
              </div>

            </div>
          </TitleComponentsHome>
        </div>
      </div>
    </section>
  );
};
