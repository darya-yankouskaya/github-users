import { createAction, props } from '@ngrx/store';

const actionPrefix = '[Shared]';

export const changeSpinnerVisibility = createAction(
  `${actionPrefix} Show Spinner`,
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
