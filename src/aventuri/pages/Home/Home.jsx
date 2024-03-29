// import imgUniverse from '../../../../public/img/desktop/backgrounImage.png';
import { useContext } from 'react';
import { BtnDark } from '../../components/Base/BtnDark';
import imgUniverse from '/img/desktop/backgrounImage.png';
import bgCategorias from '/img/mobile/bgCategoriasMobiles.png';
import bgWelcome from '/img/desktop/bgWelcome.png';
import { AventuriContext } from '../../context/AventuriContext';
import { Welcome } from './components/Welcome';
import { Categorias } from './components/Categorias';

export const Home = () => {  
  
  const {isActive, setIsActive} = useContext(AventuriContext);
  const handleClick =()=>{
    if(isActive) {
      setIsActive(!isActive)
    }
  }
  
  return (
    <div onClick={handleClick}>
      <div className={`w-full bg-azul`}>
        <div className='main'>
          <section className={`h-[calc(100vh+5rem)] w-full flex flex-row justify-center items-center ${isActive ? 'blur-sm md:blur-none backdrop-blur-sm' : '' } bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${imgUniverse})`}}>
            <div className='text-center mb-40'>
              <p className='text-7xl text-white mb-4'>
                <span className='block sm:inline-block font-madimi-title'>Aventuri</span>
                <span> </span>
                <span className='block sm:inline-block font-madimi-title'>Planet</span>
              </p>
              {/* <p className='text-2xl text-gray-300 mb-4 barlow-description'>un mundo lleno de ideas</p> */}
              <BtnDark />
            </div>
          </section>
          <section className='h-screen bg-white'>
            <Welcome />
          </section>
          <section className='h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgCategorias})` }}>
            <Categorias />
          </section>
        </div>
      </div>
    </div>
  )
}