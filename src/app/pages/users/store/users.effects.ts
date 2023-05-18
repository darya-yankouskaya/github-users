import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersState } from './users.state';
import { getUsers, getUsersSuccess } from './users.actions';
import { EMPTY, catchError, map, switchMap } from 'rxjs';
import { UsersApiService } from 'src/app/shared/services/users-api.service';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(() =>
        this.usersApiService.getUsers().pipe(
          map(users => getUsersSuccess({ payload: users })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<UsersState>,
    private usersApiService: UsersApiService,
  ) {}
}
