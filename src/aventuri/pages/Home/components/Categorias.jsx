import iconStar from '/img/mobile/star.png';
import cat1 from '/img/mobile/cat1.png';
import cat2 from '/img/mobile/cat2.png';
import cat3 from '/img/mobile/cat3.png';


export const Categorias = () => {
  return (
    <div className="relative w-full h-full p-5 md:p-0">
      <div className="w-full h-[20%] flex flex-row flex-wrap md:pt-16">
        <div className='w-[10%] md:w-[7%] h-auto'>
          <img src={iconStar} alt="" className='h-12 inline-block'/>
        </div>
        <div className='w-[90%] md:w-[93%] h-auto md:mb-6'>
          <h1 className="title inline-block align-bottom">APRENDE, CREA, Y ENSEÑA</h1>
        </div>
      </div>
      <div className='w-full h-[80%] grid grid-cols-3 grid-rows-3 md:grid-rows-2 md:p-10'>
        <div className='col-start-2 col-span-2 md:col-start-1 md:col-span-1 flex flex-col justify-center items-center'>
          <button className='h-full w-full flex flex-col justify-center items-center'>
            <img src={cat1} alt="" className='h-3/4 md:h-5/6'/>
            <span className='text-white text-lg'>GENERALES</span>
          </button>
        </div>
        <div className='col-start-1 col-span-2 md:col-start-2 md:col-span-1 md:row-start-2 flex flex-col justify-center items-center'>
          <button className='h-full w-full flex flex-col justify-center items-center'>
            <img src={cat2} alt="" className='h-3/4 md:h-5/6'/>
            <span className='text-white text-lg'>CLASES</span>
          </button>
        </div>
        <div className='col-start-2 col-span-2 md:col-start-3 md:col-span-1 flex flex-col justify-center items-center'>
          <button className='h-full w-full flex flex-col justify-center items-center'>
            <img src={cat3} alt="" className='h-3/4 md:h-5/6'/>
            <span className='text-white text-lg'>ESPECIALIDADES</span>
          </button>
        </div>
      </div>
    </div>
  )
}
