// import imgUniverse from '../../../../public/img/desktop/backgrounImage.png';
import { useContext } from 'react';
import { BtnDark } from '../../components/Base/BtnDark';
import imgUniverse from '/img/desktop/backgrounImage.png';
import { AventuriContext } from '../../context/AventuriContext';

export const Home = () => {  
  
  const {isActive} = useContext(AventuriContext);
  
  return (
    <section className={`bg-cover bg-center bg-no-repeat `} style={{backgroundImage: `url(${imgUniverse})`}}>
      <div className={`main h-screen w-full flex flex-row justify-center items-center ${isActive ? 'blur-sm backdrop-blur-sm' : '' }`}>
        <div className='text-center mb-40'>
          <p className='text-7xl text-white'>
            <span className='block sm:inline-block font-madimi-title'>Aventuri</span>
            <span> </span>
            <span className='block sm:inline-block font-madimi-title'>Planet</span>
          </p>
          <p className='text-2xl text-gray-300 mb-4 barlow-descriptionw'>un mundo lleno de ideas</p>
          <BtnDark />
        </div>
      </div>
    </section>
  )
}