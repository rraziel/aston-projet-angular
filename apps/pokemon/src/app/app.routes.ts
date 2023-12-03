import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@pokemon/home').then((m) => m.HomeComponent),
  },
  {
    path: 'pokemons/:pokemonName',
    loadComponent: () =>
      import('@pokemon/details').then((m) => m.DetailsComponent),
  },
  {
    path: 'pokemons',
    pathMatch: 'full',
    loadComponent: () => import('@pokemon/list').then((m) => m.ListComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@pokemon/notfound').then((m) => m.NotFoundComponent),
  },
];
