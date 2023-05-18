import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersState } from './users.state';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private store: Store<UsersState>) {}
}
