import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/users',
  },
];

@NgModule({
  declarations: [UsersListComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class UsersListModule {}
