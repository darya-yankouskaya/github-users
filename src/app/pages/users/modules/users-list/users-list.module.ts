import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { SharedModule } from '../../../../shared/shared.module';

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
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
})
export class UsersListModule {}
