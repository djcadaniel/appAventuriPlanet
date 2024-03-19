import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AventuriContext } from "../../../../context/AventuriContext";

export const useMenu = () => {

  const {isActive, setIsActive} = useContext(AventuriContext);
  const {pathname} = useLocation();

  const onChangeMenu = ()=>{
    setIsActive(!isActive)
  }
  
  return {
    // isActive,
    pathname,
    onChangeMenu
  }
}