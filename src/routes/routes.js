import { MainLayout } from "../aventuri/layouts";
import { About, Home, Clases, Especialidades, Tienda } from '../aventuri/pages';

export const routes = [
  {
    path: '/',
    layout: MainLayout,
    component: Home
  },
  {
    path: '/nosotros',
    layout: MainLayout,
    component: About
  },
  {
    path: '/clases',
    layout: MainLayout,
    component: Clases
  },
  {
    path: '/especialidades',
    layout: MainLayout,
    component: Especialidades
  },
  {
    path: '/tienda',
    layout: MainLayout,
    component: Tienda
  },
]