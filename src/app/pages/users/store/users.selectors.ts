import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, usersFeatureKey } from './users.state';

export const selectUsersFeature =
  createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users,
);
