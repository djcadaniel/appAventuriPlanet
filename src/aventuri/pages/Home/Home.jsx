// import imgUniverse from '../../../../public/img/desktop/backgrounImage.png';
import { useContext } from 'react';
import { BtnDark } from '../../components/Base/BtnDark';
import imgUniverse from '/img/desktop/backgrounImage.png';
import bgCategories from '/img/desktop/bgCategoriesDesktop.png';
import bgWelcome from '/img/desktop/bgWelcome.png';
import bgChildrenMobile from '/img/mobile/childrenMobile.png';
import bgChildrenDesktop from '/img/desktop/childrenDesktop.png';
import { AventuriContext } from '../../context/AventuriContext';
import { Welcome } from './components/Welcome';
import { Categorias } from './components/Categorias/Categorias';
import { Youtube } from './components/Youtube';
import { Store } from './components/Store';
import { Camp } from './components/Camp';
import { Invitation } from './components/Invitation';
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
      <div className={`w-full bg-azul`}>
        <Hero />
        <Welcome />
        <section
          className='relative h-screen w-full'
          // style={{ backgroundImage: `url(${bgCategorias})` }}
        >
          <figure className='absolute w-full h-full -top-80'>
            <img src={bgCategories} alt="fondo de categorias" className='w-full h-[calc(100vh+20rem)] sm:h-[calc(100vh+70rem)] object-center' />
          </figure>
          <Categorias />
        </section>
        <section className='h-screen bg-cover bg-center bg-no-repeat bg-white'>
          <Youtube />
        </section>
        <section className='h-screen bg-cover bg-center bg-no-repeat bg-white'>
          <Store />
        </section>
        <section
          className='h-screen bg-cover bg-center bg-no-repeat bg-white'
          style={{ backgroundImage: `url(${bgChildrenMobile})` }}
        >
          <Camp />
        </section>
        <section className='h-screen bg-cover bg-center bg-no-repeat bg-white'>
          <Invitation />
        </section>
      </div>
    </div>
  );
};
