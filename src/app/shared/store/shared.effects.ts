import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { showErrorMessage } from './shared.actions';
import { tap } from 'rxjs';

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

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}
}
