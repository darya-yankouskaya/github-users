import { createReducer, on } from '@ngrx/store';
import { initialState } from './users.state';
import { getUsersSuccess } from './users.actions';

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { payload }) => ({
    ...state,
    users: payload,
  })),
);
