import { TitleComponentsHome } from "../Common/TitleComponentsHome"
import iconStar from '/img/mobile/star.png';
import { ItemInvitation } from "./ItemInvitation";
import ins1 from '/img/desktop/instagram/1.jpg'
import ins2 from '/img/desktop/instagram/2.jpg'
import ins3 from '/img/desktop/instagram/3.jpg'
import ins4 from '/img/desktop/instagram/4.jpg'
import ins5 from '/img/desktop/instagram/5.jpg'
import ins6 from '/img/desktop/instagram/1.jpg'
import ins7 from '/img/desktop/instagram/2.jpg'
import ins8 from '/img/desktop/instagram/3.jpg'

const imagesInstagram = [
  {
    id:1,
    image: ins1
  },
  {
    id:2,
    image: ins2
  },
  {
    id:3,
    image: ins3
  },
  {
    id:4,
    image: ins4
  },
  {
    id:5,
    image: ins5
  },
  {
    id:6,
    image: ins6
  },
  {
    id:7,
    image: ins7
  },
  {
    id:8,
    image: ins8
  }
]

export const Invitation = () => {
  return (
    <div className="w-full h-full p-5 md:p-12 container2">
      <TitleComponentsHome>
        <img src={iconStar} alt="" className=' h-10 md:h-12 inline-block mr-2'/>
        <h1 className="title inline-block align-bottom">Te invitamos a seguirnos en Instagram</h1>
      </TitleComponentsHome>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 w-full h-full gap-8 p-5 md:p-14">
        {imagesInstagram.map(item=>(
          <ItemInvitation 
            key={item.id}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}