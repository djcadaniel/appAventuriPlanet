import { NavLink } from 'react-router-dom'

export const ItemNavbar = (routes) => {
  return (
    <div>
      <NavLink to={routes.path}>
        {routes.name}
      </NavLink>
    </div>
  )
}
