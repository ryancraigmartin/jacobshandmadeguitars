import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./home.component').then(m => m.HomeComponent),
  },
]
