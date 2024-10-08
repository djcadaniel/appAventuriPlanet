import { BtnPlay } from '../../../components/Base/BtnPlay';
import girlMobile from '/img/mobile/girlMobile.png';
import { TitleComponentsHome } from './Common';
import iconStar from '/img/mobile/star.png';

export const Youtube = () => {
  return (
    <div className="relative w-full h-full p-5 md:p-10 lg:p-7 xl:pr-0 lg:flex lg:flex-row justify-end items-center container">
      <div className='w-full flex flex-row justify-start md:justify-end lg:justify-end'>
          <div className='w-full xl:pr-20 flex justify-start lg:justify-end'>
            <div className='w-full'>
              <TitleComponentsHome>
                <img src={iconStar} alt="" className='h-10 md:h-12 inline-block mr-2'/>
                <h1 className="title-p1 inline-block align-bottom">SABIAS QUE</h1>
                <span className="title-p2 block ml-12">tenemos un canal de Youtube</span>
              </TitleComponentsHome>
              <div className='flex flex-row flex-wrap w-[100%] pt-8 -mr-4'>
                <div className='w-full flex flex-row justify-end  md:mr-0 items-center lg:justify-center mt-4'>
                  <BtnPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='absolute bottom-0 left-0 w-[100%] lg:top-10 xl:top-0'>
        <img src={girlMobile} className='w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] 2xl:w-[15%] min-w-[250px]' alt="" />
      </div>
    </div>
  )
}