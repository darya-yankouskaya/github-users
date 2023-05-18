import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { usersFeatureKey } from './store/users.state';
import { usersReducer } from './store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature(UsersEffects),
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    UsersRoutingModule,
    SharedModule,
  ],
})
export class UsersModule {}
