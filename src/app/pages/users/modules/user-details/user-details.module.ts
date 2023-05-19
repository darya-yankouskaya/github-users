import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';

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
  declarations: [
    UserDetailsComponent,
    UserFollowersComponent,
    UserReposComponent,
    UserRepoComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class UserDetailsModule {}
