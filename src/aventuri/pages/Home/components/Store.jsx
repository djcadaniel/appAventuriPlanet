import { BtnPlay } from '../../../components/Base/BtnPlay';
import iconStar from '/img/mobile/star.png';
import girlMobile from '/img/mobile/girlMobile.png';
import { TitleComponentsHome } from './Common/TitleComponentsHome';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useEffect, useRef, useState } from 'react';
import { list } from 'postcss';
import { Camp } from './Camp';
import bgChildrenMobile from '/img/mobile/childrenMobile.png';

const images = [
  {
    id: 1,
    original: "https://picsum.photos/id/1018/1000/600",
    thumbnail: "https://picsum.photos/id/1018/250/150"
  },
  {
    id: 2,
    original: "https://picsum.photos/id/1015/1000/600",
    thumbnail: "https://picsum.photos/id/1015/250/150"
  },
  {
    id: 3,
    original: "https://picsum.photos/id/1019/1000/600",
    thumbnail: "https://picsum.photos/id/1019/250/150"
  }
] 

export const Store = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0].original)

  const newImage = (index, images, next=true) => {
    const condition = next ? (currentIndex < images.length - 1) : (currentIndex > 0);
    const nextIndex = next ? (condition ? currentIndex + 1 : 0) : (condition ? currentIndex - 1 : images.length - 1)
    setSelectedImage(images[nextIndex].original)
    setCurrentIndex(nextIndex)
  }

  const previous = () => {
    newImage(currentIndex, images, false)
    console.log('anterior')
  }
  
  const next =()=>{
    newImage(currentIndex, images, true)
    console.log('siguiente')
  }
  
  console.log(currentIndex)
  return (
    <div className="relative w-full h-full p-5 container">
      <TitleComponentsHome> 
        <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
        <h1 className="title inline-block align-bottom">AVENTURI TIENDA</h1>
      </TitleComponentsHome>
      <div className='relative w-full h-[50%] bg-green-300'>
        <div className='w-full h-full rounded-3xl border border-blue-700 p-6'>
            <div className='absolute top-[45%] left-0' onClick={previous} >prev</div>
            <div className='absolute top-[45%] right-0' onClick={next} >next</div>
            <img src={selectedImage} alt="" />
        </div>
      </div>
      <div
          className='h-[45%] w-full bg-cover bg-center bg-no-repeat bg-blue-500'
          style={{ backgroundImage: `url(${bgChildrenMobile})` }}
        >
          <Camp />
        </div>
    </div>
  )
}