import { BtnDark } from '../../../components/Base/BtnDark';

export const Hero = () => {
  return (
    <section className='hero'>
      <figure>
        <img
          src='/img/mobile/bgMobile.png'
          className='hero__background block md:hidden'
        />
        <img
          src='/img/desktop/backgrounImage.png'
          className='hero__background hidden md:block'
        />
      </figure>
      <div className='hero__container container'>
        <h1 className='hero__container--title text-main flex flex-col gap-0 md:gap-5 md:flex-row justify-center'>
          <span>AVENTURI</span>
          <span>PLANET</span>
        </h1>
        <BtnDark />
      </div>
      {/* <figure className='hero__image'>
        <img
          src='/img/mobile/boysMobile.png'
          alt=''
        />
      </figure> */}
    </section>
  );
};
