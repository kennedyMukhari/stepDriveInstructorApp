import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'the-map',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../the-map/the-map.module').then(m => m.TheMapPageModule)
          }
        ]
      },
      {
        path: 'bookings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bookings/bookings.module').then(m => m.BookingsPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'analytics',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../analytics/analytics.module').then(m => m.AnalyticsPageModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../info/info.module').then(m => m.InfoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/the-map',
        pathMatch: 'full'
      }
    ]
  },
  
  {
    path: '',
    redirectTo: '/tabs/the-map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
