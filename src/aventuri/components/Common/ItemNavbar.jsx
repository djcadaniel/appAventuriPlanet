import { NavLink } from 'react-router-dom'

export const ItemNavbar = (routes) => {
  return (
    <NavLink to={routes.path}>
      {routes.name}
    </NavLink>
  )
}
