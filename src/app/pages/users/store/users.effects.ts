import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UsersState } from './users.state';
import {
  getUserDetails,
  getUserDetailsSuccess,
  getUserFollowers,
  getUserFollowersSuccess,
  getUserRepos,
  getUserReposSuccess,
  getUsers,
  getUsersSuccess,
} from './users.actions';
import { EMPTY, catchError, map, of, switchMap } from 'rxjs';
import { UsersApiService } from '../services/users-api.service';
import { selectParams } from '../../../shared/store/router/router.selectors';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(({ payload }) =>
        payload
          ? this.usersApiService.getUsers(payload).pipe(
              map(users => getUsersSuccess({ payload: users })),
              catchError(() => EMPTY),
            )
          : of(getUsersSuccess({ payload: [] })),
      ),
    ),
  );

  getUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetails),
      concatLatestFrom(() => [this.store.select(selectParams)]),
      switchMap(([_, params]) =>
        this.usersApiService.getUserByUsername(params['username']).pipe(
          switchMap(userDetails => [
            getUserDetailsSuccess({ payload: userDetails }),
            getUserFollowers({ payload: userDetails.followersUrl }),
            getUserRepos({ payload: userDetails.reposUrl }),
          ]),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  getUserFollowers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserFollowers),
      switchMap(({ payload }) =>
        this.usersApiService.getUserFollowers(payload).pipe(
          map(userDetails => getUserFollowersSuccess({ payload: userDetails })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  getUserRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserRepos),
      switchMap(({ payload }) =>
        this.usersApiService.getUserRepos(payload).pipe(
          map(userRepos => getUserReposSuccess({ payload: userRepos })),
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
