import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { AventuriRoutes } from '../aventuri/routes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />}/>
      <Route path ='/appAventuriPlanet/*' element={<AventuriRoutes />}/>
    </Routes>
  )
}
