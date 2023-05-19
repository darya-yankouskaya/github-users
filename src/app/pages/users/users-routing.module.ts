import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/users-list/users-list.module').then(
        m => m.UsersListModule,
      ),
    pathMatch: 'full',
    data: { animation: 'usersListPage' },
  },
  {
    path: ':username',
    loadChildren: () =>
      import('./modules/user-details/user-details.module').then(
        m => m.UserDetailsModule,
      ),
    data: { animation: 'userDetailsPage' },
  },
  {
    path: '**',
    redirectTo: '/users',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
