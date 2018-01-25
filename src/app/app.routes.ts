import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'apps', loadChildren: 'app/apps/apps.module#AppsModule' },
  { path: 'backstage', loadChildren: 'app/backstage/backstage.module#BackstageModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: '404', loadChildren: 'app/not-found/not-found.module#NotFoundModule' },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
