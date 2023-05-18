import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState, usersFeatureKey } from './users.state';
import { selectQueryParams } from '../../../shared/store/router/router.selectors';
import { User } from '../models/user.model';

export const selectUsersFeature =
  createFeatureSelector<UsersState>(usersFeatureKey);

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users,
);

export const selectFilteredUsers = createSelector(
  selectUsers,
  selectQueryParams,
  (users, queryParams): User[] => {
    return users;
  },
);
