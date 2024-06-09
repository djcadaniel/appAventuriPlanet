import { BtnPlay } from '../../../components/Base/BtnPlay';
import iconStar from '/img/mobile/star.png';
import girlMobile from '/img/mobile/girlMobile.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';

export const Store = () => {
  return (
    <div className="relative w-full h-full p-5 md:p-10 lg:p-7 xl:pr-36 lg:flex lg:flex-row justify-end items-center">
      <TitleComponentsHome>
        <h1 className="title inline-block align-bottom">AVENTURI TIENDA</h1>
      </TitleComponentsHome>
    </div>
  )
}