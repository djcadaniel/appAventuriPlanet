import { NavLink } from 'react-router-dom'

export const ItemNavbar = (routes) => {
  return (
    <div>
      <NavLink to={routes.path} className='text-lg'>
        {routes.name}
      </NavLink>
    </div>
  )
}
