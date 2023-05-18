import { createReducer, on } from '@ngrx/store';
import { initialState } from './users.state';
import {
  getUserDetailsSuccess,
  getUserFollowersSuccess,
  getUsersSuccess,
  resetSelectedUser,
} from './users.actions';

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { payload }) => ({
    ...state,
    users: payload,
  })),
  on(getUserDetailsSuccess, (state, { payload }) => ({
    ...state,
    userDetails: payload,
  })),
  on(resetSelectedUser, state => ({
    ...state,
    userDetails: null,
    userFollowers: [],
  })),
  on(getUserFollowersSuccess, (state, { payload }) => ({
    ...state,
    userFollowers: payload,
  })),
);
