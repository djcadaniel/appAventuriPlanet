import { BtnPlay } from '../../../components/Base/BtnPlay';
import girlMobile from '/img/mobile/girlMobile.png';
import { TitleComponentsHome } from './Common';
import iconStar from '/img/mobile/star.png';

export const Youtube = () => {
  return (
    <div className="relative w-full h-full p-5 md:p-10 lg:p-7 xl:pr-36 lg:flex lg:flex-row justify-end items-center container">
      <div className='flex flex-row flex-wrap justify-center'>
          <TitleComponentsHome>
            <img src={iconStar} alt="" className='h-10 md:h-12 inline-block mr-2'/>
            <h1 className="title inline-block align-bottom">SABIAS QUE</h1>
            <span className="subtitle block ml-10">tenemos un canal de Youtube</span>
          </TitleComponentsHome>
        <div className='flex flex-row flex-wrap w-[100%]'>
          <div className='w-full flex flex-row justify-end mr-10 md:mr-0 items-center lg:justify-center mt-4'>
            <BtnPlay />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-[50%] lg:top-10'>
        <img src={girlMobile} className='w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] min-w-[350px]' alt="" />
      </div>
    </div>
  )
}
