import { useEffect, useState } from 'react';
import { AventuriContext } from './AventuriContext'
import { getBackgoundColor } from '../helpers/getBackgroundColor';

export const AventuriProvider = ({ children }) => {

  const [isActive, setIsActive] = useState(false);
  const [menuColorState, setMenuColorState] = useState('');

  useEffect(() => {
    const handleScroll = ()=>{
      console.log(getBackgoundColor())
      setMenuColorState(getBackgoundColor())
    }

    window.addEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <AventuriContext.Provider value={ {isActive, setIsActive, menuColorState}}>
      {children}
    </AventuriContext.Provider>
  )
}