import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  }];
