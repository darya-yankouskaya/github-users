import { createAction, props } from '@ngrx/store';

const actionPrefix = '[Shared]';

export const changeSpinnerVisibility = createAction(
  `${actionPrefix} Change Spinner Visibility`,
  props<{ payload: boolean }>(),
);

export const showErrorMessage = createAction(
  `${actionPrefix} Show Error Snackbar`,
  props<{
    payload: {
      title: string;
      message: string;
    };
  }>(),
);

export const toggleTheme = createAction(`${actionPrefix} Toggle Theme`);

export const setTheme = createAction(`${actionPrefix} Set Theme`);
