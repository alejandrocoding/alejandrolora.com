import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'apps', loadChildren: 'app/apps/apps.module#AppsModule' },
  { path: 'courses-books', loadChildren: 'app/apps/apps.module#AppsModule' },
  { path: 'not-found', loadChildren: 'app/not-found/not-found.module#NotFoundModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
