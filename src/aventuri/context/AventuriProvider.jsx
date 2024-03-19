import { useState } from 'react';
import { AventuriContext } from './AventuriContext'

export const AventuriProvider = ({ children }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <AventuriContext.Provider value={ {isActive, setIsActive}}>
      {children}
    </AventuriContext.Provider>
  )
}