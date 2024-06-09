import iconStar from '/img/mobile/star.png';

export const TitleComponentsHome = ({children}) => {
  return (
    <div className="relative w-full h-full p-5">
      <div className='w-full'>
          <img src={iconStar} alt="" className='h-10 md:h-12 inline-block mr-2'/>
          {children}
      </div>
    </div>
  )
}