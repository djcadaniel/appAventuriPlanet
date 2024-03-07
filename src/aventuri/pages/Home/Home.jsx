// import imgUniverse from '../../../../public/img/desktop/backgrounImage.png';
import imgUniverse from '/appAventuriPlanet/img/desktop/backgrounImage.png';

export const Home = () => {
  return (
    <section className='bg-cover bg-center bg-no-repeat h-screen' style={{backgroundImage: `url(${imgUniverse})`}}>
      <div className='main h-screen w-full flex flex-row justify-center items-center'>
        <div className='text-center mb-40'>
          <p className='text-7xl text-white'>
            <span className='block sm:inline-block'>Aventuri</span>
            <span> </span>
            <span className='block sm:inline-block'>Planet</span>
          </p>
          <br />
          <p className='text-2xl text-gray-300'>un mundo lleno de ideas</p>
        </div>
      </div>
    </section>
  )
}