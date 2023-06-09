import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, usersFeatureKey } from './users.state';

export const selectUsersFeature =
  createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users,
);

export const selectUserDetails = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.userDetails,
);

export const selectUserFollowers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.userFollowers,
);

export const selectUserRepos = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.userRepos,
);
