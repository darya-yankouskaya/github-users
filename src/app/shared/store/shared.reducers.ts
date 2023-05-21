import { createReducer, on } from '@ngrx/store';
import { initialState } from './shared.state';
import { changeSpinnerVisibility, toggleTheme } from './shared.actions';

export const sharedReducer = createReducer(
  initialState,
  on(changeSpinnerVisibility, (state, { payload }) => ({
    ...state,
    isSpinnerVisible: payload,
  })),
  on(toggleTheme, state => ({
    ...state,
    isDarkMode: !state.isDarkMode,
  })),
);
