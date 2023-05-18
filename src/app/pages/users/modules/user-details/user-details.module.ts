import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/users',
  },
];

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class UserDetailsModule {}
