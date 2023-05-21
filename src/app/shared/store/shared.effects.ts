import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { setTheme, showErrorMessage, toggleTheme } from './shared.actions';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { SharedState } from './shared.state';
import { selectIsDarkMode } from './shared.selectors';
import { THEME_DARK_CLASS } from '../constants/theme.constants';

@Injectable()
export class SharedEffects {
  showErrorMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showErrorMessage),
        tap(({ payload }) =>
          this.snackBar.open(payload.message, payload.title),
        ),
      ),
    { dispatch: false },
  );

  setTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setTheme),
        concatLatestFrom(() => [this.store.select(selectIsDarkMode)]),
        tap(([_, isDarkMode]) => {
          if (isDarkMode) {
            document.body.classList.add(THEME_DARK_CLASS);
          }
        }),
      ),
    { dispatch: false },
  );

  toggleTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(toggleTheme),
        tap(() => document.body.classList.toggle(THEME_DARK_CLASS)),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar,
    private store: Store<SharedState>,
  ) {}
}
