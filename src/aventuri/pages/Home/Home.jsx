// import imgUniverse from '../../../../public/img/desktop/backgrounImage.png';
import { useContext } from 'react';
import { BtnDark } from '../../components/Base/BtnDark';
import imgUniverse from '/img/desktop/backgrounImage.png';
import bgCategories from '/img/desktop/bgCategoriesDesktop.png';
import bgCategoriesMobile from '/img/mobile/bgCategoriesMobile.png';
import bgWelcome from '/img/desktop/bgWelcome.png';
import bgChildrenDesktop from '/img/desktop/childrenDesktop.png';
import { AventuriContext } from '../../context/AventuriContext';
import { Welcome } from './components/Welcome';
import { Categorias } from './components/Categorias/Categorias';
import { Youtube } from './components/Youtube';
import { Store } from './components/Store';
import { Invitation } from './components/Invitation/Invitation';
import { Hero } from './components/Hero';

export const Home = () => {
  const { isActive, setIsActive } = useContext(AventuriContext);
  const handleClick = () => {
    if (isActive) {
      setIsActive(!isActive);
    }
  };

  return (
    <div
      onClick={handleClick}
      className='w-full'
    >
      <div className={`w-ful`}>
        <Hero />
        <Welcome />
        <section
          className='relative h-screen w-full'
          // style={{ backgroundImage: `url(${bgCategorias})` }}
        >
          <figure className='absolute w-full h-full -top-[600px] md:-top-80'>
            <img src={bgCategoriesMobile} alt="fondo de categorias" className='block md:hidden w-full h-[calc(100vh+38rem)] md:h-[calc(100vh+70rem)] object-center' />
            <img src={bgCategories} alt="fondo de categorias" className='hidden md:block w-full h-[calc(100vh+20rem)] md:h-[calc(100vh+70rem)] object-center' />
          </figure>
          <Categorias />
        </section>
        <section className='h-screen bg-cover bg-center bg-no-repeat bg-white'>
          <Youtube />
        </section>
        <section className='relative h-screen w-full bg-cover bg-center bg-no-repeat bg-white'>
          <Store />
          {/* <figure className='absolute  bottom-0  w-full h-[50%]'>
            <img src={bgChildrenDesktop} alt="" className='w-full h-full object-center'/>
          </figure> */}
        </section>
        <section className='h-auto w-full bg-cover bg-center bg-no-repeat bg-white'>
          <Invitation />
        </section>
      </div>
    </div>
  );
};
