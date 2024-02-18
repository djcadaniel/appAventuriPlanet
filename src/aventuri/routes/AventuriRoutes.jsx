import { Route, Routes } from 'react-router-dom'
import { routes } from '../../routes/routes'

export const AventuriRoutes = () => {
  return (
    <Routes>
      {
        routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            element= {
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))
      }
    </Routes>
  )
}