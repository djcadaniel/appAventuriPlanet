import iconStar from '/img/mobile/star.png';
import cat1 from '/img/mobile/cat1.png';
import cat2 from '/img/mobile/cat2.png';
import cat3 from '/img/mobile/cat3.png';
import { Category } from './Category';
import { TitleComponentsHome } from '../Common';


export const Categorias = () => {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-full p-5 md:p-0 lg:p-7 container">
      <div className="w-full h-[20%] flex flex-row flex-wrap md:p-5 md:pt-12">
        <TitleComponentsHome>
          <div className='flex'>
            <div>
              <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
            </div>
            <h1 className=' inline-block align-bottom title-p1'>
              <div className='flex flex-col'>
                <span>APRENDE, CREA,</span>
                <span>ENSEÑA</span>
              </div>
            </h1>
          </div>
        </TitleComponentsHome>
      </div>
      <div className='w-full h-[80%] grid grid-cols-3 grid-rows-3 md:grid-rows-2 md:p-10'>
        <div className='col-start-2 col-span-2 md:col-start-1 md:col-span-1 flex flex-col justify-center items-center'>
          <Category >
            <img src={cat1} alt="" className='h-3/4 md:h-5/6'/>
            <span className='text-white text-lg'>GENERALES</span>
          </Category>
        </div>
        <div className='col-start-1 col-span-2 md:col-start-2 md:col-span-1 md:row-start-2 flex flex-col justify-center items-center'>
          <Category>
            <img src={cat2} alt="" className='h-3/4 md:h-5/6'/>
            <span className='text-white text-lg'>CLASES</span>
          </Category>
        </div>
        <div className='col-start-2 col-span-2 md:col-start-3 md:col-span-1 flex flex-col justify-center items-center'>
          <Category>
            <img src={cat3} alt="" className='h-3/4 md:h-5/6'/>
            <span className='text-white text-lg'>ESPECIALIDADES</span>
          </Category>
        </div>
      </div>
    </div>
  )
}
