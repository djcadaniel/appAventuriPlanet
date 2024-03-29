// import imgUniverse from '../../../../public/img/desktop/backgrounImage.png';
import { useContext } from 'react';
import { BtnDark } from '../../components/Base/BtnDark';
import imgUniverse from '/img/desktop/backgrounImage.png';
import { AventuriContext } from '../../context/AventuriContext';

export const Home = () => {  
  
  const {isActive, setIsActive} = useContext(AventuriContext);
  
  return (
    <div onClick={()=>setIsActive(!isActive)}>
      <section className={`w-full h-screen bg-azul`}>
        <div className={`main h-full w-full flex flex-row justify-center items-center ${isActive ? 'blur-sm md:blur-none backdrop-blur-sm' : '' } bg-cover bg-center bg-no-repeat`} style={{backgroundImage: `url(${imgUniverse})`}}>
          <div className='text-center mb-40'>
            <p className='text-7xl text-white mb-4'>
              <span className='block sm:inline-block font-madimi-title'>Aventuri</span>
              <span> </span>
              <span className='block sm:inline-block font-madimi-title'>Planet</span>
            </p>
            {/* <p className='text-2xl text-gray-300 mb-4 barlow-description'>un mundo lleno de ideas</p> */}
            <BtnDark />
          </div>
        </div>
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur vitae voluptatem nulla quia ipsum libero atque fuga. Voluptas libero vitae blanditiis quaerat praesentium. Dignissimos laboriosam sit veritatis sunt consectetur!
      </section>
    </div>
  )
}