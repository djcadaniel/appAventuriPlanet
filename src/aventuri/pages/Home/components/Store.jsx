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
import bgChildrenDesktop from '/img/desktop/childrenDesktop.png';
import { useMediaQuery } from 'react-responsive'

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
    original: "https://picsum.photos/id/237/1000/600",
    thumbnail: "https://picsum.photos/id/237/250/150"
  },
  {
    id: 4,
    original: "https://picsum.photos/id/238/1000/600",
    thumbnail: "https://picsum.photos/id/238/250/150"
  },
  {
    id: 5,
    original: "https://picsum.photos/id/239/1000/600",
    thumbnail: "https://picsum.photos/id/239/250/150"
  },
  {
    id: 6,
    original: "https://picsum.photos/id/240/1000/600",
    thumbnail: "https://picsum.photos/id/240/250/150"
  },
] 

export const Store = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0].original)
  // const [storeImages, setStoreImages] = useState([images[0].original, images[1].original])
  const [storeImages, setStoreImages] = useState([images[0].original])

  const isBigScreen = useMediaQuery({ query: '(max-width:1400px)' })
  const isDesktop = useMediaQuery({query: '(max-width: 1000px)'  })
  const isTable = useMediaQuery({ query: '(max-width:768px)' })
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })

  const newImage = (index, images, next=true, cant) => {
    const condition = next ? (currentIndex < images.length - 1) : (currentIndex > 0);
    const nextIndex = next ? (condition ? currentIndex + cant : 0) : (condition ? currentIndex - cant : images.length - 1)
    if(nextIndex >= images.length){
      setCurrentIndex(0)
      setStoreImages([])
    }else{
      setSelectedImage(images[nextIndex].original)
      setCurrentIndex(nextIndex)
      setStoreImages(prev => {
        // return [...prev, images[nextIndex].original, images[nextIndex + 1].original]
        return [...prev, images[nextIndex].original]
      })
    }
  }
  // setImagesToShow()

  // const previous = () => {
  //   newImage(currentIndex, images, false, 1)
  // }
  // const previous = useMediaQuery(
  //   {isMobile},
  //   newImage(currentIndex, images, false, 1)
  // )
  // const next = useMediaQuery(
    //   {isMobile},
    //   newImage(currentIndex, images, false, 1)
    // )
    const previous = () =>{
      if(isMobile){
         newImage(currentIndex, images, false, 1)
      }
    }
    const next = () =>{
      if(isMobile){
         newImage(currentIndex, images, true, 2)
      }
    }
  
  console.log(currentIndex)
  console.log(selectedImage)
  console.log(storeImages)
  return (
    <div className="relative w-full h-full p-0 container">
      <div className='px-5 pt-10 pb-8'>
        <TitleComponentsHome>
          <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
          <h1 className="title-p1 inline-block align-bottom">AVENTURI TIENDA</h1>
        </TitleComponentsHome>
      </div>

      <div className=' w-full h-[calc(100%-9rem)] flex flex-col'>
        <div className='w-full h-[50%] rounded-3xl py-6 px-14'>
            <div className='absolute top-[45%] left-0' onClick={previous} >prev</div>
            <div className='absolute top-[45%] right-0' onClick={next} >next</div>
            {storeImages?.map( item => (
              <div key={item} className='w-full h-full'>
                <img src={item} alt="image del slide" className='h-full w-full object-cover' /> 
              </div>
            ))}
        </div>
        <div
            className='relative h-[45%] w-full bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bgChildrenMobile})` }}
          >
          <figure className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
            <img src={bgChildrenDesktop} alt="" className='hidden md:block w-full h-full object-center '/>
            <img src={bgChildrenMobile} alt="" className='block md:hidden w-full h-full object-center  '/>
          </figure>
        </div>
      </div>
    </div>
  )
}