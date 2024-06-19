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
        <h1 className='hero__container--title'>AVENTURI PLANET</h1>
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
