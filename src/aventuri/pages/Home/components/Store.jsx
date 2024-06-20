import { BtnPlay } from '../../../components/Base/BtnPlay';
import iconStar from '/img/mobile/star.png';
import girlMobile from '/img/mobile/girlMobile.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600",
    thumbnail: "https://picsum.photos/id/1018/250/150"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600",
    thumbnail: "https://picsum.photos/id/1015/250/150"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600",
    thumbnail: "https://picsum.photos/id/1019/250/150"
  },
] 

export const Store = () => {
  return (
    <div className="relative w-full h-full p-5 md:p-10 lg:p-7 xl:pr-36 lg:flex lg:flex-row justify-end items-center container">
      <TitleComponentsHome>
        <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
        <h1 className="title inline-block align-bottom">AVENTURI TIENDA</h1>
      </TitleComponentsHome>
      <div>
        <ImageGallery items={images} />
      </div>
    </div>
  )
}